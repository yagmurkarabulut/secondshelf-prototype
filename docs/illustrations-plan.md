# Illustrations, empty states and icons: gap list (v2, 15 Nov 2026)

Checked against `index.html` at commit `9850a45` ("Visual QA round 7"), `frames/` and `docs/review-status.md`. Line numbers move, so each row names the view or helper instead.

Direction: **C, "Neighbour's notebook"**, redrawn to match Nino's starter kit (V2) and Brenda storyboard (V3). The physical props (A5 sign with the arrow, NFC plate, QR and code sticker, dates strip, window sticker) are drawn the way hosts will put them up, so the in-app animation shows people exactly what to look for at the shelf.

## 1. Illustration placeholders → replace

All four use `UI.illus(label)` (dashed box, "Illustration placeholder").

| Screen | View | Placeholder label today | Replace with | Notes |
|---|---|---|---|---|
| G07 Thanks for sharing | `Views.giveDone` | "Packs land on the shelf" | `drop-off-done.svg` | Your 4 items (pasta, 2 soup, crackers) drop in, then 3 gold sparkles. Only Ochre moment in the giver flow. |
| R06 Pickup logged | `Views.takeDone` | "Bag fills with food" | `pickup-done.svg` | Two items lift into a bag; dashed outlines show the spots they left. Plays alongside the existing 6 → 4 count-down. |
| H05 Shelf is live | `Views.hostLive` | "Shelf appears on the map" | `shelf-live.svg` | Ink pin (same as map markers) drops in, two green rings. |
| H08b Check done | `Views.hostCheckDone` | "Shelf tidies, tick" | `check-done.svg` | Items straighten, one old item lifts off, Leaf tick badge. |

## 2. NFC tap → replace the ring-and-icon art

`UI.nfc({ state })` is used on **G04** (`Views.giveTap`), **R04** (`Views.takeTap.tap`) and **H05 activate** (`Views.hostActivate.tap`). Today `.nfc__art` is 3 rings around a 72 px icon on a dark `--tint-on-dark` panel; testers in Prague and Tbilisi found the tap unclear (CLAUDE.md §8).

| State | Today | With `tap-the-tag.svg` |
|---|---|---|
| idle | Rings pulse, `phone-tap` icon bobs | 4 s loop: the sign's arrow bobs, a hand brings the phone to the plate, ripples, the phone lowers again |
| scanning | Rings pulse faster, `tap-nfc` icon | Phone held on the plate, ripples every 1.2 s |
| found | `done` icon on Leaf | Tick pops on the phone, one buzz, plate core turns Leaf |
| notfound | `needs-attention` on Oat | Phone just off the plate, dashed terracotta target blinks, Slate "!" on the phone |
| qr | Dashed square + `qr-code` icon | Phone over the QR sticker with camera corners |

Layout change: the illustration has its own Cream card (16 px radius), so on the Pantry Green task screens it reads as a window into the café. Remove the `--tint-on-dark` stage background and the fixed 128 px / 240 px art sizes that review-status flagged.

Wording to align with the physical kit (open question, add to `docs/open-questions.md`): the plate says **"Hold your phone here"** and the A5 sign says **"Logging? Tap the plate below ↓"**, while the app says "tag". Suggest the app keeps the action **Tap shelf tag** (fixed in §7) but the helper line reads "Hold your phone on the plate under the SecondShelf sign", so the words match what people see.

## 3. Drop-off "shelf fills as you add" → new

| Screen | View | Today | Add |
|---|---|---|---|
| G06 Check items | `Views.giveItems` | List only | `shelf-fill.svg` above the list, `data-mine` = total units (fusilli 1 + tomato soup 2 + crackers 1 = 4). Stepper +/−, add and remove (with Undo) update it. Dashed outlines show free spots, so "Room for 6" on the map becomes visible here too. |

## 4. Empty states

`UI.empty({ ic, title, line, action })` shows a 32 px tertiary icon. Use an illustration where the empty state is a whole screen or a main section; keep the icon where it sits inside a small card or sheet.

