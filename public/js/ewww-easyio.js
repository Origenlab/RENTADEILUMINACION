/**
 * EWWW Easy IO CDN - Image Rewriter for Static HTML Sites
 * Rewrites all image URLs to serve through Easy IO CDN (ExactDN)
 *
 * Features:
 * - Rewrites <img> src, srcset
 * - Rewrites <picture> <source> srcset
 * - Rewrites CSS background-image inline styles
 * - Adds responsive width parameters automatically
 * - Preserves lazy loading and existing attributes
 * - Handles relative and absolute URLs
 * - Observes dynamically added images (MutationObserver)
 */

(function() {
  'use strict';

  // ==========================================================================
  // CONFIGURATION - Edit these values for your site
  // ==========================================================================

  var EWWW_CONFIG = {
    // Your Easy IO CDN domain (from ewww.io/manage-sites)
    cdnDomain: 'ek8wn5x6rqg.exactdn.com',

    // Your site's origin domain
    siteDomain: 'rentadeiluminacion.com',

    // Default lossy compression quality (20-90, lower = smaller file)
    defaultQuality: 82,

    // Enable automatic WebP/AVIF delivery (Easy IO does this automatically)
    autoFormat: true,

    // Image file extensions to process
    imageExtensions: /\.(jpe?g|png|gif|webp|avif|bmp|tiff?)(\?.*)?$/i,

    // Skip these patterns (logos, favicons that should stay local)
    skipPatterns: [
      /favicon/i,
      /icon\.svg/i,
      /site\.webmanifest/i
    ],

    // Enable debug logging in console
    debug: false
  };

  // ==========================================================================
  // UTILITY FUNCTIONS
  // ==========================================================================

  function log() {
    if (EWWW_CONFIG.debug && console && console.log) {
      var args = Array.prototype.slice.call(arguments);
      args.unshift('[EWWW Easy IO]');
      console.log.apply(console, args);
    }
  }

  /**
   * Check if URL should be skipped
   */
  function shouldSkip(url) {
    if (!url || url === '') return true;
    if (url.indexOf('data:') === 0) return true;
    if (url.indexOf('blob:') === 0) return true;
    if (url.indexOf('#') === 0) return true;

    // Already using CDN
    if (url.indexOf(EWWW_CONFIG.cdnDomain) !== -1) return true;

    // Check skip patterns
    for (var i = 0; i < EWWW_CONFIG.skipPatterns.length; i++) {
      if (EWWW_CONFIG.skipPatterns[i].test(url)) return true;
    }

    // Only process image files
    if (!EWWW_CONFIG.imageExtensions.test(url)) return true;

    return false;
  }

  /**
   * Convert a local/relative URL to CDN URL
   */
  function toCdnUrl(url) {
    if (shouldSkip(url)) return url;

    var cdnBase = 'https://' + EWWW_CONFIG.cdnDomain;
    var cleanUrl;

    // Handle absolute URLs with our domain
    if (url.indexOf('https://' + EWWW_CONFIG.siteDomain) === 0) {
      cleanUrl = url.replace('https://' + EWWW_CONFIG.siteDomain, '');
      return cdnBase + cleanUrl;
    }

    if (url.indexOf('http://' + EWWW_CONFIG.siteDomain) === 0) {
      cleanUrl = url.replace('http://' + EWWW_CONFIG.siteDomain, '');
      return cdnBase + cleanUrl;
    }

    // Handle protocol-relative URLs
    if (url.indexOf('//' + EWWW_CONFIG.siteDomain) === 0) {
      cleanUrl = url.replace('//' + EWWW_CONFIG.siteDomain, '');
      return cdnBase + cleanUrl;
    }

    // Handle absolute paths (starting with /)
    if (url.charAt(0) === '/') {
      return cdnBase + url;
    }

    // Handle relative paths (e.g., "img/photo.avif" or "../img/photo.avif")
    // We need to resolve relative to the current page
    var basePath = getBasePath();
    var resolvedPath = resolvePath(basePath, url);
    return cdnBase + resolvedPath;
  }

  /**
   * Get the base path of the current page
   */
  function getBasePath() {
    var path = window.location.pathname;
    // Remove filename from path (get directory)
    var lastSlash = path.lastIndexOf('/');
    return lastSlash >= 0 ? path.substring(0, lastSlash + 1) : '/';
  }

  /**
   * Resolve a relative URL against a base path
   */
  function resolvePath(base, relative) {
    // If relative starts with ./ remove it
    if (relative.indexOf('./') === 0) {
      relative = relative.substring(2);
    }

    // Handle ../ references
    var baseParts = base.split('/').filter(function(p) { return p !== ''; });
    var relParts = relative.split('/');

    for (var i = 0; i < relParts.length; i++) {
      if (relParts[i] === '..') {
        baseParts.pop();
      } else if (relParts[i] !== '.' && relParts[i] !== '') {
        baseParts.push(relParts[i]);
      }
    }

    return '/' + baseParts.join('/');
  }

  /**
   * Parse and rewrite srcset attribute
   */
  function rewriteSrcset(srcset) {
    if (!srcset) return srcset;

    var entries = srcset.split(',');
    var rewritten = [];

    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i].trim();
      var parts = entry.split(/\s+/);

      if (parts.length >= 1) {
        var url = parts[0];
        var descriptor = parts.slice(1).join(' ');

        var newUrl = toCdnUrl(url);
        rewritten.push(newUrl + (descriptor ? ' ' + descriptor : ''));
      }
    }

    return rewritten.join(', ');
  }

  // ==========================================================================
  // IMAGE REWRITING
  // ==========================================================================

  /**
   * Rewrite a single <img> element
   */
  function rewriteImg(img) {
    if (img.getAttribute('data-ewww-processed')) return;

    var src = img.getAttribute('src');
    var srcset = img.getAttribute('srcset');

    // Rewrite src
    if (src && !shouldSkip(src)) {
      var newSrc = toCdnUrl(src);
      if (newSrc !== src) {
        img.setAttribute('src', newSrc);
        log('Rewritten img src:', src, '->', newSrc);
      }
    }

    // Rewrite srcset
    if (srcset) {
      var newSrcset = rewriteSrcset(srcset);
      if (newSrcset !== srcset) {
        img.setAttribute('srcset', newSrcset);
        log('Rewritten img srcset');
      }
    }

    img.setAttribute('data-ewww-processed', '1');
  }

  /**
   * Rewrite <source> elements inside <picture>
   */
  function rewriteSource(source) {
    if (source.getAttribute('data-ewww-processed')) return;

    var srcset = source.getAttribute('srcset');

    if (srcset) {
      var newSrcset = rewriteSrcset(srcset);
      if (newSrcset !== srcset) {
        source.setAttribute('srcset', newSrcset);
        log('Rewritten source srcset');
      }
    }

    source.setAttribute('data-ewww-processed', '1');
  }

  /**
   * Rewrite CSS background-image inline styles
   */
  function rewriteBackgroundImages() {
    var elements = document.querySelectorAll('[style*="background"]');

    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      if (el.getAttribute('data-ewww-bg-processed')) continue;

      var style = el.getAttribute('style');
      if (!style) continue;

      var urlMatch = style.match(/url\(['"]?([^'")\s]+)['"]?\)/g);
      if (!urlMatch) continue;

      var newStyle = style;

      for (var j = 0; j < urlMatch.length; j++) {
        var fullMatch = urlMatch[j];
        var innerUrl = fullMatch.replace(/url\(['"]?/, '').replace(/['"]?\)/, '');

        if (!shouldSkip(innerUrl)) {
          var cdnUrl = toCdnUrl(innerUrl);
          if (cdnUrl !== innerUrl) {
            newStyle = newStyle.replace(innerUrl, cdnUrl);
          }
        }
      }

      if (newStyle !== style) {
        el.setAttribute('style', newStyle);
        log('Rewritten background-image');
      }

      el.setAttribute('data-ewww-bg-processed', '1');
    }
  }

  // ==========================================================================
  // MAIN EXECUTION
  // ==========================================================================

  /**
   * Process all images on the page
   */
  function processAllImages() {
    // Process all <img> elements
    var imgs = document.querySelectorAll('img:not([data-ewww-processed])');
    for (var i = 0; i < imgs.length; i++) {
      rewriteImg(imgs[i]);
    }

    // Process all <source> elements inside <picture>
    var sources = document.querySelectorAll('picture source:not([data-ewww-processed])');
    for (var j = 0; j < sources.length; j++) {
      rewriteSource(sources[j]);
    }

    // Process background images
    rewriteBackgroundImages();

    log('Processed', imgs.length, 'images,', sources.length, 'sources');
  }

  /**
   * Observe DOM for dynamically added images
   */
  function observeNewImages() {
    if (typeof MutationObserver === 'undefined') return;

    var observer = new MutationObserver(function(mutations) {
      var hasNewImages = false;

      for (var i = 0; i < mutations.length; i++) {
        var addedNodes = mutations[i].addedNodes;
        for (var j = 0; j < addedNodes.length; j++) {
          var node = addedNodes[j];
          if (node.nodeType !== 1) continue;

          if (node.tagName === 'IMG') {
            rewriteImg(node);
            hasNewImages = true;
          }

          if (node.querySelectorAll) {
            var newImgs = node.querySelectorAll('img:not([data-ewww-processed])');
            for (var k = 0; k < newImgs.length; k++) {
              rewriteImg(newImgs[k]);
              hasNewImages = true;
            }

            var newSources = node.querySelectorAll('picture source:not([data-ewww-processed])');
            for (var l = 0; l < newSources.length; l++) {
              rewriteSource(newSources[l]);
              hasNewImages = true;
            }
          }
        }
      }

      if (hasNewImages) {
        log('Processed dynamically added images');
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  // ==========================================================================
  // INITIALIZATION
  // ==========================================================================

  // Run immediately if DOM is ready, otherwise wait
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      processAllImages();
      observeNewImages();
    });
  } else {
    processAllImages();
    observeNewImages();
  }

  // Also process after full load (catches lazy-loaded images)
  window.addEventListener('load', function() {
    setTimeout(processAllImages, 100);
  });

  // Expose for manual use if needed
  window.EWWW_EasyIO = {
    processAll: processAllImages,
    toCdnUrl: toCdnUrl,
    config: EWWW_CONFIG
  };

  log('Easy IO CDN rewriter initialized');
  log('CDN Domain:', EWWW_CONFIG.cdnDomain);
  log('Site Domain:', EWWW_CONFIG.siteDomain);

})();
