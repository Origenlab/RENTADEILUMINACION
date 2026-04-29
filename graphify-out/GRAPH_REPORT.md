# Graph Report - .  (2026-04-21)

## Corpus Check
- 69 files · ~53,363 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 14 nodes · 12 edges · 2 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]

## God Nodes (most connected - your core abstractions)
1. `getAllFiles()` - 3 edges
2. `optimizeImages()` - 3 edges
3. `rewriteHtml()` - 2 edges
4. `main()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 1 - "Community 1"
Cohesion: 0.83
Nodes (2): getAllFiles(), optimizeImages()

### Community 2 - "Community 2"
Cohesion: 1.0
Nodes (2): main(), rewriteHtml()

## Knowledge Gaps
- **Thin community `Community 1`** (4 nodes): `getAllFiles()`, `optimize_avif.js`, `optimize_avif.mjs`, `optimizeImages()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 2`** (3 nodes): `main()`, `rewriteHtml()`, `rewrite-cdn.mjs`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Not enough signal to generate questions. This usually means the corpus has no AMBIGUOUS edges, no bridge nodes, no INFERRED relationships, and all communities are tightly cohesive. Add more files or run with --mode deep to extract richer edges._