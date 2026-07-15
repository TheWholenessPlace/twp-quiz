# Build Spec: The Wholeness Place — "Which R Does Your Body Need?" Quiz Funnel

**How to use this document:** Paste this spec into Codex together with the prototype file `twp-quiz-v2.jsx`. The prototype is the source of truth for all copy, screens, flow logic, scoring, and styling — port it faithfully. This spec adds everything the prototype stubs out: real booking links, email capture, intake delivery, and deployment.

---

## 1. What this is

A mobile-first quiz funnel for The Wholeness Place Wellness Co. (womens' wellness practice, Toluca Lake, CA). A visitor answers 7 questions, receives her result (one of the 4 R's: Reset, Reconnect, Regulate, Restore), captures her email for a free ebook, chooses her session (bodywork / mindwork / soulwork), completes a short intake, and lands on the exact Square booking page for her chosen session.

Success = she books a paid session with her intake already in the owner's hands.

## 2. Tech requirements

- Single-page React app (or equivalent), mobile-first, no login, no database
- Deployable as a standalone page (Vercel or Netlify), to be linked from the website, Beacons page, and Instagram bio
- All quiz/session/pricing data lives in config objects at the top of the code (as in the prototype) — never hardcoded into screens
- **The booking-link map (Section 5) must be a single config object** so the owner can later swap Square links for Acuity links by editing one map — no other code changes
- Answer order must shuffle per question per visitor (already implemented in prototype)
- No tracking beyond optional basic page analytics; no cookies required

## 3. Brand system (locked — do not improvise)

Colors: navy `#263f60`, ocean `#1f628e`, sky `#69adc6`, light blue `#baebff`, ice `#c0f0f7`, cream `#fffff6`, gold `#bd9558`, warm brown `#7d6145`.

Fonts (Google Fonts): Playfair Display (headings), Lato (body; 300 for fine print), Hurricane (script accents). Hurricane is a stand-in for the brand's licensed Brittany font; keep the script font referenced in one CSS variable so it can be swapped later.

Dark screens (welcome, result, final) use the navy→ocean gradient with cream text and gold accents; working screens use the ice→cream gradient. Follow the prototype exactly.

Voice: all copy is already written in the prototype. Do not rewrite, "improve," or add copy. No spiritual/metaphysical language may be added anywhere.

## 4. Flow (implemented in prototype — port as-is)

1. **Welcome** → 2. **Quiz** (7 questions, shuffled answers, hidden scoring) → 3. **Result** (her R + email capture card) → 4. **Choose how** (bodywork / mindwork / soulwork, with "where most start" badge on her R's recommendation) → 5. **Session detail** (bodywork: type then priced duration; mindwork: priced duration; soulwork: setting first, then setting-priced duration) → 6. **Intake** (pillar-specific questions + birth date/time/city) → 7. **Confirmation** → "Pick my time" opens the correct Square link (new tab).

Scoring: each answer adds 1 to its R; highest total wins. Recommendation map: Reset→mindwork, Reconnect→soulwork, Regulate→bodywork, Restore→bodywork.

## 5. Booking link map (verified against live Square catalog, July 14, 2026)

Base: `https://book.squareup.com/appointments/llsj7jyc9rfglc/location/LGMJ1WX0891GZ/services`

| Flow selection | Destination |
|---|---|
| Mindwork (any duration) | `{base}/ZPXUQWLY7GVSA5TY7BTX4OQS` |
| Soulwork (any setting/duration) | `{base}/YJ6BHW3ORD3QCTO23I3WQTZW` |
| Bodywork · Swedish | `{base}/MZCRZKEXRHP2V5CVZ7HCQRHY` |
| Bodywork · Deep Tissue | `{base}/OXX7GSH57WP6HWAKW2OK6BMS` |
| Bodywork · Aromatherapy | `{base}/P2OYXCLKCLC3I2Q3CYWM7AS7` |
| Bodywork · Pre-Natal/Post-Natal | `{base}/5V6RKV7I36DB2G3ZO6PYD5PM` |
| Bodywork · Himalayan Salt Hot Stone | `{base}/VUNIEQONKVGPSC6SJNJRX66O` |
| Fallback / anything else | `{base}` |

Pricing shown in the flow (must stay matched to Square): Mindwork $145/60, $195/90, $275/180 Monthly Deep Dive. Soulwork Online $135/60, $185/90; In-Home/Nature $185/60, $235/90 (distance-fee note appears for non-Online only). Swedish $130/$170; Deep Tissue $145/$175; Aromatherapy $135/$170; Pre/Post-Natal $145/$175. Salt Stone: "pricing and times confirmed at booking."

## 6. Email capture (result screen)

The card offers her full result guide + the free ebook *Coming Home to Yourself*.

On submit: (a) record the email + her R via the intake-delivery mechanism in Section 7, then (b) open the ebook page in a new tab: `https://thewholenessplace.store/shop/268362d4-938a-43ce-8225-cafb78e62462`

Button then shows the "Sent. Check your inbox." confirmed state. Email is optional — she can proceed to booking without it.

## 7. Intake delivery (critical — this data must reach the owner)

Square cannot receive the quiz/intake answers, so on the confirmation screen's "Pick my time" tap, submit the full record to the owner via a no-backend form service (Formspree or equivalent), then open the booking link.

Send to: **info@thewholenessplace.com**

Record fields: timestamp; quiz result (R) + score tally; chosen modality; bodywork type or soulwork setting; duration; "what are you carrying" text; pillar focus answer; pillar notes text; birth date / birth time / birth city; email (if captured). Subject line: `New quiz intake — {R} → {session}`.

If the submission fails, do not block her — open the booking link anyway and retry the send in the background once.

## 8. Nice-to-haves (only if trivial)

- Prefill her name/email into the form service record when captured
- A hidden `?debug=1` mode showing the score tally (exists in prototype as a visible line — make it debug-only in production)
- Open Graph tags: title "Which R does your body need right now?", brand navy background, Playfair title

## 9. Acceptance checklist

- [ ] All copy matches prototype verbatim; no added language
- [ ] Answers shuffle; same-position tapping does not produce a fixed result
- [ ] Every session path shows the correct price before booking
- [ ] Soulwork asks setting before showing prices; distance-fee note only for In-Home/Nature
- [ ] Mindwork and bodywork never ask "where" — they state it
- [ ] Salt Stone path works with the fallback link and "confirmed at booking" note
- [ ] "Pick my time" opens the correct Square service page per the map
- [ ] Intake record arrives at info@thewholenessplace.com before/alongside booking redirect
- [ ] Ebook link opens from the email card
- [ ] Booking map is one config object, swappable to Acuity without touching components
- [ ] Renders cleanly on a phone; tap targets comfortable one-handed
