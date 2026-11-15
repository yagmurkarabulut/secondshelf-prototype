# SecondShelf prototype

Front-end-only, hi-fi mobile web prototype of **SecondShelf**: households pass on sealed, shelf-stable food through community shelves in cafés.

Interaction Design Project · MID programme · Tallinn University · Kateřina Friedrichová, Yağmur Karabulut, Nino Tsitsishvili

- Spec and rules for Claude Code: [`CLAUDE.md`](CLAUDE.md)
- UI Kit v0.5: [`docs/design-system.md`](docs/design-system.md)
- Open decisions: [`docs/open-questions.md`](docs/open-questions.md)
- What is built, what isn’t, and what needs a decision: [`docs/review-status.md`](docs/review-status.md)
- Screenshots for the report (390 × 844): [`docs/screenshots/`](docs/screenshots/)
- Figma exports: [`frames/`](frames/)

## Links for the test (17 Nov)

- **Test link (GitHub Pages):** https://yagmurkarabulut.github.io/secondshelf-prototype/
- **Screen index (team only):** https://yagmurkarabulut.github.io/secondshelf-prototype/#/screens
- **Moderator menu:** the round **···** button (40 × 40, 30% see-through at rest). Tap it to open the menu; drag it anywhere inside the app. It snaps to an 8 px grid and moves itself off any button it would cover. A long press (0.8 s) on the greeting or the Welcome wordmark also opens the menu.
- Component gallery (team only): `#/components`

### Scenario start points
Open the moderator menu › **Choose scenario**. Each one resets the demo and skips onboarding.
- **A · giver (Brenda)** → Home. Task: Leave food at Café Daisy (Leave food → map → Café Daisy → I’m there → tap → photo → check → Thanks for sharing).
- **B · receiver (Jonas)** → Home. Task: find pasta and log a pickup (Find food → type "pa" → Pasta → Café Daisy → I’m there → check → tap → tick → Pickup logged).
- **C · host** → Become a host. Task: set up the shelf, then do the daily check (H01 → … → shelf is live → Home → Start check → Submit).

### Facilitator guide (5 lines)
1. Before each participant: tap the ··· button › Reset demo or Choose scenario, then hand over the phone on Home (or Welcome for onboarding).
2. Read the scenario task aloud; don’t name buttons. Timers start on Leave food / Find food / Start check and stop on the confirmation screen.
3. Trigger "the other person" from the moderator menu › Simulate (receiver picked up 2 items, travel prompt, alert match, tag not found, missed check, …).
4. If someone gets stuck, use Jump to screen; every screen also has Back, Close or Home.
5. After the session: moderator menu › Export log (JSON) for task times and screen views; note anything else on paper.

## Working on it
- Everything is in one self-contained `index.html` (inline CSS + vanilla JS, hash routing). The map uses Leaflet 1.9.4 (BSD-2) and Leaflet.markercluster 1.5.3 (MIT), inlined with their licence headers, on a mock neighbourhood: no tile server, no API key. Tokens are block 1 of the `<style>`; the icon sprite is inlined at the top of `<body>`.
- One store (`Store.state`, saved to localStorage) holds the shelves, coupons, Rescue Bonus, host log and timings; `Ops` updates every screen that shows the same data.
- Screenshots: run `python3 -m http.server 8123` in the repo, then `node tools/shot.js '#/components' out.png 390 844` (Playwright).
