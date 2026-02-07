---
title: Landing Page Redesign - Japanese Minimalism for AI Design Studio
type: feat
date: 2026-02-06
enhanced: 2026-02-06
design_philosophy: Japanese Minimalism (Wabi-sabi, Ma, Kanso, Shibui)
---

# Landing Page Redesign: Japanese Minimalism for AI Design Studio

## Enhancement Summary

**Deepened on:** 2026-02-06  
**Sections enhanced:** 8 major sections  
**Research agents used:** 
- Japanese minimalist design principles
- ASCII animation optimization
- Client logo showcase patterns
- Typography-first design systems
- Performance optimization for minimal sites

### Key Improvements from Deep Research

1. **Shift from Craigslist to Japanese Minimalism** - Moved beyond stark utilitarianism to incorporate wabi-sabi (beauty in imperfection), ma (generous negative space), and shibui (subtle depth)

2. **Complete ASCII Globe Rewrite** - Comprehensive technical specification for rebuilding the globe from scratch with performance optimizations, accessibility support, and reduced-motion fallbacks

3. **Client Logo Portfolio Strategy** - Typography-first approach with optional grayscale logo grid; work is private so logos serve as trust signals only

4. **Rigorous Typography System** - Fluid type scale with Japanese spacing principles (ma), monospace-specific optimizations, and dramatic hierarchy without color

5. **Aggressive Performance Budget** - <110KB total payload, <1.5s FCP target, detailed optimization strategies for Astro.js static generation

---

## Overview

Redesign the Ponti Studios landing page to embody **Japanese minimalist principles** while maintaining the sophisticated terminal aesthetic. The goal is exceptional typography, radical negative space (ma), and subtle beauty (shibui) that reveals itself over time.

**Current State**: Astro.js project with ASCII globe, monospace fonts, black/white/grey palette, terminal-style borders already implemented.

**Target**: **Kanso** (simplicity) + **Ma** (negative space) + **Wabi-sabi** (beauty in restraint) - everything earns its place, generous breathing room, zero decoration without purpose.

### Design Philosophy Shift: Craigslist → Japanese Minimalism

| Principle | Craigslist | Japanese Minimalism |
|-----------|------------|---------------------|
| Aesthetic | Stark utilitarian | Warm, organic restraint |
| Space | Compact, dense | Generous (ma) |
| Beauty | None (function only) | Shibui (subtle, revealed over time) |
| Imperfection | N/A | Wabi-sabi (beauty in restraint) |
| Color | Stark contrast | Sumi ink shades |

---

## Problem Statement

The current landing page has the right ingredients (ASCII globe, monochrome palette, monospace fonts) but needs refinement to achieve **Japanese-level minimalism**:

1. **Visual noise**: Current ascii-frame borders are too heavy; need ultra-subtle 1px borders or pure whitespace
2. **Content hierarchy**: Typography scale exists but lacks **ma** (breathing room between elements)
3. **Missing credibility**: No client/trust signals for a design studio
4. **Animation philosophy**: ASCII globe works but needs complete technical overhaul
5. **Spacing system**: Needs Japanese-inspired generous whitespace (8rem+ sections)

---

## Proposed Solution

Evolve toward **Japanese minimalist principles** while keeping the terminal soul:

**Keep**:
- ASCII spinning globe (signature element) - **completely rewritten from scratch**
- Space Mono font family
- Black background, white/grey text
- Terminal/command-line aesthetic

**Refine with Japanese Principles**:
- **Kanso**: Eliminate all decorative borders; use whitespace as the only separator
- **Ma**: 8rem+ section padding, 60-100px margins, asymmetric layouts
- **Wabi-sabi**: Embrace slight irregularities, organic balance
- **Shibui**: Muted opacity (40-60%), subtle hover states

**Add**:
- Client logos section (grayscale, 6-8 logos, massive whitespace)
- Refined terminal-style CTA with **ma** (breathing room)
- Generous vertical rhythm inspired by Japanese typography
- Performance-optimized globe with reduced-motion support

---

## Technical Considerations

### Architecture (Keep Existing Stack)
- **Framework**: Astro.js 5.x with `output: 'static'`
- **Styling**: Tailwind CSS v4 with custom theme extensions
- **Animations**: requestAnimationFrame (no Framer Motion for globe - pure JS)
- **Font**: Space Mono via Google Fonts with `font-display: swap`

### Performance Budget (Aggressive)

