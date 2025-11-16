# Design Guidelines for Hadron Electronics Website

## Design Philosophy
**Inspiration:** Exicom.com - minimalist, confident, professional
**Tone:** Well-engineered, precise, technical credibility for B2B/engineer audience
**Not:** Generic template, consumer-facing, playful, or colorful

## Visual Identity

### Typography
- **Headings (H1-H6):** Poppins or Manrope (geometric sans-serif) - import from Google Fonts
- **Body Text:** Inter (highly readable sans-serif)
- **Hierarchy:** Clear distinction between heading levels, maintain technical precision in typography

### Color Palette
- **Background:** Pure white
- **Text:** Near-black (slate-900 or gray-900)
- **Primary/Accent:** Single "Tech Blue" (blue-600) - used exclusively for buttons, links, and CTAs
- **Principle:** Minimal color usage reinforces professional, technical aesthetic

### Background Treatment
- **Electronics Touch:** Subtle, low-opacity background patterns (dot grid or light schematic lines)
- **Application:** Primarily in hero section, very subtle throughout
- **Purpose:** Conveys "electronics manufacturer" identity without overwhelming content

## Layout System

### Spacing & Containers
- **Max Width:** max-w-7xl for all page content, centered (mx-auto)
- **Padding:** Responsive - px-4 sm:px-6 lg:px-8
- **Grids:** Responsive CSS Grid - grid-cols-1 md:grid-cols-2 lg:grid-cols-3

### Component Specifications

**Hero Banner (Homepage):**
- Full-width section, centered text alignment
- Subtle electronics-themed background pattern (low opacity)
- Vertical stack: H1 headline → subtitle paragraph → CTA button
- Animations: Sequential fade-in with slide-up (stagger delays: 0.1s, 0.3s, 0.5s)

**Navigation (Desktop):**
- Three-section layout: Logo (left) | Links centered (Home, About, Products, Contact) | "Get in Touch" button (right)
- Subtle bottom border or shadow for separation
- Clean, minimal spacing

**Navigation (Mobile):**
- Logo left, Hamburger icon right
- Slide-out drawer menu (shadcn/ui Sheet component)

**Product Cards:**
- shadcn/ui Card structure
- Image at top (use Next.js Image component)
- Title (H3) + short description in card body
- "View Details" button in footer
- Hover animation: Subtle lift (scale: 1.03 or y: -5)

**Product Grid:**
- Responsive grid layout (1 col mobile → 2 tablet → 3 desktop)
- Staggered fade-in animations for cards on page load
- Consistent spacing between cards

**Product Detail Page:**
- Two-column layout: Product image (left, 40-50% width) | Details (right)
- Right column contains: Title → Full description → Specifications table/list → "Inquire Now" CTA
- Clean, scannable specification display

**Contact Page:**
- No form - direct contact methods only
- Display email (mailto:), WhatsApp (wa.me link), phone (tel:) with clear iconography
- Professional layout with contact information as primary content

## Animation Principles
- **Library:** Framer Motion exclusively
- **Style:** Subtle, premium-feeling, never distracting
- **Hero Elements:** Fade-in + slide-up (opacity: 0, y: 20 → opacity: 1, y: 0)
- **Cards:** Hover lift effects only
- **Page Transitions:** Staggered children animations for product grids
- **Philosophy:** Animations enhance professionalism, never gimmicky

## Images
**Hero Section:** Use a professional, high-quality image showing BMS products or electronics manufacturing environment. Image should be subtle background with dark overlay to ensure text readability. Alternatively, use the electronics-pattern background as specified.

**Product Images:** Clean, well-lit product photography on white/neutral backgrounds. Consistent aspect ratio across all product cards.

**Placement:** Hero background, product cards (top of card), product detail page (left column, large format)

## Responsive Behavior
- Mobile-first approach
- Navigation collapses to hamburger menu on mobile
- Product grid stacks to single column on mobile
- Product detail switches to single-column vertical layout on mobile
- Maintain readability and touch-friendly spacing on all devices

## Professional Polish
- Consistent use of shadcn/ui components throughout
- No custom icons - use shadcn/ui or Lucide icons
- Buttons always use shadcn/ui Button component with Tech Blue primary color
- Subtle shadows and borders for depth, never heavy effects
- Clean, generous whitespace throughout