| Where | View / call | Copy today | Change |
|---|---|---|---|
| M01 Home, "Your food on shelves" | `Views.home` | Nothing on shelves yet | `empty-shelf.svg`, 120 px |
| M02 Me, My items | `Views.me` | Nothing on shelves yet | `empty-shelf.svg`, 120 px |
| G10 Rescue Bonus, "Your food on shelves" | `Views.bonus` | Nothing on shelves yet | `empty-shelf.svg`, 120 px |
| G08 Coupons, Active tab | `Views.coupons` | No coupons yet | `empty-coupons.svg` |
| G08 Coupons, Used tab | `Views.coupons` | Nothing here yet | `empty-coupons.svg` |
| G08d Show at the counter, no coupon | `Views.couponCode` | No coupons yet | `empty-coupons.svg` |
| R01b No results (map sheet) | `Views.map` (find mode) | No {food} nearby right now | `empty-search.svg` (replaces the gold search icon; gold icons are reward-only) |
| Map list, no shelves | `Views.map` (list) | No shelves here | `empty-search.svg` |
| H08 Daily check, nothing flagged | `Views.hostCheck` | All items look fine | `all-fine.svg` |
| G06 Check items, list emptied | `Views.giveItems` | No items yet | Keep the icon; `shelf-fill.svg` above already shows 0 |
| G03b Point full | `Views.point` | Full shelf | Optional `shelf-full.svg` above the "Full shelf" chip |

## 5. Keep as photos (don't illustrate)

Venue photos (G03, R03, map sheet, shelf cards), the O01 community photo and the H01 host hero stay photographic: they show **which café**, while illustrations show **what to do**. H05 Starter kit gets `host-setup.svg`, because that screen explains the props, not the venue.

## 6. Icons

Add to the library (24 px grid, 2 px stroke, round caps, no fills; files in `assets/icons/proposed/`):

| Icon | Why | Where |
|---|---|---|
| `ss-nfc-plate` | The physical plate (rounded square + 3 waves) is what people look for; `tap-nfc` alone is a signal, not an object | H05 kit checklist, G03 details "NFC and QR" row, G04 helper line |
| `ss-shelf-sign` | The A5 sign with the arrow down to the plate | H05 kit checklist, G04 helper line (replaces `info`) |
| `ss-window-sticker` | Round badge in a window | H05 kit checklist, H01 |
| `ss-date-strip` | "Labels out · dates visible" strip on the shelf edge | H05 kit checklist, O04 sharing rules, H08 daily check |

Update:

| Icon | Change | Why |
|---|---|---|
| `ss-tap-nfc` | 4 waves → 3 waves | Matches the plate's core and the illustration |
| `ss-community-shelf` | Redrawn as the host's two-tier cabinet with the plate at the lower right | Matches V2 "The shelf" and the illustrations; still reads at 16 px in map clusters |

Keep `ss-phone-tap`, `ss-qr-code` and `ss-shelf-code` as they are.

H05 Starter kit lists five parts as text pills ("Shelf · Sign · NFC plate · QR sticker · Window sticker"). Give each checklist row its icon: `community-shelf`, `shelf-sign`, `nfc-plate`, `qr-code`, `window-sticker`.

## 7. Design-system additions (`docs/design-system.md`)

- New section **7b. Illustration**: the drawing rules and the patch-meaning table from `assets/illustrations/README.md`.
- Tokens: `--size-illus-sm: 120px` (empty states), `--motion-nfc-loop: 4s` (idle teaching loop), `--motion-drop: 450ms` (item drop). Existing `--size-illus` (160 px), `--motion-slow` and the 1.2 s scan stay.
- Add the 4 new icons to §7's icon set and the "where each icon goes" table.

## 8. Not covered yet

G05 camera frame, G06a "Reading your photo" (could reuse the item drawings later), H07 counter camera, G09 lock-screen push, O02 benefit rows (icons are enough).