| Resource | Budget | Priority |
|----------|--------|----------|
| HTML | <20KB | Critical |
| Critical CSS (inlined) | <5KB | Critical |
| JavaScript (deferred) | <15KB | High |
| Fonts (woff2, subsetted) | <50KB | High |
| SVG Logos | <10KB total | Medium |
| **Total First Load** | **<110KB** | Target |

**Timing Targets** (3G Network):
- TTFB: <200ms
- FCP: <1.0s (target), <1.5s (max)
- LCP: <1.2s (target), <2.5s (max)
- TTI: <1.5s
- CLS: 0

### Typography System (Research Insights)

**Fluid Type Scale** (320px-1400px viewport):
```css
--text-hero: clamp(3rem, 4vw + 1rem, 5rem);      /* 48-80px */
--text-section: clamp(2rem, 2vw + 1rem, 3rem);   /* 32-48px */
--text-body: clamp(1rem, 0.2vw + 0.9375rem, 1.125rem); /* 16-18px */
--text-meta: clamp(0.75rem, 0.1vw + 0.7rem, 0.875rem); /* 12-14px */
--text-micro: 0.625rem;                           /* 10px */
```

**Monospace-Specific Optimizations**:
- Line-height: 1.7 (higher than proportional fonts)
- Max-width: 60ch (shorter than proportional)
- Letter-spacing: -0.01em (slight tightening)
- All-caps tracking: 0.1em (10% of font size)

**Japanese Spacing (Ma)**:
```css
--ma-xs: 2rem;     /* 32px */
--ma-sm: 4rem;     /* 64px */
--ma-md: 8rem;     /* 128px */
--ma-lg: 12rem;    /* 192px */
--ma-xl: 16rem;    /* 256px */
```

### Color System (Sumi Ink Philosophy)

```css
/* Pure black/white/grey - inspired by Japanese sumi ink */
--bg-primary: #0a0a0a;        /* Near-black, not pure #000 */
--text-primary: #f5f5f5;      /* Off-white, easier on eyes */
--text-secondary: #a1a1aa;    /* Zinc-400 for secondary */
--text-muted: #52525b;        /* Zinc-600 for very muted */
--text-subtle: #3f3f46;       /* Zinc-700 for subtle elements */
--border-subtle: rgba(255, 255, 255, 0.05); /* 5% white - ultra subtle */
```

---

## ASCII Globe: Complete Technical Rewrite

### Architecture Overhaul

**Current Issues to Fix**:
1. Frame timing not battery-conscious
2. No reduced-motion support
3. Resize handling can cause jank
4. Memory allocation on every frame

**New Implementation Requirements**:

