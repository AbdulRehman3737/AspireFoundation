# Hope Foundation Website Specification

## Concept & Vision

A warm, inviting foundation website that radiates hope and compassion. The design balances professionalism with approachability, using a deep, rich color palette that conveys trust and dedication while warm accent colors create an emotional connection with visitors. The site should feel like an invitation to be part of something meaningful.

## Design Language

### Aesthetic Direction
Modern non-profit aesthetic with bold typography, generous whitespace, and warm imagery. Think: established charitable organization with a human touch — dignified but not cold, professional but deeply personal.

### Color Palette
- **Primary Dark**: `#130B40` — Deep royal purple, used for backgrounds and primary text
- **Secondary**: `#246B73` — Rich teal, for accents and interactive elements
- **Accent Light**: `#F2D7B6` — Warm cream, for highlights and light sections
- **Accent Warm**: `#F2C4B3` — Soft peach, for secondary highlights
- **Accent Coral**: `#F2856D` — Coral, for CTAs and emphasis
- **Background Dark**: `#0D0829` — Near-black purple, for deep backgrounds
- **Text Light**: `#FAF7F2` — Off-white, for text on dark backgrounds

### Typography
- **Headings**: DM Serif Display — Elegant, trustworthy serif
- **Body**: Inter — Clean, readable sans-serif
- **Accent**: Playfair Display — For special callouts and quotes

### Spatial System
- Base unit: 8px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Container max-width: 1200px
- Card border-radius: 16px
- Button border-radius: 8px

### Motion Philosophy
- Subtle fade-up animations on scroll (opacity 0→1, translateY 20px→0, 600ms ease-out)
- Hover states with gentle scale (1→1.02) and shadow elevation
- Staggered reveals for card grids (100ms delay between items)
- Smooth page transitions

### Visual Assets
- Icons: Lucide React — consistent stroke weight
- Images: Placeholder images using gradient backgrounds with relevant iconography
- Decorative: Subtle gradient overlays, geometric accent shapes

## Layout & Structure

### Global Layout
- **Header**: Fixed, transparent on hero, solid on scroll. Logo left, nav center, CTA button right.
- **Footer**: Dark background with logo, quick links, social icons, contact info

### Page Structure

#### Home Page
1. **Hero Section** — Full viewport height, gradient background with floating decorative shapes, headline + subtext + dual CTAs
2. **Introduction** — Two-column layout (text + image placeholder), warm cream background
3. **Vision Statement** — Centered, large serif quote styling
4. **Mission Statement** — Card-based layout with icons
5. **Our Projects** — 6-card grid showcasing initiatives
6. **Accomplishments** — Statistics section with animated counters, dark background
7. **Gallery/Impact** — Image grid showing activities
8. **Footer CTA** — Final donation call-to-action

#### About Page
- Hero with page title
- Our Story section
- Our Values section (3-4 value cards)
- Team/Leadership section (placeholder)
- Partners/Supporters section

#### What We Do Page
- Hero with page title
- Detailed description of each program
- Impact statistics
- Call-to-action

#### Contact Page
- Hero with page title
- Contact form
- Contact information (address, phone, email)
- Map placeholder

#### Donate Page
- Hero with emotional appeal
- Donation form/amount selector
- Payment methods (visual placeholders)
- Trust indicators (501c3 badge, security info)

## Features & Interactions

### Navigation
- Sticky header that changes background on scroll (transparent → solid)
- Mobile hamburger menu with slide-out drawer
- Active page indicator
- Smooth scroll to sections on home page

### Buttons
- Primary: Coral background (#F2856D), white text, hover darkens
- Secondary: Teal background (#246B73), white text
- Outline: Transparent with border, fills on hover

### Cards
- Subtle shadow on rest, elevated shadow + slight scale on hover
- Smooth border-radius
- Image + title + description + optional CTA

### Forms (Contact/Donate)
- Floating labels
- Focus states with teal ring
- Validation feedback
- Success/error states

### Statistics Counter
- Numbers animate from 0 to target on scroll into view
- Suffix support (K+, M+, +)

## Component Inventory

### Header
- States: transparent (hero), solid (scrolled), mobile-menu-open
- Logo, nav links, donate button
- Mobile: hamburger icon, slide-out menu

### Footer
- 4-column layout: Logo/description, Quick Links, Programs, Contact
- Social icons row
- Copyright

### Hero Section
- Full viewport with gradient background
- Decorative floating shapes
- H1, subtext, dual buttons

### Section Title
- Eyebrow text (uppercase, small, teal)
- Main heading (DM Serif Display)
- Optional description

### Project Card
- Image placeholder (gradient)
- Category badge
- Title, description, "Learn More" link
- Hover: scale, shadow

### Stat Card
- Large number (animated)
- Label text
- Icon

### Button
- Variants: primary, secondary, outline, ghost
- States: default, hover, active, disabled
- Sizes: sm, md, lg

### Contact Form
- Name, email, subject, message fields
- Submit button
- Validation states

### Donation Form
- Preset amounts ($25, $50, $100, $250, custom)
- Selected state highlight
- Recurring option toggle
- Submit button

## Technical Approach

### Framework
- Next.js 16 with App Router
- Static site generation (export: "standalone" or static)
- TypeScript
- Tailwind CSS v4

### Architecture
```
app/
├── layout.tsx          # Root layout with header/footer
├── page.tsx           # Home page
├── about/page.tsx     # About page
├── what-we-do/page.tsx
├── contact/page.tsx
├── donate/page.tsx
├── globals.css        # Global styles + Tailwind
components/
├── layout/
│   ├── Header.tsx
│   └── Footer.tsx
├── sections/
│   ├── Hero.tsx
│   ├── Introduction.tsx
│   ├── Vision.tsx
│   ├── Mission.tsx
│   ├── Projects.tsx
│   ├── Stats.tsx
│   └── ...
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── SectionTitle.tsx
│   └── ...
```

### Key Implementation Details
- CSS custom properties for theme colors
- Intersection Observer for scroll animations
- useState for mobile menu, scroll detection
- Form handling with useState
