# Prompt for Claude — Website Mockup Generation

> **How to use this:** Open a new conversation with Claude (claude.ai), paste everything below the line, and ask for a single-file HTML+Tailwind artifact for the homepage first. After you approve it, ask for the secondary pages one by one using the same prompt as context. Claude will produce production-quality code you can hand to a developer or use as a static prototype.

---

## ROLE

You are a senior product designer + frontend engineer. Build a high-conversion, fast-loading marketing website for a single-doctor internal medicine clinic in Thane, Maharashtra, India. The website's single most important goal is to convert visitors into booked consultations. Every design decision serves that goal — but never at the cost of dignity, trust, or restraint.

## OUTPUT FORMAT

- **Single-file HTML artifact** with Tailwind CSS via CDN.
- Use semantic HTML5, Open Graph + Twitter meta tags, structured data (JSON-LD `MedicalBusiness` + `Physician`), and ARIA labels.
- All images: use `<img>` with `loading="lazy"`, `decoding="async"`, explicit width/height, and well-described `alt` text. For mockup placeholders, use a soft tinted div with the caption written in. Do **not** generate AI images.
- Mobile-first. Use `prefers-reduced-motion` for any animation. Total page weight target under 200KB on first paint (excluding images), no third-party trackers in the prototype, no hero video.
- All fonts loaded as `display: swap` from Google Fonts: **Fraunces** (400, 600 italic) for display + **Inter** (400, 500, 600, 700) for everything else.
- Subtle, restrained motion only — fades and 200ms transforms. No scroll-jacking, no parallax, no Lottie.

---

## THE CLINIC (real details — use as-is)

| | |
|---|---|
| **Doctor** | Dr. Pratik Chhajed, MD (Medicine) |
| **Specialty** | Internal Medicine / Adult General Physician |
| **Address** | Ground Floor, Doctors Planet NX, Hamilton Building, G/2, next to Hiranandani Hospital, Hiranandani Estate, Thane West, Thane, Maharashtra 400607 |
| **Map landmark** | Adjacent to Hiranandani Hospital — use this in directions |
| **Hours** | Monday–Saturday, 7:00 PM – 9:00 PM. Sunday closed. |
| **Phone** | [PLACEHOLDER — to be added by client] |
| **WhatsApp** | [PLACEHOLDER — to be added by client] |
| **Google Rating** | 5.0 ★ across 54 reviews (display this prominently with a "View on Google" link) |
| **Medical Council Reg.** | [PLACEHOLDER — to be added by client] |

---

## BRAND SYSTEM (use exactly)

### Colour tokens

```
--primary:       #0F4C5C   /* Pratik Teal — dominant brand colour */
--primary-deep:  #08323D   /* footers, dark sections */
--primary-tint:  #E8F0F2   /* soft surfaces, callouts */
--gold:          #C9A961   /* Apothecary Gold — exclusive to primary CTA */
--gold-deep:     #A88841   /* gold hover */
--sage:          #87A96B   /* success, healing tags */
--cream:         #FAF7F2   /* warm off-white surfaces */
--ink:           #1A1F2E   /* body text */
--slate:         #64748B   /* secondary text */
--rule:          #E5E7EB   /* dividers */
```

**Usage ratio: 60% cream/white · 30% Pratik Teal · 10% gold + sage.** The site should feel mostly white-and-teal, with gold appearing only at moments of intent (primary CTA, key numbers, accent dividers).

### Type pairing

- **Display / quotes / hero:** Fraunces (serif, slightly literary). Used at large sizes only — 48px and up.
- **UI / body / forms:** Inter. Body text 16–18px on desktop, line-height 1.6, max-width 65ch.

### Voice

Calm, plainspoken, never theatrical. Short sentences. Specific over vague ("fever above 38.5°C lasting more than three days" not "high fever"). No exclamation points. No "world-class", no "cure", no urgency theatre. The voice of a senior doctor explaining something to a thoughtful adult.

---

## PAGE STRUCTURE

Build these pages, in this order of priority:

1. **Home** — the single most important page; build this first
2. **About Dr. Pratik**
3. **Services / What We Treat**
4. **Book an Appointment** (form + calendar)
5. **Blog** (index + 3 sample articles)
6. **FAQs**
7. **Contact / Find Us**

All pages share a sticky header (logo + nav + gold "Book Appointment" button) and a sticky **mobile bottom bar** with two buttons: **Book Appointment** (gold) and **Call Clinic** (teal). The bottom bar reduces 30% in height on scroll but is never hidden.