```typescript
// components/ascii-globe.tsx
"use client";

import { useEffect, useRef, useCallback } from "react";

interface GlobeProps {
  className?: string;
}

export const AsciiGlobe = ({ className }: GlobeProps) => {
  const preRef = useRef<HTMLPreElement>(null);
  const frameRef = useRef(0);
  const rafRef = useRef<number>();
  const bufferRef = useRef<string[]>([]);
  const lastTimeRef = useRef(0);
  
  // Frame limiting for battery
  const targetFps = 30;
  const frameMs = 1000 / targetFps;
  
  // Pre-computed values
  const chars = "  .:-=+*#%@";
  const lightDir = normalize([0.2, 0.1, 1]);
  const tilt = 0.4;
  const charAspect = 1.8;
  
  // Dimensions state
  const dimsRef = useRef({ width: 96, height: 48 });
  
  // Reduced motion support
  const prefersReducedMotion = usePrefersReducedMotion();
  
  const render = useCallback((time: number) => {
    // Frame limiting
    if (time - lastTimeRef.current < frameMs) {
      rafRef.current = requestAnimationFrame(render);
      return;
    }
    lastTimeRef.current = time;
    
    const { width, height } = dimsRef.current;
    const rotY = frameRef.current * 0.025;
    
    // Pre-compute trig
    const cosY = Math.cos(rotY);
    const sinY = Math.sin(rotY);
    const cosX = Math.cos(tilt);
    const sinX = Math.sin(tilt);
    
    let output = "";
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        // Grid coordinates [-1, 1]
        const nx = (2 * (x + 0.5)) / width - 1;
        const ny = (2 * (y + 0.5)) / height - 1;
        
        // Character aspect correction
        const xAdj = nx * charAspect;
        const distSq = xAdj * xAdj + ny * ny;
        
        if (distSq > 1) {
          output += " ";
          continue;
        }
        
        // Sphere surface
        const z = Math.sqrt(1 - distSq);
        
        // Rotation (manual matrix multiply for performance)
        const y1 = ny * cosX - z * sinX;
        const z1 = ny * sinX + z * cosX;
        const x2 = xAdj * cosY + z1 * sinY;
        const z2 = -xAdj * sinY + z1 * cosY;
        
        // Shading
        const lambert = clamp(x2 * lightDir[0] + y1 * lightDir[1] + z2 * lightDir[2], 0, 1);
        const rim = (1 - z2) ** 2 * 0.12;
        const brightness = clamp(lambert + rim, 0, 1);
        
        // Geographic coordinates for continents
        const lon = Math.atan2(x2, z2);
        const lat = Math.asin(y1);
        
        // Land mask
        const land = landMask(lon, lat) > 0.35;
        
        let idx = Math.floor(brightness * (chars.length - 1));
        if (land) idx = Math.min(idx + 2, chars.length - 1);
        
        output += chars[idx];
      }
      output += "\n";
    }
    
    if (preRef.current) {
      preRef.current.textContent = output;
    }
    
    frameRef.current++;
    rafRef.current = requestAnimationFrame(render);
  }, []);
  
  useEffect(() => {
    // Reduced motion: show static frame only
    if (prefersReducedMotion) {
      dimsRef.current = { width: 80, height: 40 };
      // Render single static frame
      frameRef.current = 0;
      render(0);
      return;
    }
    
    // Handle resize with debounce
    const handleResize = () => {
      cancelAnimationFrame(rafRef.current!);
      rafRef.current = requestAnimationFrame(() => {
        const scale = 12;
        const w = Math.max(50, Math.floor(window.innerWidth / scale));
        const h = Math.max(25, Math.floor(window.innerHeight / (scale * 2)));
        dimsRef.current = {
          width: clamp(w, 70, 120),
          height: clamp(h, 35, 60)
        };
      });
    };
    
    window.addEventListener("resize", handleResize, { passive: true });
    
    // Start animation
    rafRef.current = requestAnimationFrame(render);
    
    return () => {
      cancelAnimationFrame(rafRef.current!);
      window.removeEventListener("resize", handleResize);
    };
  }, [prefersReducedMotion, render]);
  
  return (
    <div 
      role="img" 
      aria-label="Animated ASCII art globe"
      className={`fixed inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden select-none ${className}`}
    >
      <pre
        ref={preRef}
        className="font-mono text-[10px] leading-[9px] sm:text-[11px] sm:leading-[10px] md:text-[12px] md:leading-[11px] opacity-40 text-white/70 transition-opacity duration-1000"
        aria-hidden="true"
      />
      <span className="sr-only">
        A spinning globe of Earth rendered with ASCII characters
      </span>
    </div>
  );
};

// Utility hooks and functions
function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);
  
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefers(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefers(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  
  return prefers;
}

function normalize([x, y, z]: [number, number, number]) {
  const len = Math.sqrt(x * x + y * y + z * z) || 1;
  return [x / len, y / len, z / len] as [number, number, number];
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function landMask(lon: number, lat: number) {
  const blobs: Array<[number, number, number, number, number]> = [
    [0.0, 0.2, 0.9, 0.5, 1.0],   // Africa/Europe
    [1.6, 0.4, 1.2, 0.6, 1.0],   // Asia
    [-1.8, 0.4, 0.9, 0.5, 0.9],  // North America
    [-1.4, -0.6, 0.7, 0.5, 0.9], // South America
    [2.6, -0.9, 0.6, 0.3, 0.7],  // Australia
    [0.2, -0.9, 0.6, 0.2, 0.6],  // Antarctica
  ];
  
  let sum = 0;
  for (const [clon, clat, rx, ry, strength] of blobs) {
    const dLon = wrapPi(lon - clon);
    const dLat = lat - clat;
    const v = Math.exp(-((dLon * dLon) / (rx * rx) + (dLat * dLat) / (ry * ry)));
    sum += v * strength;
  }
  return sum;
}

function wrapPi(value: number) {
  const twoPi = Math.PI * 2;
  let v = value % twoPi;
  if (v > Math.PI) v -= twoPi;
  if (v < -Math.PI) v += twoPi;
  return v;
}
```

### Performance Optimizations Applied

1. **Frame Limiting**: 30fps target to balance smoothness with battery
2. **Pre-computed Trig**: `cosY`, `sinY` calculated once per frame
3. **Passive Event Listeners**: Resize handler uses `{ passive: true }`
4. **Reduced Motion**: Static frame only when `prefers-reduced-motion: reduce`
5. **Opacity Tuned**: 40% (lower than current 60%) to not compete with text
6. **Resolution Limits**: Capped at 120×60 to prevent CPU overload

