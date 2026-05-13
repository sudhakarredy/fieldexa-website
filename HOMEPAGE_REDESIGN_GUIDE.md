# FIELDexa Koru Homepage Redesign
## From Feature-Centric to Problem-Solution-Outcome Narrative

**Date:** May 13, 2026  
**Goal:** Transform homepage to highlight real farmer and export house challenges, demonstrate Koru's bridge solution, and showcase revenue/sustainability outcomes

---

## Overview of Changes

The new homepage moves from a generic "enterprise platform" positioning to a **specific, empathetic problem-solution narrative** that resonates with both farmers and export houses. It tells the story of moving "From Unpredictability to Prosperity."

---

## Updated Files

### 1. **`src/content.ts`** - New Content Structure

**Added:**
- `businessProblems[]` - 6 real problems with icons, solutions, and impact metrics
- `outcomesAndImpact[]` - 4 outcome stories across revenue, farmer empowerment, sustainability, growth

**Example Problem Card:**
```javascript
{
  title: 'Yield Unpredictability',
  problem: 'Export houses and farmers lack visibility into expected harvests...',
  solution: 'AI-powered harvest forecasting predicts yield 7-14 days in advance...',
  impact: '+40% supply chain efficiency',
  icon: '📊'
}
```

**Example Outcome Card:**
```javascript
{
  title: 'Higher Revenue for Export Houses',
  description: 'Predictive planning, grade-mix forecasting, and buyer alignment unlock 15-25% revenue uplift...',
  metric: '+15-25% Revenue',
  focus: 'Export Houses'
}
```

---

### 2. **`src/pages/HomePage.tsx`** - Complete Redesign

**Old Structure:**
```
Hero
├─ Core Pillars (generic features)
├─ Solution Tracks
└─ In Rollout Features (future stuff)
```

**New Structure (Problem-Solution-Outcome):**
```
1. Hero Section
   └─ "From Unpredictability to Prosperity"
   
2. The Challenge Section (PROBLEM FOCUS)
   └─ 6 Problem Cards:
      - Each with icon, problem statement, solution, impact metric
      - Visual, empathetic framing
      - Shows understanding of real pain points

3. How Koru Works (SOLUTION OVERVIEW)
   └─ Three Core Pillars:
      - Predictive Operations Intelligence
      - Traceability & Compliance Ready
      - Distributed Team Coordination

4. Solution Tracks (USE CASES)
   └─ 3 Operating Models:
      - Contract Farming Operations
      - Traceability Programs
      - Field Team Execution

5. The Results (OUTCOMES & IMPACT)
   └─ 4 Outcome Cards:
      - Higher Revenue (Export Houses)
      - Farmer Empowerment & Fair Outcomes (Farmers)
      - Sustainability & Compliance (Planet)
      - Scalable Growth (Growth)

6. Why Koru (DIFFERENTIATORS)
   └─ 6 Why Cards:
      - Offline-First Mobile
      - Multi-Tenant Enterprise Grade
      - EUDR & Sustainability Ready
      - Real-Time Alerts
      - Predictive Intelligence
      - Farmer-Centric Design

7. CTA Section
   └─ Final call to action with dual CTAs
```

**Key Messaging Changes:**
- **Old:** "Modern Agriculture Intelligence for Sustainable and Traceable Operations"
- **New:** "Help farmers thrive and export houses scale. Connect field operations, predict harvests, and unlock revenue—all in one platform."

---

### 3. **`src/pages/ProductCapabilitiesPage.tsx`** - Screenshot Integration

**Major Enhancement:** Proper screenshot mapping using actual image paths

**Screenshot Structure:**
- **Web App Screenshots** (13 total)
  - Home Dashboard
  - Hola AI Copilot
  - Harvest & Grade-Mix Predictions
  - Weekly Harvest Forecast
  - Transport Planning
  - Geo-Scoped Analytics
  - Grade Management
  - AI Alert Management
  - Traceability Reports
  - Action Board
  - Excel Exports
  - SMS & Messaging
  - AI Agents

- **Mobile Screenshots** (9 total)
  - Mobile Dashboard
  - Farmer Management
  - Farm Records
  - Agreements
  - Harvest Tracking
  - Alert Response
  - Field Visits
  - Input Distribution
  - Reports & Analytics

**Capability-to-Screenshot Mapping:**
Each of the 15 capabilities is mapped to 1-3 relevant screenshots (both web and mobile where applicable).