---

## HOMEPAGE — DETAILED SPEC

The homepage is one long, scrolling page with the following sections in order. Write all copy as shown — it is final, not placeholder.

### 1. Sticky Header
- Left: monogram logo (a teal circle with "P·C" in gold) + name "Dr. Pratik Chhajed" with "MD Medicine" in tracked-out caps below
- Centre (desktop only): nav — About · Services · Blog · FAQs · Contact
- Right: "Book Appointment" gold button + a small "5.0 ★ on Google" pill (clickable, opens the live Google profile)
- Mobile: hamburger menu, name in centre, gold "Book" button on right

### 2. Hero
- Background: cream surface with a subtle teal hairline pattern at very low opacity (or a soft duotone-teal photograph placeholder of a clinic interior)
- Eyebrow (small caps, gold): `INTERNAL MEDICINE · THANE WEST`
- H1 (Fraunces, 56–72px): **"A doctor who listens long enough to actually figure it out."**
- Sub (18px slate): "Adult internal medicine in Hiranandani Estate. Unhurried consultations, clear explanations, and someone you can call after you leave the room."
- Primary CTA (gold): **Book an Appointment**
- Secondary CTA (ghost): **See available slots tonight**
- Trust strip below: `5.0 ★ on Google · 54 reviews · 7–9 PM · Mon–Sat · Adjacent to Hiranandani Hospital`

### 3. "When to come in" — quick triage cards
Three simple cards, each with a small icon (use unicode glyphs or simple SVG, no clipart). Below each is a small ghost "Book a slot" link.

- **Something acute** — Fever that won't settle, severe headache, chest discomfort, breathing trouble, persistent stomach pain.
- **Something chronic** — Diabetes, blood pressure, thyroid, cholesterol — first diagnosis or ongoing management.
- **Something second-opinion** — A diagnosis you want reviewed, a report you want explained, a treatment plan you want clarified.

Section CTA at the end: a single sentence — "Not sure if your concern fits? **Just call the clinic.**" with the phone number as a tap-to-call link.

### 4. About Dr. Pratik (preview)
Two-column on desktop, stacked on mobile. Left: a portrait placeholder (cream tinted div with caption "Dr. Pratik Chhajed, MD"). Right:

> Heading (Fraunces): "An evening practice in Hiranandani Estate."
>
> Body: "Dr. Pratik Chhajed is an MD-trained internal medicine physician practising at Doctors Planet NX, adjacent to Hiranandani Hospital. The clinic is open six evenings a week, 7 to 9 PM, deliberately structured for working professionals and families who can't easily take a daytime slot.
>
> The practice is built on three things — listening long enough to actually understand the problem, explaining the diagnosis in language that doesn't require a medical dictionary, and remaining reachable after the consultation ends. A patient who calls back two days later with a question is not an inconvenience. It is the practice working as intended."

CTA: ghost button — **Read more about Dr. Pratik →**

### 5. What We Treat
Six cards in a 3×2 grid (desktop), 1-column stack (mobile). Each card: small icon, heading, 2-line description, "Learn more" link.

1. **Fevers & Infections** — Dengue, typhoid, viral fevers, COVID, urinary infections. When to investigate, when to wait it out.
2. **Diabetes & Hypertension** — Long-term management, lifestyle plans realistic for Indian households, medication adjustments.
3. **Thyroid & Cholesterol** — Diagnosis, monitoring, treatment of common endocrine and lipid disorders.
4. **Cardiac Risk & Post-Discharge Care** — Risk assessment, follow-up after a cardiac event, coordination with specialists.
5. **Preventive Health Checks** — Age-appropriate screening, full-body checks decoded, what's actually worth testing.
6. **Second Opinions** — A careful review of an existing diagnosis, report, or treatment plan.

Section CTA: "Don't see your concern? **Most internal medicine cases are welcome.**" with a "Book a consultation" gold button.

### 6. The 5.0★ Wall
Heading: "What our patients say." Sub: "Real reviews, on Google."

Carousel or 3-column grid of three real review excerpts (use the actual reviews from Google — they are public). Each card:
- Star rating
- 2–3 sentence excerpt (paraphrase, do not over-quote — just enough to be representative)
- Reviewer first name
- Small "via Google" tag

End with a gold-bordered ghost button: **Read all 54 reviews on Google →**