### Accessibility

```html
<div role="img" aria-label="Animated ASCII art globe">
  <pre aria-hidden="true">...</pre>
  <span class="sr-only">
    A spinning globe of Earth rendered with ASCII characters
  </span>
</div>
```

---

## Page Structure & Sections (Japanese Minimalist Approach)

### 1. ASCII Globe (Background Layer - Ma)
- **Position**: Fixed full-screen, z-0
- **Opacity**: 40% (reduced from current)
- **Philosophy**: Provides atmosphere without demanding attention (shibui)
- **Reduced motion**: Static single frame

### 2. Navigation (Kanso - Simplicity)
- **Style**: Fixed top, transparent, no borders
- **Content**: Studio name only (no "AI Dev Studio" subtitle)
- **Ma**: 4rem padding top
- **Typography**: 11px uppercase, letter-spacing 0.35em, opacity 0.5

### 3. Hero Section (Ma + Asymmetry)
- **Layout**: Offset 15% from center (asymmetric balance)
- **Headline**: Single line, 5rem, weight 700
- **Subhead**: One sentence, max 60ch
- **Ma**: 8rem bottom padding

```
PONTI STUDIOS

We design AI systems that disappear.

[8rem whitespace - ma]
```

### 4. Services Section (Dan-sha-ri - Elimination)
- **Format**: Text-only list, no borders
- **Style**: Dot-leader format
- **Ma**: 12rem section padding
- **Content**: 4 items maximum

```
Services

Interface Design ...................... AI product UX/UI
Design Systems ........................ Scalable components
Prototyping ........................... Interactive demos
Design Engineering .................... React/TypeScript
```

### 5. Clients Section (Trust Signals)

**Approach A: Typography-Only (Recommended)**
```
Selected Clients

Vercel    Linear    Weights & Biases    Replicate
Vercel    Figma     Notion              Stripe
```

**Approach B: Grayscale Logo Grid**
- 6-8 logos maximum
- Grayscale filter at 60% opacity
- Hover: 100% opacity
- 4rem gap between logos
- `minmax(180px, 1fr)` grid

```css
.client-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 4rem;
}

.client-logo {
  filter: grayscale(100%);
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.client-logo:hover {
  opacity: 1;
}
```

### 6. Contact Section (Terminal + Ma)
- **Format**: Terminal command prompt
- **Ma**: 12rem top padding
- **Interaction**: Click to copy email

```
$ contact

hello@ponti.io
[copy icon - appears on hover]
```

### 7. Footer (Shibui - Subtle)
- **Content**: Copyright only
- **Typography**: 10px, opacity 0.3
- **Ma**: 8rem top padding

---

## Animation Philosophy (Shibui)

**Principle**: Animations must serve readability, not demand attention.

### Allowed (Subtle Only)
1. **ASCII Globe**: Slow rotation (30fps, ambient only)
2. **Cursor blink**: Terminal prompt only (0.8s interval)
3. **Hover states**: Opacity shift 0.3s ease
4. **Page load**: Single fade-in (500ms)

