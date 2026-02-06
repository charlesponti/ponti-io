---
title: Landing Page Redesign - Craigslist Minimalism for AI Design Studio
type: feat
date: 2026-02-06
---

# Landing Page Redesign: Craigslist Minimalism for AI Design Studio

## Overview

Redesign the Ponti Studios landing page to embody Craigslist-level minimalism while maintaining the sophisticated terminal aesthetic already in place. The goal is exceptional typography, ultra-minimal UI, and subtle animations that don't compete with content.

**Current State**: Astro.js project with ASCII globe, monospace fonts, black/white/grey palette, terminal-style borders already implemented.
**Target**: Refine to Craigslist-level minimalism - everything earns its place, exceptional typography, zero decoration without purpose.

---

## Problem Statement

The current landing page has the right ingredients (ASCII globe, monochrome palette, monospace fonts) but needs refinement to achieve true Craigslist minimalism:

1. **Visual noise**: Current ascii-frame borders may be too heavy for true minimalism
2. **Content hierarchy**: Typography scale could be more disciplined
3. **Missing credibility**: No work samples/portfolio section for a design studio
4. **Unclear conversion**: CTA strategy not optimized for Craigslist-style directness
5. **Animation philosophy**: Need to define what "subtle" means

---

## Proposed Solution

Evolve the current design toward radical minimalism while keeping what works:

**Keep**:
- ASCII spinning globe (signature element)
- Space Mono font family
- Black background, white/grey text
- Terminal/command-line aesthetic

**Refine**:
- Simplify borders (thinner, less prominent)
- Implement strict typographic hierarchy
- Add work/portfolio section (text-only, Craigslist style)
- Streamline to single-page scroll experience
- Reduce visual weight of containers

**Add**:
- Portfolio/Work section (critical for design studio credibility)
- Refined CTA terminal-style interaction
- Loading states that fit the terminal aesthetic
- Respect for `prefers-reduced-motion`

---

## Technical Considerations

### Architecture
- **Framework**: Astro.js (keep) - excellent for static sites with islands of interactivity
- **Styling**: Tailwind CSS v4 (keep) - already configured with custom theme
- **Animations**: Framer Motion (keep) - for subtle interactions
- **Font**: Space Mono via Google Fonts (keep) - load with `display: swap`

### Typography System

```css
/* Strict monospace hierarchy - Fibonacci-based scale */
--text-hero: clamp(48px, 8vw, 96px);      /* Main headline */
--text-section: clamp(24px, 4vw, 48px);   /* Section headers */
--text-body: 16px;                         /* Body copy */
--text-meta: 12px;                         /* Labels, metadata */
--text-micro: 10px;                        /* Terminal details */

/* Line heights */
--leading-tight: 1.1;     /* Headlines */
--leading-snug: 1.3;      /* Subheadings */
--leading-normal: 1.6;    /* Body text */
```

### Color System (Monochrome Only)

```css
/* Strict black/white/grey */
--bg-primary: #000000;     /* Pure black background */
--text-primary: #ffffff;   /* Pure white text */
--text-secondary: #a1a1aa; /* Zinc-400 for secondary */
--text-muted: #71717a;     /* Zinc-500 for muted */
--text-subtle: #3f3f46;    /* Zinc-700 for very subtle */
--border-subtle: rgba(255, 255, 255, 0.1);  /* 10% white borders */
```

### Spacing System

```css
/* Fibonacci-inspired spacing */
--space-xs: 8px;
--space-sm: 13px;
--space-md: 21px;
--space-lg: 34px;
--space-xl: 55px;
--space-2xl: 89px;
```

---

## Page Structure & Sections

### 1. ASCII Globe (Background Layer)
- **Position**: Fixed full-screen background
- **Z-index**: Behind all content (z-0)
- **Interaction**: Ambient rotation only (no mouse parallax - too distracting)
- **Reduced motion**: Static ASCII art frame when `prefers-reduced-motion`

### 2. Navigation (Minimal)
- **Style**: Fixed top, transparent background
- **Content**: Studio name + Contact link only
- **Border**: None or ultra-subtle 1px bottom border
- **Typography**: 12px uppercase, letter-spacing 0.35em

### 3. Hero Section
- **Headline**: Large, bold, uppercase
- **Subhead**: One sentence positioning statement
- **Terminal block**: Status information (current state has this)
- **CTA**: Terminal-style prompt

```
PONTI STUDIOS

We design AI systems that disappear into the background.

$ status
> accepting projects: Q1 2026
> response_time: < 24h
> contact: hello@ponti.io
```

### 4. Services Section
- **Format**: Text-only list (not grid)
- **Style**: Monospaced table layout with dots
- **Animation**: None (static text)

