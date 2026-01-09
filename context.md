# Builder Prompt — Flexible Positioning (Law-Firm Focus, Not Exclusive)

You are a senior product designer + frontend engineer. Build a fast, credible, light-mode-by-default landing site for a solo operator studio that improves website conversion + intake systems for service businesses, with a *current focus on law firms* (not law firms only). The goal is to convert cold visitors from outreach into booked intro calls.

## Brand & Positioning

- Brand name: “... Studio” (placeholder is fine)
- Core positioning: “Service-business conversion + intake optimization”
- Current focus (must appear, but not as exclusive): “Current focus: law firms.”
- Primary CTA: “Book a 15-minute call”
- Secondary CTA: “Get a free 10-point intake audit”
- Tone: confident, calm, practical, results-focused. No hype, no cringe. Clear, grounded language.

### Key message constraints (important)
- Do NOT position as “law firms only.”
- Make the site feel law-firm-native through problems + examples, but keep the door open to other service businesses.
- Use outcome-first language. Industry comes as a qualifier, not the headline.

## Design Direction

- Light mode by default + include a dark mode toggle.
- Editorial, modern, minimal. Lots of whitespace. Subtle grid. Premium but simple.
- Typography: use a free Google font pairing with an editorial feel:
  - Headings: Literata (or Cormorant Garamond)
  - Body: Inter
  - Make fonts easy to swap later.
- Palette: monochrome + one accent color for buttons/links.
- Motion: subtle (hover states, gentle section fade-in). Keep it professional.

## Site Structure (Single-page)

### 1) Hero
- Headline (outcome-based, not industry-based):
  - “Turn your website into a booked-consultation engine.”
- Subhead:
  - “I help service businesses improve website clarity, conversion flow, and follow-up so more visitors become qualified calls. Current focus: law firms.”
- CTAs:
  - Primary: Book a 15-minute call
  - Secondary: Get a free 10-point intake audit
- 3 trust bullets:
  - “Fast turnaround”
  - “Performance + accessibility first”
  - “Clear, measurable improvements”

### 2) “Who this is for” (small, tight section)
- Title: “Best fit”
- Copy:
  - “Best fit: law firms, clinics, accountants, agencies, and other service businesses that rely on consultations.”
- Add 3 small examples of “conversion leaks” that apply across industries.

### 3) Problem Section
- Title: “Most service websites leak leads”
- Bullet list:
  - confusing service pages
  - weak calls to action
  - slow mobile experience
  - forms that feel annoying or untrustworthy
  - no clear next step after someone reaches out
- Add a short paragraph framing this as lost consultations + wasted marketing spend.

### 4) Services (3 cards max)
Card A: Website Conversion Refresh
- Includes: messaging clarity, page structure, CTA placement, mobile UX, speed pass
- Outputs: updated pages, tracking events, launch support

Card B: Intake Flow Optimization
- Includes: contact flow, form redesign, booking step, follow-up recommendations (email/SMS)
- Outputs: streamlined journey, fewer drop-offs, clearer qualification

Card C: Analytics + Lead Tracking Setup
- Includes: GA4, key events, conversion reporting, simple dashboard
- Outputs: baseline metrics + monthly review option

### 5) Proof Section (assume few/no law firm case studies yet)
Must include both:
- “Sample Audit Preview”
  - Offer a downloadable PDF link placeholder
  - Copy should clearly say it’s a sample based on publicly observable issues
- “Representative Work”
  - 2–3 mini case studies framed by outcomes (performance/UX/system integration)
  - Use honest language: “representative” / “selected work” / “details on request”
  - Avoid fake numbers. Use believable claims like speed, clarity, reduced friction.

### 6) Process (3 steps)
- Step 1: Quick Audit
- Step 2: Fix + Launch
- Step 3: Measure + Improve
Include timeline placeholders:
- Sprint: 1–2 weeks
- Ongoing: monthly

### 7) Pricing (simple, non-scary)
Offer two options with “starting at” placeholders:
- “Conversion Sprint” — starting at $X,XXX
- “Monthly Optimization” — starting at $XXX/mo
Add note:
- “Exact pricing depends on scope. Start with a quick call.”

### 8) FAQ (5–7 items)
Include:
- Who do you work with?
- Do you work mostly with law firms?
- How fast can you start?
- Do you replace our whole site?
- Can you work with our existing vendor/developer?
- What do you need from us?
- What results should we expect?

### 9) About Section
- Operator-style bio (short, credible):
  - “Frontend developer building production software for years.”
  - “I care about clarity, speed, accessibility, and systems that reduce admin burden.”
  - “Current focus: law firms, but I take on a small number of other service businesses when the fit is strong.”
- Headshot placeholder

### 10) Footer CTA
- Repeat: Book a 15-minute call
- Email + location line (e.g., “Based in Montréal, working remotely”)
- Footer links: Privacy, Terms

## Functional Requirements

- Booking:
  - Button linking to Calendly (placeholder URL)
  - Optional embed section (nice-to-have)
- Contact form:
  - Fields: name, email, firm/company name, website, message
  - Spam protection (honeypot)
- Performance:
  - Responsive, fast. Aim for excellent Lighthouse scores.
- Accessibility:
  - semantic HTML, keyboard navigation, visible focus states, good contrast.
- SEO:
  - title + meta description, OpenGraph tags, sitemap, robots.
- Analytics:
  - placeholder for GA4
  - track key events: book_call_click, audit_request_click, form_submit

## Pages

- Main single-page landing
- /privacy (basic template)
- /terms (basic template)

## Tech Requirements

- Next.js (App Router) + TypeScript + Tailwind
- Componentized sections (Hero, Services, Proof, etc.)
- Clean folder structure
- Provide ALL code (no abbreviations)
- Ready to deploy

## Deliverables

1) Complete codebase output + file structure
2) Instructions to customize:
   - copy
   - font pairing
   - accent color
   - Calendly link
   - audit PDF link
   - GA4 ID

## Content Style Guardrails

- Keep copy punchy and concrete.
- Avoid generic phrases like “help your business grow” or “solutions tailored to you.”
- No “full-service agency” vibe.
- This is a credible solo operator site.

END.