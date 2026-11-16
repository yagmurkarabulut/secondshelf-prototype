# SecondShelf illustrations v2

Direction C ("Neighbour's notebook"): a lightly inked Pantry Green line with flat colour patches printed slightly off the line. Redrawn to match the starter kit in the service prototype (V2 · Starter kit, V3 · Brenda storyboard): the dark A5 sign with the arrow, the white NFC plate with a dashed ring and a dark core, the QR and code sticker, the Leaf "labels out · dates visible" strip and the round window sticker.

Open `preview.html` in a browser to see every file, switch the tap states and replay the one-shot animations.

## Files

| File | Kind | Use in the app | Size in the layout |
|---|---|---|---|
| `tap-the-tag.svg` | Stateful, loops in `idle` | G04, R04, H05 activate (inside `UI.nfc`) | full width, about 240 px tall |
| `shelf-fill.svg` | Stateful (`data-mine` 0–6) | G06 Check items, above the list | full width, about 112 px tall |
| `drop-off-done.svg` | One-shot, 1.7 s | G07 Thanks for sharing | `--size-illus` (160 px) tall |
| `pickup-done.svg` | One-shot, 1.3 s | R06 Pickup logged | 160 px tall |
| `shelf-live.svg` | One-shot, 1.9 s | H05 Shelf is live | 160 px tall |
| `check-done.svg` | One-shot, 1.5 s | H08b Check done | 160 px tall |
| `all-fine.svg` | Still | H08 when no item is flagged | 120 px tall |
| `host-setup.svg` | Still | H05 Starter kit (above the checklist) | 160 px tall |
| `empty-shelf.svg` | Plays once (plant sways twice) | M01 "Your food on shelves" empty, M02 My items empty | 120 px tall |
| `empty-coupons.svg` | Still | G08 Active and Used tabs when empty, G08d with no coupon | 120 px tall |
| `empty-search.svg` | Plays once (lens slides in) | R01b no results, map list "No shelves here" | 120 px tall |
| `shelf-full.svg` | Still | G03b point full (optional), map sheet full state | 120 px tall |
| `welcome-loop.svg` | Loops, 8 s (`art--loop`) | O01 Welcome hero: packs travel from one home to the café shelf and on to another | full width, `--size-hero` (240 px) tall, `.art--hero` |
| `photo-reading.svg` | Loops, 4.5 s (`art--loop`); stateful `data-photo` = `sample` · `own` | G06a Reading your photo. `sample`: drawn items, a sweep, then a box and tick per item, left to right in the order of the item rows. `own`: transparent, only the frame corners and the sweep over the person's photo | fills the 4:3 capture frame (`.art--fill`) |
| `photo-how.svg` | Loops, 5 s (`art--loop`) | G05 Photograph your items, empty camera frame | fills the 4:3 capture frame (`.art--fill`) |
| `check-pack.svg` | One-shot, 3.2 s | R04 Check, then tap: a tick on the lid, then on the date (matches the two check rows) | 160 px tall on a Cream card (120 px if the screen is short) |
| `report-missing.svg` | One-shot, 1.6 s | R07 "Report as missing?" sheet; plays each time the sheet opens | 120 px tall |
| `application-sent.svg` | One-shot, 2 s | H03c Application sent; the small clock means "being checked", not approved | 160 px tall |
| `rescue-bonus.svg` | Stateful `data-picked` 0–4 (CSS transitions) | G10 Rescue Bonus hero card. The gold bar is decoration: `UI.bonusBar` and "n of N items picked up" carry the meaning | 160 px tall |

## How to use them

**One-shot and still files** can be used as `<img src>`; CSS animations inside an SVG file run in an `<img>`. To replay, re-insert the element.

**Stateful files must be inlined** (the app changes an attribute on the root `<svg>`):

- `tap-the-tag.svg`: set `data-state` to `idle`, `scanning`, `found`, `notfound` or `qr`.
  - `idle`: 4 s teaching loop. Hand brings the phone up to the plate, ripples, then lowers it again. The sign's arrow bobs and the plate's ring turns.
  - `scanning`: phone held on the plate, ripples every 1.2 s (`--motion` NFC scan time).
  - `found`: tick pops on the phone, the phone buzzes once, the plate core turns Leaf.
  - `notfound`: phone sits just off the plate, a dashed terracotta target blinks where to aim, the screen shows a Slate "!".
  - `qr`: phone moves over the QR sticker, camera corners on the screen.
- `shelf-fill.svg`: set `data-mine` to the number of units on the list (0–6; clamp above 6). Dashed outlines show free spots; each new unit drops into the next spot. The slot order matches the scripted photo result: fusilli pasta, tomato soup, tomato soup, crackers, then a jar and a box.
- `photo-reading.svg`: set `data-photo` to `sample` (drawn items, boxes and ticks) or `own` (no drawn items; frame corners and sweep only, laid over the person's photo and a `--scrim` dim).
- `rescue-bonus.svg`: set `data-picked` to 0–4, the share of the bonus picked up rounded to four slots (`Math.round(min(picked, total) / total * 4)`). Changing the value animates (packs rise away, Leaf hearts appear, the gold bar fills); the app mounts it at 0 and sets the real value two frames later.

**Looping files** (`tap-the-tag` idle, `welcome-loop`, `photo-reading`, `photo-how`): in the app the last three carry the `art--loop` class, and `ArtLoops` pauses them (`animation-play-state: paused`) while the page is hidden or once their screen is no longer the active route.

**Not inlined:** `proposed/` holds the variants that were not picked (`welcome-loop-a/b`, `photo-reading-b/c`). `tools/illus.js` only reads `*.svg` in this folder, so they never reach the app.

**Colours** use the app's CSS custom properties (`--green-900`, `--oat-200`, `--terracotta-500` …) with hex fallbacks, so when inlined they follow `docs/design-system.md`. Patch meaning:

| Patch | Means |
|---|---|
| Oat back panel, Sand boards | The shelf itself |
| Paper | Food already on the shelf |
| Terracotta tint + Terracotta 500 band | Your items in this drop-off, and the target to aim at |
| Ochre 500 | Thank-you sparkles only (G07) |
| Leaf | Done: the phone tick, the plate core after a read, the dates strip, the check badge |

**Scoping.** Every selector inside a file is prefixed with its own root class (`.ssi-tap`, `.ssi-fill` …) and every `id` is unique per file, so several files can be inlined on one page. Two copies of the same file on one page share identical defs, which is harmless.

**Accessibility.** Each file has `role="img"`, an `aria-label` and a `<title>`. The screen copy still carries the meaning; the drawing never replaces it. Keep `aria-live` on the NFC status text, not on the SVG.

**Reduced motion.** Each file stops all animation under `prefers-reduced-motion: reduce`. The still frame is always the end state (items placed, tick shown); `tap-the-tag` shows the phone on the plate with two ripples drawn.

## Drawing rules (for new illustrations)

- Line: Pantry Green, 2.5 px for the shelf and phone, 2 px for small items, round caps and joins, light ink wobble (`feTurbulence` + `feDisplacementMap`, scale 1.8).
- Patch: flat fill, shifted 1.5–2 px down-left of the line. No gradients or shadows.
- People: hands only, Sand skin and a Leaf sleeve, no faces. Fingers wrap the phone's right edge and the thumb sits on the left, so the grip reads at a glance.
- No words inside drawings. Shapes are generic (no brands), so one drawing works in every city.
- One accent per scene: Terracotta for "act here / yours", Ochre only for thank-you moments.