```
Services
────────────────────────────────────────
Interface Design .......... AI product UX/UI
Design Systems ............ Scalable components  
Prototyping ............... Interactive demos
Design Engineering ........ React/TypeScript
```

### 5. Work/Portfolio Section (NEW)
- **Format**: Chronological list, text-only
- **Columns**: Year | Project | Client
- **Links**: Entire row clickable to case study or external
- **Empty state**: "Selected work available on request"

```
Selected Work
────────────────────────────────────────
2024  Neural Search ............... Vercel
2024  AI Writing Tools ............ Linear
2023  Model Visualization ......... Weights & Biases
2023  Agent Interface ............. Internal
```

### 6. About Section
- **Content**: 2-3 sentences max
- **Format**: No borders, just text
- **Tone**: Direct, no fluff

### 7. Contact/CTA Section
- **Format**: Terminal command prompt style
- **Interaction**: Click to copy email or open mailto
- **Alternative**: Simple mailto link (most Craigslist-like)

```
Contact
────────────────────────────────────────

$ initiate --contact

> hello@ponti.io
> [Click to copy email]
```

### 8. Footer
- **Content**: Copyright only
- **Style**: Smallest text size, muted color
- **Position**: End of scroll

---

## Animation Philosophy

**Principle**: Animations must serve readability, not decoration.

### Allowed Animations
1. **ASCII Globe**: Continuous slow rotation (ambient only)
2. **Cursor blink**: On terminal prompts only
3. **Hover states**: Color shift or underline (0.2s transition)
4. **Page load**: Fade in content (not staggered - all at once)