### 7. Booking — inline mini-form
Don't make people click through to book. Embed a simple form right here:

- Heading (Fraunces): "Book a slot for tonight."
- Sub: "Evenings, 7–9 PM. Most weekday slots have a 5–10 minute wait."
- Form fields (one row per field on mobile, two columns on desktop):
  - Full name
  - Phone (with +91 country code prefilled)
  - Reason for visit (optional, single-line)
  - Preferred date (date picker, disable Sundays, disable past dates)
  - Preferred time (15-min slots between 7:00 PM – 9:00 PM)
- Below form: small text — "We'll confirm via WhatsApp within 30 minutes during clinic hours."
- Submit button: gold, full-width on mobile — **Request Appointment**

### 8. Blog preview
Heading: "Read before you book — common questions, plainly explained."

3-card grid showing the latest blog posts (use the sample posts below). Each card: small category tag, headline, 2-line summary, reading time, "Read →".

End: ghost button — **All articles →**

### 9. FAQ snippets
4 most-asked questions in an accordion. (Full FAQ list below.) End: link — **All FAQs →**

### 10. Find Us
Two-column. Left: embedded Google Map iframe centred on the clinic. Right:

- Heading: "Hamilton Building, ground floor."
- Address (full, formatted nicely)
- Landmark line: "Adjacent to Hiranandani Hospital. The entrance is on the ground floor of Doctors Planet NX."
- Hours table (Mon–Sat 7–9 PM, Sun closed)
- Two buttons: **Get Directions** (opens Google Maps) and **Call Clinic** (tap-to-call)

### 11. Footer
- Dark teal background (`--primary-deep`)
- 4-column on desktop, stacked on mobile:
  1. Brand: monogram, name, MD qualification, MCI registration number, single-line credo "Quiet competence, made visible."
  2. Visit: address, hours, "Get Directions"
  3. Reach: phone, WhatsApp, "Book Appointment"
  4. Read: links to Blog, FAQs, About, Privacy Policy, Terms
- Bottom strip: copyright · disclaimer line · Telemedicine guidelines compliance note
- The disclaimer line: "This website is for informational purposes only and does not constitute medical advice. In a medical emergency, please call 108 or go to the nearest hospital."

---

## CONTENT — BLOG POSTS (write these in full)

Generate 3 sample blog posts as separate `<article>` pages, each ~700 words, written by the doctor in first person. Use the voice rules above.

### Blog 1: "When a viral fever needs a blood test — and when it just needs sleep"
- **Category:** Common Symptoms, Decoded
- **Reading time:** 4 min
- **Hero summary:** Most fevers in Thane settle on their own in 5–7 days. The ones that don't, or that come with specific warning signs, deserve a CBC and a closer look. Here's how to tell them apart.
- **Sections:** What a "viral fever" actually is · The 5–7 day rule · Five warning signs that change the maths · What blood tests we order, and why · A simple home protocol for the first three days
- **End with:** "If your fever has crossed three days, or if any of the warning signs above apply, please book a slot. A blood test today is more useful than guessing for two more days."

### Blog 2: "Living with diabetes in a Thane household — the realistic version"
- **Category:** Living With Chronic Conditions
- **Reading time:** 6 min
- **Hero summary:** Most diabetes advice is written for somebody else's kitchen. This is for a real Indian household, with real chai, real chapatis, and real festivals.
- **Sections:** What "control" actually means (and why your HbA1c matters more than fasting sugar) · The chapati conversation · Chai, sugar, and four practical compromises · Walking after meals — the only intervention everybody agrees on · Festival weeks — a realistic plan, not a denial · When to call me
- **End with:** "Diabetes management is a long conversation, not a single prescription. If yours feels stuck, let's talk."

### Blog 3: "Monsoon in Thane — what to actually worry about, and what to ignore"
- **Category:** Seasonal & Local Health
- **Reading time:** 5 min
- **Hero summary:** Every June we see the same pattern in the clinic — dengue, leptospirosis, gastro, and a lot of wet-season anxiety. Here's a calm guide to the four monsoon illnesses that matter, and what symptoms should actually pull you in.
- **Sections:** Dengue — the platelets question, decoded · Leptospirosis — the wading-through-water risk · Monsoon gastro — the 24-hour rule · Viral coughs that won't quit · Two things that are mostly fine — wet hair and "monsoon weakness"
- **End with:** "If you're seeing a high fever with body pain, abdominal pain, or any bleeding, please come in the same day. The first 48 hours of dengue are the ones that matter."

