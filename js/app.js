/**
 * REDEIL - Renta de Iluminaci�n
 * Main JavaScript Application
 */

(function() {
  'use strict';

  // ==========================================================================
  // DOM Elements
  // ==========================================================================

  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const submenuParents = document.querySelectorAll('.has-submenu');
  const faqItems = document.querySelectorAll('.faq-item');
  const quoteForm = document.getElementById('quote-form');
  const dateInput = document.getElementById('fecha');

  // ==========================================================================
  // Header Scroll Effect
  // ==========================================================================

  function handleHeaderScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll);
  handleHeaderScroll(); // Check on load

  // ==========================================================================
  // Mobile Navigation
  // ==========================================================================

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Mobile submenu toggle
  submenuParents.forEach(function(parent) {
    const link = parent.querySelector('a');

    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        parent.classList.toggle('active');
      }
    });
  });

  // ==========================================================================
  // Smooth Scroll for Anchor Links
  // ==========================================================================

  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();

        // Close mobile menu if open
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';

        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update URL without scrolling
        history.pushState(null, null, targetId);
      }
    });
  });

  // ==========================================================================
  // FAQ Accordion Enhancement
  // ==========================================================================

  faqItems.forEach(function(item) {
    const summary = item.querySelector('summary');

    summary.addEventListener('click', function(e) {
      // Optional: Close other FAQ items when opening a new one
      // faqItems.forEach(function(otherItem) {
      //   if (otherItem !== item && otherItem.hasAttribute('open')) {
      //     otherItem.removeAttribute('open');
      //   }
      // });
    });
  });

  // ==========================================================================
  // Form Validation and Handling
  // ==========================================================================

  // Set minimum date for event date picker (today)
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = new FormData(quoteForm);
      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      // Validate form
      if (!validateForm(formData)) {
        return;
      }

      // Show loading state
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';

      // Simulate form submission (replace with actual API call)
      setTimeout(function() {
        // Success handling
        showFormMessage('success', '�Gracias! Tu solicitud ha sido enviada. Te contactaremos pronto.');
        quoteForm.reset();

        // Reset button
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;

        // Track conversion (if analytics is set up)
        if (typeof gtag !== 'undefined') {
          gtag('event', 'generate_lead', {
            event_category: 'engagement',
            event_label: 'quote_form_submit'
          });
        }
      }, 1500);
    });
  }

  function validateForm(formData) {
    const nombre = formData.get('nombre').trim();
    const tipoEvento = formData.get('tipo_evento');
    const fecha = formData.get('fecha');
    const whatsapp = formData.get('whatsapp').trim();

    // Name validation
    if (nombre.length < 3) {
      showFormMessage('error', 'Por favor ingresa tu nombre completo');
      return false;
    }

    // Event type validation
    if (!tipoEvento) {
      showFormMessage('error', 'Por favor selecciona el tipo de evento');
      return false;
    }

    // Date validation
    if (!fecha) {
      showFormMessage('error', 'Por favor selecciona la fecha del evento');
      return false;
    }

    // Phone validation (Mexican phone format)
    const phoneRegex = /^[\d\s\-\+\(\)]{10,15}$/;
    if (!phoneRegex.test(whatsapp)) {
      showFormMessage('error', 'Por favor ingresa un n�mero de WhatsApp v�lido');
      return false;
    }

    return true;
  }

  function showFormMessage(type, message) {
    // Remove existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `form-message form-message-${type}`;
    messageEl.textContent = message;

    // Insert before form
    quoteForm.parentNode.insertBefore(messageEl, quoteForm);

    // Auto-remove after 5 seconds
    setTimeout(function() {
      messageEl.classList.add('fade-out');
      setTimeout(function() {
        messageEl.remove();
      }, 300);
    }, 5000);

    // Scroll to message
    messageEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }


  // ==========================================================================
  // WhatsApp Button Enhancement
  // ==========================================================================

  const whatsappFloat = document.querySelector('.whatsapp-float');

  if (whatsappFloat) {
    // Show tooltip on hover
    whatsappFloat.setAttribute('title', 'Chatea con nosotros');

    // Track WhatsApp clicks
    whatsappFloat.addEventListener('click', function() {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          event_category: 'engagement',
          event_label: 'whatsapp_float_click'
        });
      }
    });
  }

  // ==========================================================================
  // Service Card Click Tracking
  // ==========================================================================

  document.querySelectorAll('.service-card .btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const serviceName = this.closest('.service-card').querySelector('h3').textContent;

      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          event_category: 'engagement',
          event_label: 'service_card_click',
          service_name: serviceName
        });
      }
    });
  });

  // ==========================================================================
  // Catalog Item Click Tracking
  // ==========================================================================

  document.querySelectorAll('.catalog-item').forEach(function(item) {
    item.addEventListener('click', function() {
      const itemName = this.querySelector('h3').textContent;

      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          event_category: 'engagement',
          event_label: 'catalog_item_click',
          item_name: itemName
        });
      }
    });
  });

  // ==========================================================================
  // Back to Top Button (Optional - Add if needed)
  // ==========================================================================

  function createBackToTopButton() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', 'Volver arriba');
    btn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"/></svg>';
    document.body.appendChild(btn);

    window.addEventListener('scroll', function() {
      if (window.scrollY > 500) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });

    btn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  createBackToTopButton();

  // ==========================================================================
  // Phone Link Enhancement
  // ==========================================================================

  document.querySelectorAll('a[href^="tel:"]').forEach(function(link) {
    link.addEventListener('click', function() {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          event_category: 'engagement',
          event_label: 'phone_click'
        });
      }
    });
  });

  // ==========================================================================
  // Console Greeting (Development)
  // ==========================================================================

  console.log('%cREDEIL', 'color: #e63946; font-size: 24px; font-weight: bold;');
  console.log('%cRenta de Iluminaci�n Profesional', 'color: #1a1a2e; font-size: 14px;');
  console.log('%c�Interesado en trabajar con nosotros? Contacta: hola@rentadeiluminacion.com', 'color: #6c757d; font-size: 12px;');

})();