### Forbidden Animations
- Parallax scrolling
- Scroll-triggered reveals
- Staggered animations
- Bouncing/spring effects
- Gradient animations
- Scale transforms on scroll

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
  
  /* ASCII globe becomes static */
  .ascii-globe {
    animation: none;
  }
}
```

---

## Responsive Behavior

### Desktop (1200px+)
- Full ASCII globe visible
- Side-by-side layouts where appropriate
- Maximum content width: 1200px centered

### Tablet (768px - 1199px)
- Simplified ASCII globe (fewer characters)
- Single column for most content
- Maintained typography scale

### Mobile (< 768px)
- ASCII globe as subtle background texture (very low opacity)
- Single column, full-width text
- Increased line height for readability
- Touch-friendly tap targets (min 44px)

---

## Implementation Files

### New Files to Create

1. **`components/landing/work.tsx`**
   - Portfolio section component
   - Text-only list format
   - TypeScript props for work items

2. **`components/landing/contact.tsx`**
   - Terminal-style CTA
   - Copy-to-clipboard functionality
   - Fallback mailto link

3. **`components/copy-button.tsx`**
   - Reusable copy-to-clipboard button
   - Terminal aesthetic
   - Success state feedback

4. **`content/work.json`**
   - Portfolio data source
   - Schema: year, project, client, url (optional)

### Files to Modify

1. **`components/landing/hero.tsx`**
   - Simplify terminal block
   - Refine typography hierarchy
   - Reduce visual weight

2. **`components/landing/services.tsx`**
   - Convert from grid to text list
   - Use dot-leader format
   - Remove borders or make ultra-subtle

3. **`components/landing/about.tsx`**
   - Reduce to essential content
   - Remove ascii-frame or make minimal

4. **`src/styles/global.css`**
   - Add new typography utilities
   - Refine border styles
   - Update spacing tokens

5. **`src/pages/index.astro`**
   - Add Work section
   - Add Contact section
   - Reorder sections if needed

---

## Content Requirements

### Immediate Needs
- [ ] 3-5 portfolio projects with year, title, client
- [ ] Refined one-sentence positioning statement
- [ ] Services list (4-5 items max)
- [ ] Contact email and response time policy

### Optional Enhancements
- [ ] Case study links for portfolio items
- [ ] Client logos (text-only, no images)
- [ ] Availability status ("accepting projects" / "booked")

---

## Accessibility Requirements

- [ ] Keyboard navigation for all interactive elements
- [ ] Focus indicators visible (2px outline offset)
- [ ] Color contrast 4.5:1 minimum for all text
- [ ] Semantic HTML (nav, main, section, article)
- [ ] Alt text for ASCII globe ("Animated ASCII art globe")
- [ ] Skip to content link
- [ ] Reduced motion support

---

## Performance Targets

- [ ] First Contentful Paint: < 1.5s
- [ ] Largest Contentful Paint: < 2.5s
- [ ] Time to Interactive: < 3.5s
- [ ] Lighthouse Performance: > 90
- [ ] Lighthouse Accessibility: > 95

---

## Dependencies

**Already Present**:
- Astro.js 5.x
- React 19
- Tailwind CSS 4.x
- Framer Motion
- Space Mono font

**No New Dependencies Required** - work with existing stack.

---

## Success Metrics

**Qualitative**:
- Design feels "effortless" - no visual clutter
- Typography is crisp and readable
- ASCII globe is recognizable but not distracting
- Page loads instantly (no perceptible delay)

**Quantitative**:
- Bounce rate < 40%
- Time on page > 2 minutes
- Contact form/email clicks > 5% of visitors
- Lighthouse scores > 90 across all categories

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Too minimal - lacks credibility | High | Add portfolio section, keep work samples prominent |
| ASCII globe too distracting | Medium | Reduce opacity to 40-50%, ensure it doesn't compete with text |
| Typography feels cold/sterile | Medium | Use strategic white space, ensure line-height is generous |
| Mobile experience suffers | Medium | Simplify globe on mobile, increase touch targets |
| No portfolio content ready | High | Create "Work available on request" placeholder |

---

## References & Research

### Internal References
- `components/ascii-globe.tsx` - Existing globe animation (keep)
- `components/landing/hero.tsx` - Current hero (refine)
- `components/landing/services.tsx` - Current services (simplify)
- `src/styles/global.css` - Theme configuration (extend)
- `src/layouts/BaseLayout.astro` - Page layout (keep structure)

### External Inspiration
- **Craigslist** - Ultimate minimalism, everything earns its place
- **Brutalist Websites** - Raw, unpolished aesthetic
- **Terminal/CLI apps** - Command-line interface patterns
- **Monospace type specimens** - Exceptional typography examples

### Technical References
- [Tailwind CSS Typography](https://tailwindcss.com/docs/font-family)
- [CSS prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [Astro Islands Architecture](https://docs.astro.build/en/concepts/islands/)

---

## Implementation Phases

### Phase 1: Foundation (1-2 days)
- [ ] Audit current components
- [ ] Define final typography scale in CSS
- [ ] Create Work section component skeleton
- [ ] Create Contact section component skeleton

### Phase 2: Content & Layout (2-3 days)
- [ ] Populate portfolio content
- [ ] Refine Hero section typography
- [ ] Simplify Services section to list format
- [ ] Update About section content

### Phase 3: Polish (1-2 days)
- [ ] Fine-tune ASCII globe opacity
- [ ] Implement reduced motion support
- [ ] Add copy-to-clipboard functionality
- [ ] Responsive testing and adjustments

### Phase 4: Testing (1 day)
- [ ] Lighthouse audit
- [ ] Accessibility check (keyboard nav, contrast)
- [ ] Cross-browser testing
- [ ] Mobile testing

---

## Open Questions

1. **Portfolio content**: Do you have 3-5 projects ready to list, or should we use a placeholder?
2. **CTA preference**: Email link only, copy-to-clipboard, or contact form?
3. **Navigation**: Keep minimal top nav, or pure single-page scroll?
4. **ASCII globe prominence**: Background layer as-is, or should it be more subtle?
5. **Case studies**: Do portfolio items link to detail pages, or external sites?

---

## Acceptance Criteria

- [ ] Page uses only black, white, and grey colors
- [ ] Only Space Mono font family (no other fonts)
- [ ] ASCII globe animates smoothly in background
- [ ] All sections follow Craigslist-style minimalism (text-heavy, low decoration)
- [ ] Portfolio/Work section displays 3+ projects
- [ ] Contact CTA is prominent and functional
- [ ] Typography hierarchy is clear and exceptional
- [ ] Animations are subtle (globe rotation, hover states only)
- [ ] Reduced motion preferences respected
- [ ] Mobile experience is fully functional
- [ ] Lighthouse scores > 90 (Performance, Accessibility, Best Practices, SEO)
- [ ] Load time < 3 seconds on 3G connection

---

## File Locations

```
components/
├── landing/
│   ├── hero.tsx          # Modify - simplify
│   ├── services.tsx      # Modify - list format
│   ├── about.tsx         # Modify - reduce
│   ├── work.tsx          # Create - NEW
│   └── contact.tsx       # Create - NEW
├── ascii-globe.tsx       # Keep - maybe adjust opacity
└── copy-button.tsx       # Create - NEW utility

content/
└── work.json             # Create - portfolio data

src/
├── pages/
│   └── index.astro       # Modify - add sections
├── layouts/
│   └── BaseLayout.astro  # Keep - adjust if needed
└── styles/
    └── global.css        # Modify - typography, borders
```

---

*Plan created: 2026-02-06*
*Next step: Review plan, answer open questions, begin Phase 1 implementation*