---

## CONTENT — FAQS (write these in full)

10 FAQs in an accordion. Concise answers — 2–4 sentences each.

1. **How do I book an appointment?** — Use the booking form on this site, or call/WhatsApp the clinic directly. We confirm every booking within 30 minutes during clinic hours.
2. **What are the consultation fees?** — Standard consultation fee is [PLACEHOLDER — to be added by client]. Follow-up within 7 days at a reduced rate.
3. **Do you accept walk-ins?** — Yes, but booked patients are seen first. Evening walk-ins typically wait 20–40 minutes; booking is faster.
4. **What should I bring to the consultation?** — Any previous reports, current medications (or photos of the strips), and a one-line note of your main concern. That's it.
5. **Do you take insurance?** — The clinic operates on a direct-pay model. We provide a detailed receipt that most insurers accept for OPD reimbursement.
6. **Do you do home visits?** — Generally no — examination quality is much better at the clinic. For genuinely homebound patients, please call to discuss.
7. **Can I get a phone or video consultation?** — Yes, for follow-ups and report reviews where a physical examination isn't required. New patients are best seen in person first.
8. **Where exactly is the clinic?** — Ground floor of Doctors Planet NX, Hamilton Building, in Hiranandani Estate. The easiest landmark is Hiranandani Hospital — we're directly adjacent.
9. **Is there parking?** — Paid parking is available within the Hiranandani Estate complex. Most patients find a spot within a few minutes during evening hours.
10. **What if I have an emergency?** — Please don't wait for the clinic to open. Call 108 or go directly to Hiranandani Hospital, which is next door.

---

## CTA STRATEGY (anti-bounce)

This is the most important part of the brief.

- **Always-visible CTA**: sticky header gold "Book Appointment" + mobile bottom bar with Book + Call.
- **Per-section CTAs**, varied so they don't fatigue the reader:
  - After Hero → "Book an Appointment" (primary gold)
  - After Triage Cards → "Just call the clinic" (link, tap-to-call)
  - After About → "Read more about Dr. Pratik" (ghost)
  - After Services → "Book a consultation" (primary gold)
  - After Reviews → "Read all 54 reviews on Google" (gold ghost)
  - After Booking form → (the form IS the CTA)
  - After each Blog card → "If this sounds like you, book a slot" (ghost)
  - After FAQ → "Still have a question? WhatsApp the clinic" (teal secondary)
- **Footer is its own conversion surface**: include the booking form, not just a link.

A user landing on the homepage and scrolling once should never be more than half a viewport away from a way to book or call.

---

## TRUST SIGNALS (visible above the fold on every page)

1. The 5.0 ★ rating with the review count and a "via Google" pill that links out
2. The MD qualification stated cleanly — "Dr. Pratik Chhajed, MD (Medicine)"
3. The location, with "adjacent to Hiranandani Hospital" — a navigable Thane landmark
4. Hours stated in plain English — "Mon–Sat, 7–9 PM"
5. Three rotating real Google review excerpts on the homepage
6. MCI registration number in the footer
7. Compliance disclaimer in the footer

---

## PERFORMANCE & ACCESSIBILITY

- Lighthouse target: 95+ on Performance, Accessibility, SEO, Best Practices.
- All interactive elements have visible focus states (gold outline, 2px).
- Colour contrast: AAA on all body text against backgrounds.
- All form fields have visible labels (no placeholder-only labels).
- Tap targets minimum 44×44 px.
- No content shift — set explicit dimensions on every image and embed.
- Cumulative Layout Shift target: under 0.05.
- Largest Contentful Paint target: under 1.5s on a 4G connection.
- No autoplay anything. No popups. No exit-intent modals. No cookie banner unless legally required (and if so, minimal and dismissible).

---

## STRUCTURED DATA

Add JSON-LD blocks for:
- `MedicalBusiness` (name, address, telephone, geo, opening hours, aggregate rating)
- `Physician` (Dr. Pratik Chhajed, qualification, specialty)
- `FAQPage` (with all 10 FAQs)
- `BreadcrumbList` for inner pages

---

## BUILD ORDER

1. Build the **homepage** as a single self-contained HTML artifact first. Show it to me. We iterate.
2. Once approved, build **About**, **Services**, **Booking**, **Blog index**, **3 sample articles**, **FAQs**, **Contact** in that order — each as a separate artifact, sharing the header/footer/styles.

Begin with the homepage now.
