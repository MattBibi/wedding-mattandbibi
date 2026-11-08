# Bibi & Matt wedding website

Public site: https://wedding.mattandbibi.com/

A static, responsive wedding website for Porto Alegre, Brazil, December 2028. Exact date and ceremony time remain unconfirmed.

## Editing and preview
Open a local HTTP server from this folder, for example `python -m http.server 8080`.
The site uses plain HTML, CSS and JavaScript. No build is required.
GitHub Pages serves the `main` branch root. Preserve the existing `CNAME`.

- `index.html`: content and accessible form structure
- `styles.css`: responsive layout, two visual themes and animated envelope
- `site.js`: Brazilian Portuguese and English translations, saved preferences, form behavior
- `assets/waterfront-harmony.png`: custom illustrated hero; the terrace is illustrative, not a confirmed reception venue

## RSVP delivery: owner activation required
The embedded form uses FormSubmit. It sends to `souzabibi@hotmail.com` and CCs `matt@mattcarolan.net`.
FormSubmit requires a one-time receiving-address activation. Before inviting guests:
1. Submit a clearly labelled setup test from the live website.
2. Open the activation email in Bibi's inbox and confirm the form.
3. Submit a second clearly labelled test and verify it arrives in BOTH inboxes, checking spam too.
4. If a CC verification is requested, complete that as well.

No backend secrets are exposed. A response is only shown as sent after the service acknowledges the request; explicit activation messages and failures remain visible and preserve the guest's answers. Email delivery itself cannot be guaranteed by browser acknowledgement. Do not treat an unactivated form as ready to collect RSVPs.
No test RSVP is automatically sent by CI. Browser tests intercept all submission requests.

## Checks
`npm install`, `npm run check`, `npx playwright install chromium`, `npm test`.
GitHub Actions checks both languages and visual themes, preference persistence, desktop and mobile overflow, envelope accessibility, and success/failure/activation form states.

## Known planning placeholders
Exact wedding date, ceremony time, reception venue, accommodation suggestions and further travel plans await confirmation.