Example:
```javascript
'Predictive Harvest Intelligence' → ['Harvest Prediction', 'Mobile Harvest']
'Weekly Harvest Prediction for Transport' → ['Weekly Harvest', 'Transport Planning', 'Mobile Harvest']
```

---

### 4. **`src/index.css`** - New Styling

**New CSS Classes:**

**Problem Cards:**
```css
.problems-grid - 3-column responsive grid
.problem-card - White card with hover lift
.problem-icon - Large emoji icons
.problem-content - Structured content grid
.problem-text / .solution-text - Semantic coloring
.impact-metric - Highlighted metric with border-top
```

**Outcome Cards:**
```css
.outcomes-grid - 4-column responsive grid
.outcome-card - Teal-bordered card with gradient background
.outcome-focus - Category badge (Export Houses, Farmers, Planet, Growth)
.outcome-metric - Large metric display
```

**Why Koru Cards:**
```css
.why-koru-grid - 3-column responsive grid
.why-card - Minimal card with left border on hover
.why-card:hover - Teal left border accent
```

**Features:**
- Smooth animations (200-300ms)
- Responsive mobile (single column on < 900px)
- Hover effects for engagement
- Color-coded sections (teal, navy, gradients)
- Smooth slide-down animations for expanded content

---

## Section-by-Section Breakdown

### Hero Section
**Purpose:** Immediate emotional hook and value proposition  
**Copy:** "From Unpredictability to Prosperity"  
**CTA:** Demo + Explore Capabilities  
**Design:** Large typography, centered, with clear value statement

### The Challenge Section
**Purpose:** Demonstrate deep understanding of customer pain  
**Content:**
1. Yield Unpredictability → Supply chain efficiency
2. Fragmented Field Operations → Issue resolution speed
3. Farmer Information Asymmetry → Farmer engagement
4. Compliance & Traceability Burden → Audit prep reduction
5. Unsustainable Scale → Growth potential
6. Revenue Leakage → Revenue uplift

**Design:** 6-card grid, emoji icons, problem → solution → metric flow  
**Engagement:** Problem focus makes visitors immediately recognize their own pain

### How Koru Works
**Purpose:** Brief explanation of core approach  
**Content:** 3 pillars with descriptions  
**Design:** Simple 3-card grid, minimal visual distraction

### Solution Tracks
**Purpose:** Show applicability across use cases  
**Content:** Contract Farming, Traceability, Field Team Execution  
**Design:** 3-card grid with detailed descriptions

### The Results
**Purpose:** Demonstrate measurable outcomes  
**Content:** 4 outcome categories with metrics
- Export Houses: +15-25% Revenue
- Farmers: 3x More Engaged
- Planet: 80% Audit Reduction
- Growth: 5-10x Scale Potential

**Design:** Teal-bordered cards with focus badges  
**Messaging:** Each outcome speaks to different stakeholder

### Why Koru
**Purpose:** Differentiation and proof of technical sophistication  
**Content:** 6 key differentiators with short descriptions  
**Design:** 6-card grid with left-border hover effect  
**Messaging:** Concrete, technical, but accessible

---

## Visual Hierarchy