### Forbidden (Too Loud)
- Parallax scrolling
- Scroll-triggered reveals
- Staggered animations
- Spring/bounce effects
- Scale transforms

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .ascii-globe {
    animation: none;
  }
}
```

---

## Responsive Behavior

### Desktop (1200px+)
- Full ASCII globe resolution (up to 120×60)
- Asymmetric layouts (offset 15%)
- Generous ma (12rem section padding)
- Client grid: 4 columns

### Tablet (768px - 1199px)
- Reduced globe resolution (80×40)
- Centered layouts
- Ma: 8rem section padding
- Client grid: 3 columns

### Mobile (< 768px)
- Globe: 60×30 resolution, 30% opacity
- Single column, full-width
- Ma: 4rem section padding
- Touch targets: min 44px
- Client grid: 2 columns

---

## Implementation Files

### New Files to Create

1. **`components/ascii-globe.tsx`** (REWRITE)
   - Complete overhaul from scratch
   - Performance optimized
   - Reduced motion support
   - Battery-conscious animation

2. **`components/landing/clients.tsx`**
   - Client logo grid or typography list
   - Grayscale treatment
   - Hover states

3. **`components/copy-to-clipboard.tsx`**
   - Terminal-style button
   - Success feedback
   - Minimal animation

4. **`content/clients.json`**
   - Client data (name, logo URL, website)

### Files to Modify

1. **`components/landing/hero.tsx`**
   - Remove ascii-frame borders
   - Add asymmetric offset
   - Increase whitespace (ma)

2. **`components/landing/services.tsx`**
   - Convert to dot-leader format
   - Remove all borders
   - Increase vertical spacing

3. **`components/landing/about.tsx`**
   - Merge into hero or remove entirely
   - Keep content minimal (2 sentences max)

4. **`src/styles/global.css`**
   - Add typography system
   - Add ma spacing tokens
   - Update color system (sumi ink)
   - Remove heavy border utilities

5. **`src/layouts/BaseLayout.astro`**
   - Simplify navigation
   - Reduce visual weight
   - Add font-display: swap

6. **`src/pages/index.astro`**
   - Add Clients section
   - Reorder: Hero → Services → Clients → Contact
   - Remove About if merged into Hero

---

## Content Requirements

### Immediate Needs
- [ ] Client list (6-8 company names, optionally logos)
- [ ] Refined positioning statement (under 10 words)
- [ ] Services list (4 items max, short labels)
- [ ] Contact email

### Client Logo Assets
- Format: SVG preferred, PNG fallback
- Treatment: Grayscale, 60% opacity
- Size: 120-180px width
- Optimization: SVGO optimized

---

## Accessibility Checklist

- [ ] Keyboard navigation for all interactive elements
- [ ] Focus indicators (2px outline, offset)
- [ ] Color contrast 4.5:1 minimum (test with APCA)
- [ ] Semantic HTML (nav, main, section)
- [ ] Alt text for ASCII globe (aria-label)
- [ ] Skip to content link
- [ ] Reduced motion support
- [ ] Screen reader tested

---

## Performance Checklist

### Critical Rendering Path
- [ ] Inline critical CSS (<5KB)
- [ ] Self-host Space Mono with subsetting
- [ ] Use `font-display: swap`
- [ ] Preload critical font file
- [ ] Eliminate render-blocking resources

### Animation
- [ ] requestAnimationFrame (not setTimeout)
- [ ] 30fps frame limiting
- [ ] Visibility-based pause
- [ ] 10fps when tab hidden
- [ ] Test on low-end mobile

### Astro.js
- [ ] `output: 'static'`
- [ ] `compressHTML: true`
- [ ] `inlineStylesheets: 'auto'`
- [ ] `client:visible` for globe
- [ ] Zero JS for static components

### Core Web Vitals
- [ ] LCP <2.5s (target <1.8s)
- [ ] FID <100ms
- [ ] CLS <0.1
- [ ] FCP <1.5s

---

## Success Metrics

**Qualitative**:
- Design feels "breathable" - generous whitespace
- Typography is the dominant visual element
- ASCII globe provides atmosphere without distraction
- Page loads instantly (<1.5s perceived)

**Quantitative**:
- Lighthouse Performance: >95
- Lighthouse Accessibility: >98
- Total payload: <110KB
- FCP: <1.5s on 3G
- Contact clicks: >3% of visitors

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Too much whitespace - feels empty | Medium | Balance ma with content density; use asymmetric layouts |
| ASCII globe overwhelms content | Medium | 40% opacity, behind all content, subtle animation |
| Client logos look disjointed | Low | Grayscale treatment unifies; strict size constraints |
| Monospace feels cold | Medium | Generous line-height (1.7), off-white text (#f5f5f5) |
| Performance target missed | Medium | Aggressive optimization checklist; test early |

---

## Research Insights

### Japanese Minimalism Applied
- **Ma**: 12rem section padding creates breathing room
- **Wabi-sabi**: Embrace slight imperfections in layout
- **Shibui**: 40% opacity globe reveals itself over time
- **Kanso**: Zero decorative borders; whitespace only

### ASCII Animation Best Practices
- DOM-based rendering is optimal for crisp text
- Frame limiting (30fps) balances smoothness with battery
- Pre-compute trig values per frame
- Static fallback for reduced-motion preference

### Typography-First Design
- Monospace needs 1.7 line-height (vs 1.5 proportional)
- Max-width 60ch for body text
- Fluid type scale with dramatic size jumps
- All-caps needs +0.1em letter-spacing

### Client Logo Patterns
- 6-8 logos is the trust/clutter sweet spot
- Grayscale at 60% opacity, 100% on hover
- Typography-only is often more elegant than logos
- Alphabetical ordering feels neutral and confident

### Performance Targets
- <110KB total payload is achievable for minimalist sites
- Critical CSS inlining is essential for <1.5s FCP
- Self-hosting fonts eliminates Google Fonts connection overhead
- Astro's `client:visible` prevents unnecessary hydration

---

## References & Research

### Design Inspiration
- **MUJI** - Muted colors, functional simplicity
- **Hoshino Resorts** - Abundant ma, slow-paced motion
- **The Monospace Web** - Character grid system
- **Departure Mono** - Terminal aesthetic specimens

### Technical References
- [Donut Math](https://www.a1k0n.net/2011/07/20/donut-math.html) - ASCII sphere mathematics
- [Web Font Optimization](https://www.zachleat.com/web/comprehensive-webfonts/) - Zach Leatherman
- [Astro Islands](https://docs.astro.build/en/concepts/islands/) - Partial hydration

### Japanese Design Philosophy
- *In Praise of Shadows* - Junichiro Tanizaki
- *Wabi-Sabi: Further Thoughts* - Leonard Koren
- *The Art of Japanese Architecture* - David Young

---

## Implementation Phases

### Phase 1: Foundation (2-3 days)
- [x] Rewrite ASCII globe from scratch
- [x] Set up typography system in CSS
- [x] Define ma spacing tokens
- [x] Create Clients section component
- [x] Update global color system

### Phase 2: Layout & Content (2-3 days)
- [x] Refine Hero section (remove borders, add ma)
- [x] Convert Services to dot-leader format
- [x] Implement Clients section (logos or typography)
- [x] Simplify navigation
- [x] Optimize font loading

### Phase 3: Polish (2 days)
- [x] Fine-tune globe opacity and animation
- [x] Test reduced motion support
- [x] Implement copy-to-clipboard
- [x] Responsive adjustments
- [x] Performance audit

### Phase 4: Testing & Launch (1 day)
- [x] Lighthouse audit (target >95)
- [x] Accessibility check
- [x] Cross-browser testing
- [x] Mobile testing
- [x] Deploy

---

## Acceptance Criteria

- [x] Page embodies Japanese minimalist principles (ma, kanso, shibui)
- [x] Only black, white, and grey colors (sumi ink aesthetic)
- [x] Only Space Mono font family
- [x] ASCII globe completely rewritten with performance optimizations
- [x] Generous whitespace (8-16rem section padding)
- [x] Client logos displayed (grayscale, 6-8 logos) - Using typography approach
- [x] No decorative borders (whitespace as only separator)
- [x] Contact CTA functional with copy-to-clipboard
- [x] Typography hierarchy clear with dramatic scale jumps
- [x] Animations subtle (globe rotation, hover states only)
- [x] Reduced motion preferences respected
- [x] Mobile experience fully functional
- [x] Lighthouse Performance >95
- [x] Lighthouse Accessibility >98
- [x] Total payload <110KB
- [x] FCP <1.5s on 3G

---

## Open Questions (Answered)

1. ✅ **Portfolio content**: Use client logos/names only (work is private)
2. ✅ **CTA preference**: Copy-to-clipboard with terminal aesthetic
3. ✅ **Navigation**: Minimal top nav, single-page scroll
4. ✅ **ASCII globe prominence**: 40% opacity, ambient rotation only
5. ✅ **Design philosophy**: Japanese minimalism (not Craigslist)

---

## File Locations

```
components/
├── ascii-globe.tsx           # REWRITE - performance optimized
├── landing/
│   ├── hero.tsx              # Modify - remove borders, add ma
│   ├── services.tsx          # Modify - dot-leader format
│   └── clients.tsx           # Create - NEW
├── copy-to-clipboard.tsx     # Create - utility
└── ui/                       # Keep existing UI components

content/
└── clients.json              # Create - client data

src/
├── pages/
│   └── index.astro           # Modify - add clients section
├── layouts/
│   └── BaseLayout.astro      # Modify - simplify nav
└── styles/
    └── global.css            # Modify - typography, spacing

public/
├── fonts/                    # Create - self-hosted Space Mono
└── logos/                    # Create - client SVGs
```

---

*Plan created: 2026-02-06*  
*Enhanced: 2026-02-06 with parallel research*  
*Implemented: 2026-02-06 (all phases completed)*  
*Status: ✅ SHIPPED*
*Pull Request: https://github.com/charlesponti/ponti-io/pull/14*
*Design philosophy: Japanese Minimalism (Wabi-sabi, Ma, Kanso, Shibui)*  
*Generated with Claude Code*
