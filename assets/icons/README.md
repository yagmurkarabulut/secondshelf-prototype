# SecondShelf icons v2.0

68 rounded line icons for the SecondShelf prototype. The 12 icons from the reference sheet are redrawn softer, and 56 icons are added for the app's screens, messages and states.

## Style
- 24 × 24 grid, about 2px padding
- 2px stroke, **round caps and joins**, no fills
- Softer than v1: larger corner radii (2–4.5px), rounded joins on every corner, curved tips on pins, hearts and bags
- 16px use: 1.5px stroke for dense icons (`filter`, `qr-code`, `shelf-full`, `dashboard`)
- Always inside a 44 × 44px target; always with a visible label when the icon carries meaning

## Files
| Path | Use |
|---|---|
| `sprite.svg` | **Use in the app.** `<svg class="icon"><use href="assets/icons/sprite.svg#ss-done"/></svg>`; colour comes from CSS `color` |
| `svg-currentcolor/` | Single files with `stroke="currentColor"`, for code |
| `svg/` | Single files in Pantry Green `#1F3D2B`, **for Figma** (Figma imports `currentColor` as black) |
| `icons.json` | Name, id, label, description, category |
| `preview.html` | Browsable preview with a colour switch for the icon tokens |
| `png-preview/contact-sheet.png` | All icons at 48px and 24px |

## Colour
Set `color` with the icon tokens from `docs/design-system.md`:
- `--icon-primary` (default)
- `--icon-secondary`
- `--icon-tertiary`
- `--icon-accent`
- `--icon-reward`
- the status tokens

## Sets
- **Reference (12):** community-shelf, sealed-food, pickup-bag, community-care, saved-food, filter, tap-nfc, done, paused, needs-attention, location, continue
- **Navigation (13):** home, map, list, coupon, profile, back, chevron-left/right/down/up, close, more, dashboard
- **Actions (15):** search, sort, plus, minus, edit, remove, undo, retry, camera, photo, qr-code, shelf-code, phone-tap, switch-role, share
- **Food and shelf (10):** shelf-full, venue, coffee, package, tin, pasta, best-before, sealed-badge, travel, calendar
- **Status and feedback (8):** info, help, pause, notification, reminder, checkbox, checkbox-empty, new
- **Rewards and impact (4):** rescue-bonus, impact, thank-you, redeem
- **Host and steward (6):** shelf-check, staff, agreement, starter-kit, activity, verified

## Where they go
| Place | Icon |
|---|---|
| Tab bar (consumer) | home · map · coupon · profile |
| Tab bar (host) | dashboard · shelf-check · redeem · profile |
| Home: Leave food / Find food | sealed-food / search |
| G01 travel prompt | travel |
| G04 / R04 / H05 tag tap | phone-tap (instruction), tap-nfc (button), qr-code and shelf-code (fallbacks) |
| G05 photo | camera, photo (sample photo) |
| G06 item list | edit, remove, undo, plus/minus (stepper), best-before, sealed-badge |
| G07 / G08 rewards | thank-you, coupon, rescue-bonus |
| G09 rescue alert | notification + saved-food |
| G11 monthly impact | impact |
| R01 / R02 search | search, filter, sort, list / map |
| R03 listing | best-before, sealed-badge, venue, location, paused (hours) |
| R05 pickup | checkbox / checkbox-empty |
| Report | needs-attention |
| H01–H05 onboarding | community-shelf, agreement, verified, starter-kit |
| H06 dashboard | activity, staff |
| H08 daily check | shelf-check, reminder, pause, shelf-full |
| Status labels | done (success) · paused (waiting) · needs-attention (problem) · info |
| New shelf highlight | new |

## Import into Figma
1. Drag every file from `svg/` onto a Foundations page.
2. Select them all → **Create multiple components**.
3. Rename `ss-` to `Icon/` with Rename (Cmd/Ctrl + R).
4. Optional: bind each stroke to a colour variable (`icon/primary`).