**Colors Used:**
- **Navy (#0b1f3b):** Headings, strong text
- **Teal (#1fa67a):** CTAs, accents, badges, hover effects
- **Muted gray:** Body text
- **Light gradients:** Section backgrounds
- **White cards:** Content containers

**Typography:**
- Large titles (2-3.2rem) for sections
- Smaller titles (1.2rem) for card headers
- 0.95rem for body text
- 1.15rem for metrics

**Spacing:**
- 2.5rem between major sections
- 1.5rem gap in card grids
- 1rem padding in cards
- Progressive reduction on mobile

---

## Responsive Behavior

**Desktop (> 900px):**
- Problems: 3 columns
- Outcomes: 4 columns  
- Why Koru: 3 columns
- Full typography and spacing

**Tablet (768px - 900px):**
- Most grids: 2 columns
- Maintained spacing and typography

**Mobile (< 768px):**
- All grids: 1 column
- Reduced padding (1rem → 0.8rem)
- Smaller font sizes
- Single-column layout for better legibility

---

## Screenshot Implementation

**Path Structure:**
```
Images&Branding/Koru/
├─ WebApp Screenshots/ (13 PNG files)
│  ├─ Home.png
│  ├─ Hola.png
│  ├─ Harvest & Grade-Mix Predictions.png
│  └─ ... (10 more)
└─ Mobile Screenshots/ (9 JPG files)
   ├─ Home-1.jpg
   ├─ Farmers-1.jpg
   └─ ... (7 more)
```

**Screenshot Lazy Loading:**
- Images use `loading="lazy"` for performance
- Only loaded when capability is expanded
- Reduces initial page weight

**Screenshot Cards:**
- Fixed height (180px for image)
- Auto-fit columns (150px minimum)
- Figcaption with platform badge (💻 Web / 📱 Mobile)
- Hover zoom effect (scale 1.05)

---

## Engagement Metrics to Track

After deployment, monitor:

1. **Scroll Depth**
   - Target: 70%+ of visitors scroll to "Why Koru"
   - Success indicator: Problems section resonates

2. **Problem Card Clicks**
   - Count which problems get most attention
   - Indicates strongest pain points

3. **Capabilities Expansion Rate**
   - Track which capabilities users click to see screenshots
   - Indicates feature interest

4. **CTA Click-Through Rate**
   - Track demo booking from new CTAs
   - Compare old vs new homepage

5. **Time on Page**
   - Target: 2-3 minutes average
   - Success indicator: Engagement improved

6. **Mobile Performance**
   - Track page load time (target < 3s)
   - Monitor screenshot lazy loading

---

## Key Differentiators in New Design

| Aspect | Old | New |
|--------|-----|-----|
| **Focus** | Features | Problems → Solutions → Outcomes |
| **Tone** | Corporate | Empathetic & Practical |
| **Hero Message** | Generic | Specific (Prosperity narrative) |
| **Problem Validation** | Implicit | Explicit (6 problems) |
| **Outcomes** | Vague pillars | Quantified metrics |
| **Differentiation** | "Core Pillars" | "Why Koru" with concrete reasons |
| **Screenshots** | None on homepage | Interactive, capability-linked |
| **Mobile UX** | Responsive | Single-column, optimized |
| **CTAs** | 1 hero CTA | Multiple CTAs throughout |

---

## Content Customization Guide

**To update problems:**
Edit `src/content.ts` → `businessProblems` array
- Change `title`, `problem`, `solution`, `impact`, `icon`

**To update outcomes:**
Edit `src/content.ts` → `outcomesAndImpact` array
- Change `title`, `description`, `metric`, `focus`

**To update screenshots:**
Edit `src/pages/ProductCapabilitiesPage.tsx`
- Update `screenshotMap` with new paths
- Update `capabilityScreenshots` mapping

**To change colors:**
Edit `src/index.css`
- Change `--brand-teal` (#1fa67a)
- Change `--brand-navy` (#0b1f3b)
- Change `--text-muted` (#44566f)

---

## Deployment Checklist

- [ ] Review new problem statements for accuracy
- [ ] Verify all metrics are backed by data
- [ ] Test problem card layout on mobile
- [ ] Verify screenshot paths are correct
- [ ] Test screenshot expansion/collapse
- [ ] Check responsive layout at all breakpoints
- [ ] Verify all CTAs link to correct pages
- [ ] Test color contrast for accessibility (WCAG AA)
- [ ] Check load time with DevTools (target < 3s)
- [ ] A/B test problem message variations
- [ ] Monitor analytics after launch
- [ ] Brief sales/marketing on new narrative

---

## Why This Works

1. **Empathy First:** Visitors immediately see their own problems
2. **Bridge Story:** Clear path from problem → Koru's solution
3. **Quantified Outcomes:** Metrics make ROI tangible
4. **Multi-Stakeholder:** Addresses farmers, export houses, and sustainability
5. **Technical Proof:** "Why Koru" validates sophistication
6. **Visual Integration:** Screenshots make it real
7. **Multiple CTAs:** Different pathways to engagement
8. **Mobile-First:** Works great on phones (where farmers access)

---

## Next Steps

1. **Test Locally**
   ```bash
   cd website
   npm install
   npm run dev
   # Navigate to http://localhost:5173
   ```

2. **Review Content**
   - Verify problem statements match your customer interviews
   - Ensure metrics are conservative/achievable
   - Check problem statements with early users

3. **Deploy to Staging**
   - Test on staging environment
   - Share with sales team for feedback
   - Make any necessary copy adjustments

4. **Deploy to Production**
   - Roll out to live site
   - Set up analytics tracking
   - Monitor initial engagement

5. **Iterate**
   - Analyze scroll depth and CTA clicks
   - A/B test headline variations
   - Refine problem statements based on user feedback

---

## Questions?

This redesign shifts Koru from "What we built" to "Why it matters" positioning. The problem-solution-outcome narrative resonates far better than feature lists, especially for a product that bridges gaps between smallholder farmers and export organizations.
