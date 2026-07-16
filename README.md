# twp-quiz

"Which R Does Your Body Need?" — quiz funnel for The Wholeness Place Wellness Co.

A mobile-first, single-page quiz. Seven questions → result (Reset / Reconnect /
Regulate / Restore) → email capture → session choice (bodywork / mindwork /
soulwork) → intake → the correct Square booking page.

Built from `twp-quiz-v2.jsx` per `twp-quiz-codex-spec.md`. All copy, flow, and
styling are ported from the prototype verbatim; this build adds real booking
links, email capture delivery, intake delivery, and deployment config.

## Local development

```bash
npm install
npm run dev
```

## Configuration

All quiz content, pricing, and the booking-link map live in `src/config.js`.
Nothing is hardcoded into the screens in `src/App.jsx`.

### Booking links (Square → Acuity later)

`BOOKING_LINKS` in `src/config.js` is the single config object the booking
flow reads from. To move from Square to Acuity (or any other provider),
edit the values in that one object — no component changes needed.

### Intake delivery (Formspree)

Square has no way to receive quiz/intake answers, so on "Pick my time" the
full record is posted to a no-backend form service (Formspree) that emails
`info@thewholenessplace.com`, and the Square booking page opens at the same
time. The email capture card does the same on a smaller record.

The form endpoint (`https://formspree.io/f/meeyezrz`) is hardcoded in
`src/lib/intake.js` (`postRecord`) — no setup needed to go live. To point
at a different form later, edit that URL directly.

Sends are fire-and-forget: the booking link opens immediately, and a failed
send is retried once in the background, per spec.

### Debug mode

Add `?debug=1` to the URL to reveal the score tally on the result screen.
It's hidden by default.

## Deployment

This is a static Vite build — deploy to Vercel or Netlify:

```bash
npm run build
```

Output goes to `dist/`. The Formspree endpoint is already baked into
`src/lib/intake.js` — no environment variables required.

## Open Graph

`index.html` sets OG/Twitter tags (title, description, `theme-color`) and a
simple navy-background SVG (`public/og-image.svg`) with the Playfair-style
headline as a placeholder share image. Swap it for a branded PNG/JPG export
whenever one exists — some link-preview crawlers render SVG `og:image`
inconsistently.
