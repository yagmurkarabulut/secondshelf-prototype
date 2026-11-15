# Prompt for Claude Code: add illustrations v2

Paste everything below the line into Claude Code, from the root of `secondshelf-prototype`, after copying this package's `assets/` and `docs/` folders into the repo.

---

Read `CLAUDE.md`, `docs/design-system.md` and `docs/illustrations-plan.md` first. Then add the SecondShelf illustration set v2 to the prototype. The art is done: it is in `assets/illustrations/` (12 SVGs, a `README.md` explaining each file's states, and `preview.html`). New and updated icons are in `assets/icons/proposed/`. Don't redraw anything. Wire the files in and keep the app's rules: tokens only, 44 px targets, AA contrast, reduced motion, frame wins on layout, spec wins on wording.

Work on a new branch `illustrations-v2`. Commit in small steps with clear messages. Don't push until I say so.

**1. Inline the art.** `index.html` must stay self-contained, so don't fetch the SVGs at runtime.
- Add `tools/illus.js` (Node, no dependencies). It reads every `assets/illustrations/*.svg`, strips the XML prolog if any, and writes them into `index.html` between `/* ILLUS:START */` and `/* ILLUS:END */` as `const ILLUS = { 'tap-the-tag': \`<svg …>\`, … };`. Running it twice must give the same result. Mention it in `README.md` next to `tools/icons.js`.
- Add a helper `UI.art(name, { cls = '', attrs = '', label })`. It returns the SVG string, with `cls` added to the root `class` and `attrs` added to the root `<svg>` tag (for `data-state` / `data-mine`). If `label` is given, it replaces the `aria-label`. Wrap it in `<div class="art art--${name}">`.
- CSS: `.art{display:flex;justify-content:center}`, `.art svg{display:block;width:100%;max-width:100%;height:auto}`, `.art--illus svg{width:auto;height:var(--size-illus)}`, `.art--sm svg{width:auto;height:var(--size-illus-sm)}`. Every SVG keeps its aspect ratio and is centred. Add `--size-illus-sm:120px`, `--motion-nfc-loop:4s` and `--motion-drop:450ms` to the token block and to `docs/design-system.md` §10b.

**2. Replace the four `UI.illus()` placeholders** (see the plan, §1): G07 `Views.giveDone` → `drop-off-done`, R06 `Views.takeDone` → `pickup-done`, H05 `Views.hostLive` → `shelf-live`, H08b `Views.hostCheckDone` → `check-done`. Keep each screen's `.stagger` order; the art is the first child. Then delete `UI.illus` and the `.illus` CSS if nothing else uses them.

**3. NFC tap (G04, R04, H05 activate).** In `UI.nfc`, replace `.nfc__art` (rings + core icon, and the dashed `.nfc__qr` box) with `UI.art('tap-the-tag', { attrs: \`data-state="${state}"\` })` for every state, including `qr`.
- The SVG has its own Cream card. Remove the stage's `--tint-on-dark` background and the fixed `min-height:240px` / 128 px art sizes. Keep `.nfc__status` (with `aria-live`) on the dark screen under the art.
- Remove the now-unused `.nfc__ring`, `.nfc__core`, `.nfc__phone`, `pulse` and `approach` CSS.
- Better still: when `NFC` changes state, set `data-state` on the existing `<svg>` instead of rebuilding the whole section, so the idle loop doesn't restart. If rebuilding is simpler, keep it; the found pop plays on mount either way.
- Check that the global reduced-motion rule doesn't break it. The SVG's own `@media (prefers-reduced-motion)` rule (`.ssi-tap *{animation:none !important}`) is more specific than `*{animation-duration:1ms!important}`, so the still frame (phone on the plate) should win. Confirm this in the browser.
- Wording: don't change the fixed action "Tap shelf tag". Add an open question to `docs/open-questions.md`: the physical plate says "Hold your phone here" and the sign says "Logging? Tap the plate below", so should the G04/R04 helper line read "Hold your phone on the plate under the SecondShelf sign"? Leave the current copy until the team answers.

**4. G06 shelf that fills (`Views.giveItems`).** Above the item list, add `UI.art('shelf-fill', { attrs: 'data-mine="0"' })`, with an `aria-label` like "4 of your items on the shelf". In `draw()`, set `data-mine` to the total quantity across items, clamped to 0–6, so stepper +/−, add, remove and Undo all update it. Don't rebuild the SVG on each draw, or the drop animation replays for every item.

**5. Empty states.** Extend `UI.empty` with an optional `art` name: when set, render `UI.art(art, { cls: 'art--sm' })` instead of the 32 px icon. Apply it as listed in the plan, §4: `Views.home`, `Views.me` and `Views.bonus` "Nothing on shelves yet" → `empty-shelf`; `Views.coupons` (both tabs) and `Views.couponCode` → `empty-coupons`; `Views.map` find-mode no results and list "No shelves here" → `empty-search`; `Views.hostCheck` "All items look fine" → `all-fine`. Keep the icon version for `Views.giveItems` "No items yet" and the components gallery. The illustration replaces the gold search icon on R01b (gold icons are reward-only).

**6. H05 Starter kit (`Views.hostKit`).** Put `UI.art('host-setup', { cls: 'art--illus' })` under the title. Give each checklist row its icon: shelf `community-shelf`, sign `shelf-sign`, NFC plate `nfc-plate`, QR sticker `qr-code`, window sticker `window-sticker`. If `UI.checkbox` can't take an icon, add an optional `icon` param rather than a one-off.

**7. Icons.** From `assets/icons/proposed/`:
- Add `ss-nfc-plate`, `ss-shelf-sign`, `ss-window-sticker` and `ss-date-strip`.
- Replace `ss-tap-nfc` (now 3 waves) and `ss-community-shelf` (now the two-tier cabinet).
- Update all of these places: `assets/icons/svg/`, `assets/icons/svg-currentcolor/`, `assets/icons/sprite.svg`, the inline `<symbol>` sprite in `index.html`, `assets/icons/icons.json`, `assets/icons/preview.html` and `assets/icons/README.md` (68 → 72 icons).
- Also add them to `docs/design-system.md` §7 (set list, "where each icon goes").
- Check `community-shelf` at 16 px in the map cluster pill; it must still read.

**8. Docs.**
- Add `docs/design-system.md` §7b "Illustration": copy the drawing rules and the patch-meaning table from `assets/illustrations/README.md`.
- In `docs/review-status.md`, remove the "illustrations are dashed placeholders" and "rough NFC animation" notes that this fixes, and add anything you couldn't finish.
- Keep `docs/illustrations-plan.md` in the repo.

**9. QA before you finish.**
- Screenshot at 390 × 844 with reduced motion **off**, waiting about 2 s on one-shot screens: G04 in all five NFC states (use the moderator "Simulate: tag not found" and the QR button), R04, H05 activate, G06 with 0 and 4 items, G07, R06, H05 kit, H05 live, H08 with nothing flagged, H08b, M01 as Jonas (empty), G08 Active empty, R01b.
- Do it again with reduced motion **on** for G04, G07 and G06, and check the still frames make sense.
- Check 360 px and 430 px widths for G04 and G06.
- Check nothing overlaps the sticky action bars.
- Check the Cream art card on the dark G04 screen keeps the status text readable (AA).
- Put the screenshots in `docs/screenshots/` and summarise what changed, by screen, in your final message.
