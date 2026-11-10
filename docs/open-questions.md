# Open questions

Decisions the build needs but the team has not made yet. Claude Code adds to this list instead of inventing values.

| # | Question | Where it shows up | Owner | Status |
|---|---|---|---|---|
| Q1 | Coupon value, expiry, monthly cap and who funds them (Nino's three funding options) | G07, G08, H07, coupon card | Team | Open: UI shows "To be agreed" |
| Q2 | Venue name and map area per test city (Prague, Tallinn, Tbilisi) | Map, listings, sample data | Each member | Open: "Café Daisy" placeholder |
| Q3 | Hosting: single HTML link or GitHub Pages | Delivery | Yağmur | **GitHub Pages** (one self-contained `index.html`) |
| Q4 | Label simulated steps (NFC, photo AI) as "demo" for participants? | G04, G05, R04 | Team | Open |
| Q5 | Merge redundant onboarding screens (Prague P2) | O01–O04, H01–H03 | Team | Open: decide from frames |
| Q6 | Logo / master identity | Header, onboarding | Team | Open: Fraunces Bold text wordmark for now |
| Q7 | Accounts: required for givers and hosts, optional for receivers? (CLAUDE.md §9) | Login, coupons, alerts, host | Team | Recommended; prototype uses a fixed demo user |
| Q8 | Food alerts (new in M02 frame): keep in this test round? | M02, banner | Team | Added as F-24, simulated |
| Q9 | Real photos for venues and avatar (frames use stock-like photos) | M01, M02 | Team | Labelled placeholders in the prototype |
| Q10 | Host screen codes: the mocks number H01–H07 (H06 = activate, H07 = shelf is live), the spec uses H06 = dashboard, H07 = redeem, H08 = daily check | Host flow | Team | Spec codes kept; mock H05–H07 are all inside spec H05 |
| Q11 | R05 mock title "What did you take" vs spec "What are you taking" | R05 | Team | Spec wording kept (the user is still at the shelf) |

## Frame vs kit decisions (10 Nov, main navigation frames)

| Frame | Difference | Resolution |
|---|---|---|
| All | Grey text `#95918E` (3.1:1) | `text-secondary` / `text-tertiary` |
| M01 | "No spot available" white on Terracotta 500 (4.39:1, fails) | `surface-unavailable` = Terracotta 700 (5.84:1) + `shelf-full` icon |
| M01, G02, M02 | Gold icons on Forest (2.5:1) and Paper | Gold only on Ink; Leaf on Forest; gold on Paper only for search and rewards |
| G08 | "€2 off", "Valid until 22 Nov 2026" | "to be agreed" until Q1 is decided; gold band added to the ticket |
| G08 | "Only 2 more items to go!" | "2 of 4 picked up · pending" |
| M01 | "Find food" vs spec "Take food" | Spec now uses **Find food** |
| G02 | Unnumbered markers, no list view | Numbered markers, legend, Map / List toggle |
| M02 | Help and FAQ with heart icon | `help` icon |
| M01 | Title Case item names | Sentence case |

## Mocks vs kit decisions (10 Nov, 20 hi-fi mocks → UI Kit v0.5)

| # | Mock (airy) | Kit v0.4.1 | Decision |
|---|---|---|---|
| 1 | Cream `#F6F1E7` | `#F4EDE1` | **Mock**: `cream-100` = `#F6F1E7` |
| 2 | Cool Stone `#5E625B` | Warm Stone `#5C554C` | **Kit** (warm) |
| 3 | Pantry Green titles | Ink titles | **Mock**: titles `text-brand` |
| 4 | DM Sans | Rubik | **Kit**: Rubik |
| 5 | Pill buttons | 12px buttons | **Mock**: pills; inputs stay 12px |
| 6 | Clay closing action | Terracotta 700 | **Kit**: Terracotta 700 |
| 7 | Clay step progress | none | **New**: Terracotta 500 on an Oat track (StepHeader) |
| 8 | Light coupon, no gold | Forest ticket + gold band | **Mix**: Paper ticket + 6px gold band + Ochre 800 icon |
| 9 | Rescue Bonus status looks like a button | Bar + text | **Kit** + gold fill |
| 10 | Oat segmented track | Sand | **Mock**: Oat |
| 11 | Light Home cards, "Take food" | Ink / Forest, "Find food" | **Mock style** + terracotta / ochre tiles; label **Find food** |
| 12 | Light impact / host cards | Forest / Ink | **Mock** for impact (Leaf); host mode stays Ink |
| 13 | "Full today" soft chip | "No spot available", Terracotta 700 | Terracotta 700, label **"Full shelf"** |
| 14 | Unnumbered pins | Numbered markers | **Kit** |
| 15 | Round stepper | Square-ish stepper | **Mock**: round, 44px |
| 16 | Other help glyph | `help` | **Kit** |
| 17 | Flat search | Search with shadow | **Mock**: flat + `border-strong` outline + gold icon |
| 18 | Placeholder-only fields | Label above | **Kit** |
| 19 | Green Show button | Dark (Ink) button | **Mock**: Dark button removed |

## Build notes (phase 1: tokens and components, 10 Nov)

Found while building the component gallery (`#/components`). Each row says what the prototype does now; change it when the team decides.

| # | Question | Where it shows up | Prototype now | Status |
|---|---|---|---|---|
| Q12 | Labels for coupon states other than active, and for Rescue Bonus complete / expired, are not in the spec | Coupon ticket, Rescue Bonus card | Chips "Pending", "Used", "Expired"; bonus "4 of 4 picked up" and "2 of 4 picked up · expired" | Open |
| Q13 | Map marker states full / paused / closed have no recipe in §8 | Map marker, legend | Full = Terracotta 700 fill + `shelf-full` badge; paused = dashed Paper + `paused` badge; closed = Oat fill + `close` badge | Open |
| Q14 | Strings needed for states that no frame or spec shows | NFC card, inputs, empty states, H04, H06, H08 | "Scanning…", "Tag not found", "Use sample QR code", "Shelf code not found", "No coupons yet", "Choose Keep or Remove", "Verified", "Needs info", donor ref "Donor A7" | Open: please confirm or replace |
| Q15 | Three tokens were missing: tint on dark, sheet scrim, focus ring on dark | G04, bottom sheets, focus | Added to `docs/design-system.md` §10b as **[NEW]** | Open: confirm |
| Q16 | `[FRAME]` Frame vs spec wording: G04 says "Scan the shelf QR instead" / "Type the shelf code" | G04, R04 | Spec wording kept: "Scan the QR code instead" / "Type shelf code" | Spec wins |
| Q17 | M02 frame impact caption "picked up by neighbours" vs spec "saved by neighbours" | Impact card | Spec wording kept: "saved by neighbours" | Spec wins |
| Q18 | G08 frame coupon line "after your drop-off on 23 Oct" contains a real date | Coupon ticket | Date dropped: "Café Daisy · after your drop-off" (no real dates on coupons, CLAUDE.md §12) | Open |
| Q19 | Step header: frames put the title left and "Step n of 3" right over a segmented bar; §8 says centred overline | Step header | Frame layout kept (title left, step right, one bar segment per step); overline style and Terracotta 500 fill from §8 | Frame wins on layout |
| Q20 | G05 frame viewfinder is dark; §8 says `surface-subtle` | Photo capture frame | `surface-subtle` (design system wins on styling) | Design system wins |
| Q21 | Home action-card descriptions come from M01-v2: "Pass on sealed food you won't eat" / "Find free food at shelves near you". Is "free food" fine under §7? | Action cards | Frame text kept | Open |
| Q22 | App icon: no logo yet (Q6) | Home-screen icon | `community-shelf` icon in Paper on Pantry Green | Open (follows Q6) |
