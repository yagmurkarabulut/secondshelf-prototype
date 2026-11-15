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
| Q14 | Strings needed for states that no frame or spec shows | NFC card, inputs, empty states, H04, H06, H08 | "Scanning…", "Tag not found", "Use sample QR code", "Shelf code not found", "No coupons yet", "Choose Keep or Remove", "Verified", "Needs info", donor ref "Donor A7". **16 Nov:** the copy from the 15 Nov frames is listed under "Q14 update" below | Open: please confirm or replace |
| Q15 | Three tokens were missing: tint on dark, sheet scrim, focus ring on dark | G04, bottom sheets, focus | Added to `docs/design-system.md` §10b as **[NEW]** | Open: confirm |
| Q16 | `[FRAME]` Frame vs spec wording: G04 says "Scan the shelf QR instead" / "Type the shelf code" | G04, R04 | Spec wording kept: "Scan the QR code instead" / "Type shelf code" | Spec wins |
| Q17 | M02 frame impact caption "picked up by neighbours" vs spec "saved by neighbours" | Impact card | Spec wording kept: "saved by neighbours" | Spec wins |
| Q18 | G08 frame coupon line "after your drop-off on 23 Oct" contains a real date | Coupon ticket | Date dropped: "Café Daisy · after your drop-off" (no real dates on coupons, CLAUDE.md §12) | Open |
| Q19 | Step header: frames put the title left and "Step n of 3" right over a segmented bar; §8 says centred overline | Step header | Frame layout kept (title left, step right, one bar segment per step); overline style and Terracotta 500 fill from §8 | Frame wins on layout |
| Q20 | G05 frame viewfinder is dark; §8 says `surface-subtle` | Photo capture frame | `surface-subtle` (design system wins on styling) | Design system wins |
| Q21 | Home action-card descriptions come from M01-v2: "Pass on sealed food you won't eat" / "Find free food at shelves near you". Is "free food" fine under §7? | Action cards | Frame text kept | Open |
| Q22 | App icon: no logo yet (Q6) | Home-screen icon | `community-shelf` icon in Paper on Pantry Green | Open (follows Q6) |

## Build notes (phase 2: Scenario A, giver flow, 10 Nov)

| # | Question | Where it shows up | Prototype now | Status |
|---|---|---|---|---|
| Q23 | `[FRAME]` G03 point card has no frame | G02 map, `#/point/:id` | Simplest version from US-02: a card over the map (and the same content as a page from Home): marker, distance · hours, availability chip, "NFC tag and QR code", "Sealed, shelf-stable, within date", **Leave food** (disabled on a Full shelf). "NFC tag and QR code" is new copy | Open: frame needed |
| Q24 | `[FRAME]` G06a Reading and G06c Edit / add item have no frames | G06a, G06c | G06a = step header + photo with "Reading your photo" pill (1.5 s). G06c = bottom sheet with Item name, Best before (MM/YYYY), Quantity; buttons "Save" / "Add item"; name and best-before required | Open: frame needed |
| Q25 | Map: the frame shows 32 unnumbered pins and "32 locations in this area" | G02 | Only the 3 sample shelves, numbered; the count pill counts what is shown ("3 locations in this area"). "Nearby" filter = within 1 km (assumed) | Open: how many sample shelves, and the Nearby distance |
| Q26 | Pizza Nonna's closing time is not in the spec or frames (cut off in M01) | Home carousel, map list, point card | Hours line left out for Pizza Nonna | Open (Q2) |
| Q27 | Brenda's start state | Home, Coupons | 4 items already on shelves (from M01-v2), one active coupon (Pizza Nonna, code SS-4817) and one used (Café Lumi, SS-4790), so the wallet reads Active (2) / Used (1) after the test drop-off, as in the G08 frame. New coupon uses the frame code SS-4821 | Open: confirm sample data |
| Q28 | G04 frame vs spec | G04 | Spec wording for the instruction ("Hold your phone to the tag on the shelf") instead of the frame's longer line; spec **Tap shelf tag** button added; Close (not Back) on step 1 per the Step header recipe. QR fallback uses **Use sample QR code** only (no live camera scanning) | Spec wins; confirm QR |
| Q29 | G05 / G06 frame wording | G05, G06 | "Enter items manually" → **Add items manually** (+ spec **Use sample photo**); "Add item / enter manually" → **Add item manually**; check "All 4 items are sealed, shelf-stable and within date" → **All items are sealed and within their date**; tomato soup BB 11/2027 → 08/2027 (spec sample) | Spec wins |
| Q30 | G07 frame has no "How to use your coupon" line (US-06) | G07 | Added: "**How to use your coupon:** Show the counter code. It is not the shelf QR." (G08 copy). Rescue Bonus uses the kit card (Paper, gold bar) instead of the frame's Leaf panel | Spec / kit win |
| Q31 | G08d: kit calls it a bottom sheet, the frame is a full page | G08d | Full page (frame wins on layout), route `#/coupons/code/:id`, Done goes back | Frame wins |
| Q32 | G08 v2 frame: pill tabs, "Rescue Bonus pending" dark button, "picked up · recorded" | G08 | Kit segmented control; no button-looking bonus status; text "n of N picked up · pending". Order: newest coupon, its Rescue Bonus, older coupons, info note | Kit / spec win |
| Q33 | M02 Me is not in phases 1–3, but the tab bar links to it | Tab bar | `#/me` falls back to Home for now | Open: build M02 next? |
| Q34 | Segmented control: kit says segments ≥ 40px, Definition of done says tap targets ≥ 44px | G02 toggle, G08 tabs | 44px | Resolved in favour of 44px |
| Q35 | M01-v2 frame vs spec | M01 | "Leave" / "Take" (Fraunces, arrow icons) → **Leave food** / **Find food** (`section` type, no arrows: not in the icon set); "Shelves near you" → **Points near you**; "Plain flour" → **All-purpose flour**; chips "Has space" / "Full today" → "4 spots" / **Full shelf** | Spec / kit win |

## Build notes (interactive map, 10 Nov)

The map tab now uses **Leaflet 1.9.4** + **Leaflet.markercluster 1.5.3** (open source, inlined in `index.html`, no CDN, no tile server, no API key) on a **mock neighbourhood** drawn in the kit's map tokens. Interactions: drag to pan, pinch / double-tap / wheel / keyboard zoom, +/− buttons (disabled at the limits), "Show my location", clustering, tap a marker for the point card, food and place search with suggestions, filter chips and filter sheet, Map / List toggle, count of shelves in view. Swapping to real map tiles later is a one-line change (a tile layer instead of the SVG overlay) once Q2 picks the cities.

| # | Question | Where it shows up | Prototype now | Status |
|---|---|---|---|---|
| Q36 | Generated sample shelves: 29 fictional food places (cafés, bakeries, bistros, delis, pizzerias, tea room, canteen, grocers) next to the 3 spec venues, 32 in total as in the G02 frame. Each has a type, hours, free spots, status (3 full, 2 paused, 2 closed) and 1–4 shelf-stable packs | Map, list, search, point card | Names and data are generated (seeded, so they are the same on every phone). The 3 spec venues keep their spec distances. Home still shows only the 3 spec venues | Open: OK for tests? Replace per city with Q2 |
| Q37 | Food catalogue for search (16 categories, shelf-stable only, e.g. Pasta, Pasta sauce, Rice, Canned soup, Canned fish, Canned beans, Crackers, Flour, Oats, Lentils, Bread, Biscuits, Cereal, Tea, Coffee, Jam) | Map search, list meta ("Penne 1 kg · 200 m · …") | Typing "pa" suggests Pasta, Pasta sauce (US-10) and the place Organic Pantry; picking a food filters the map and list ("12 shelves have pasta") | Open: confirm categories |
| Q38 | Clusters (several shelves close together) have no recipe; a plain number would break "Numbers identify shelves, not item counts" | Map | Paper pill with Pantry Green outline, `community-shelf` icon and the count; read out as "n shelves here, zoom in"; explained in the filter sheet legend | Open: confirm style |
| Q39 | "Nearby" = within 1 km; "Open now" hides closed shelves; "Has space" hides full, paused and closed shelves | Filter chips | As described | Open: confirm |
| Q40 | The search filter button had no behaviour in the spec | G02 | Opens a "Filters" bottom sheet: the three filters and the marker legend | Open |

## Build notes (16 Nov: hi-fi fill-gaps build, branch `claude/hifi-fill-gaps`)

Found while completing every screen for the Tuesday tests. Conflict rules (CLAUDE.md §11): the frame wins on layout, `docs/design-system.md` on styling, CLAUDE.md on behaviour and wording. Nothing here is decided; each row says what the prototype shows now.

| # | Question | Where it shows up | Prototype now | Status |
|---|---|---|---|---|
| Q41 | O01 headline and intro, O02 rows are new copy from the 15 Nov frames | O01, O02 | Frame copy: "Food that’s still good, passed on.", "Givers and takers never need to meet." and the four O02 rows | Open (listed under Q14) |
| Q42 | O03 frame offers two role cards (Leave and find food / Host a shelf); F-01 says give / take / host | O03 | Frame layout (two cards). Selected = Leaf fill + 2px brand border + filled radio + "Selected" label (not colour alone). Host a shelf → H01 after O04 | Frame wins on layout; confirm |
| Q43 | O04 frame says "Cooked leftovers or homemade food"; CLAUDE.md §7 forbids "leftovers" | O04 | "Cooked or homemade food"; milk and juice under "Not on the shelf" | Spec wins on wording |
| Q44 | Scenario B persona: spec gives only "Jonas" | M01, M02 | "Jonas", initials "J", jonas@example.com, nothing on shelves, no coupons | Open |
| Q45 | Which NFC pattern to mock? iPhones show Apple’s own "Ready to scan" sheet; Android shows nothing. Platform not decided | G04, R04, H05 | The same on-screen tap card on every phone (no OS sheet mock) | Open |
| Q46 | Effect of "Not here?" reports and of no-app pickups (X01) on the giver’s Rescue Bonus | R05, R07, X01, G10 | Reports grey the item but don’t change the bonus. X01 pickups update the shelf and host log but don’t move the bonus (Instructor point 10 trade-off) | Open |
| Q47 | "Ignore items already logged on that shelf" when reading the photo (R2, Gdynia) | G06a, G06 | Not built: the photo always proposes the scripted 3 items | Open |
| Q48 | Coupon withdrawn: does the giver keep it? (R7) | G08 | Simulate only: the coupon moves to Used with a "Withdrawn" chip and "The steward removed items that didn’t meet the rules"; Show code disabled | Open |
| Q49 | G10 frame shows "5 days left" per item; L12 removes the 7-day wording | G10, M01 | "On the shelf n days" / "Still on the shelf", no countdown | Open |
| Q50 | R05 frame adds a required "I checked the actual pack’s seal and date" checkbox; R04 already starts with the seal-and-date card | R05 | Not added; Confirm pickup needs one ticked item (US-12) | Spec wins on behaviour; confirm |
| Q51 | H01 funding variants: the three options from Q1 aren’t written down in the repo | H01, host FAQ | "Option 1 / 2 / 3 · [To be agreed]" + "Funding and liability are still being decided." | Open: add the three options |
| Q52 | H02 defaults: capacity, reminder time "from opening hours", extra stewards | H02 | Capacity 10, reminder 09:00, stewards Anna (owner) and Brenda; Add staff opens a name sheet | Open |
| Q53 | Host onboarding step count: frames say "Step n of 6" (the H05b frame says "Step 3 of 3"); merging stages is Q5 | H01–H05 | "Step n of 6" everywhere; H05b = Step 6 of 6. Stages not merged (L18 partial) | Frame wins on layout; Q5 open |
| Q54 | Keep / Donate / Remove: add a Donate option to the daily check (Prague, Gdynia)? Depends on where donated food goes | H08 | Not built: Keep / Remove (US-23) | Open |
| Q55 | X01 "I took something" web page isn’t in CLAUDE.md | X01 | Built from the frame; reachable only from the moderator menu and `#/screens`; title "What did you take?" (frame) | Open: team decision |
| Q56 | Button labels in the 15 Nov frames differ from the spec: H01 "Start", H03 "Sign agreement", R03 "I’m at the shelf", H05 "Activate shelf / go live", "Scan the shelf QR instead" | H01, H03, R03, H05 | Spec wording: Become a host, Agree and continue, I’m there, Tap shelf tag (shared NFC component), Scan the QR code instead | Spec wins on wording |
| Q57 | Map Back order | G02, R01 | In-app Back / Esc: close details → step the sheet down one height → previous screen. Browser / Android back leaves the map directly (details add no history entry) | Open: OK for tests? |
| Q58 | "Location details at half height": the G03 frame shows the details sheet over ~72% of the screen | G03 | Details open at 80% of the map area and scroll; "On this shelf" expands to full height | Frame wins on layout |
| Q59 | Host persona: frames show "Anna (owner)"; Scenario C keeps Brenda | H06, H08 | Venue owner Anna; stewards Anna and Brenda; the account is Brenda | Open |
| Q60 | The H07c frame shows used, expired and not found on one screen | H07c | One result per check, each with its own way forward (Scan another code / Type it again) | Open |
| Q61 | "Pending" coupon state has no trigger in the spec | G08 | Pending is shown by the Rescue Bonus line "n of N picked up · pending"; the "Pending" coupon chip exists only in the component gallery | Open |
| Q62 | H03c brief says "Continue (demo)"; Q4 says simulated steps aren’t labelled demo for participants | H03c | "Continue" | Follows Q4 |
| Q63 | Simulated timings: operator verification and network steps | H04, buttons | Verification pending → verified after 1.5 s; loading buttons 600–800 ms | Open |
| Q64 | Real brands, photos and addresses in the 15 Nov frames (Starbucks, "Palm Springs St 112, Munich") | G02, G03, R03 | Not used: sample venues and labelled photo placeholders | Spec wins (Q2, Q9) |
| Q65 | O01 "Log in" | O01 | Placeholder: goes to Home as the current demo user | Open (Q7) |
| Q66 | Café Daisy shelf contents (H06 frame: 6 items, 4 spots) | All | Capacity 10: Fusilli pasta (Brenda’s), Tomato soup ×2, Crackers (7 days, flagged), Rice, Chickpeas (past date 10/2026, flagged). Café Lumi full (6/6); Pizza Nonna 3/6 | Open (Q27) |
| Q67 | H06b until-when options come from the frame ("Today, 14:00") | H06b | Frame options kept | Open |
| Q68 | Host dashboard title: spec says "Home", the frame shows the venue name | H06 | Overline "Home" over the venue name; tab "Dashboard"; page title "Home" | Open |
| Q69 | Directions: no maps integration | G03, R03 | Toast "Directions to … would open in your maps app." | Placeholder |
| Q70 | Tokens added in this build | All | `--motion-stagger`, `--motion-slow`, `--shadow-card-pressed`, `--size-hero`, `--size-illus`, `--size-result-icon`, `--size-radio`, `--size-chart`, `--size-photo-sm` (design-system §10b [NEW]) | Open: confirm |
| Q71 | Food alert food and distance are fixed | M02, R01b | M02 toggle saves "Pasta within 1 km"; R01b Notify me saves the searched food within 1 km | Open (Q8) |
| Q72 | How the team times tasks (stopwatch, recording or the app log) | Moderator menu | Small event log: task start/done for A (Leave food → G07), B (Find food → R06), C (H08 Start → H08b); last durations and JSON export in the moderator menu only | Open (Kathy) |
| Q73 | G01 frame dims Home behind the travel prompt; hand-off §3.1 says overlay banners never cover the tab bar | G01 | No dim; the card slides down over the top of Home | Open |
| Q74 | M02 frame: dark green impact card and light host-mode card | M02 | Design system: Leaf impact card, Ink host-mode card | Design system wins |
| Q75 | H07 frame camera box is dark | H07 | Oat placeholder with a dashed frame (Ink is reserved for markers, count pill and the host-mode card) | Design system wins |
| Q76 | Browse mode: what happens on Leave food? | M01 | Sheet "Finish setting up first" → O02 (new copy) | Open |
| Q77 | Monthly coupon cap trigger | G07b | Simulate only (the cap value is To be agreed) | Open (Q1) |
| Q78 | R01b no-results layout on the map sheet | R01b | Shown inside the sheet at half height; count and Map/List switch hidden while it shows | Frame wins on layout |
| Q79 | Merging host onboarding stages (Prague P2) | H01–H05 | Not merged: six stages with a Step header and no repeated content (L18 = partial) | Open (Q5) |

### Q14 update: new copy proposed in the 15 Nov frames (used in the build, please confirm or replace)
- **O01–O04**: "Food that’s still good, passed on." · "Leave sealed food you won’t eat on a café shelf near you, or find something you can use." · "Shelves in local cafés, open to everyone. Givers and takers never need to meet." · the four O02 rows · "How will you use SecondShelf?" · "You can change this later in Me." · "Leave and find food" / "Host a shelf" card texts · "Hosts can still leave and find food." · the Yes / Not on the shelf lists · "I’ll follow the sharing rules and terms" · "Start using SecondShelf" · "Tick the box to continue".
- **Scenario A**: G01 body "Café Daisy, 200 m on your way to the station, has space for 4 items. Pass on what you won’t eat." · G03b "This shelf is full right now / Space opens when someone picks up food. Try another shelf for today." · "Nearest shelf with space" · "Go here" · "Leave food is off while the shelf is full" · "Back to locations" / "Back to results" · "View drop-off conditions and rules" · G07b "You’ve reached this month’s coupon limit …" · "The Rescue Bonus still grows as people take your food." · G09b "Picked up at Café Daisy · just now" · G10 "A bigger coupon unlocks as people take your food." · "Pickups made without the app may not be counted." · G11 "Your November", "Items passed on by week", the buying tip.
- **Scenario B**: R01b "No baby food nearby right now / We can let you know when someone leaves some on a shelf within 1 km." · "Notify me" · "Clear filters" · R03 "On this shelf now" · "Stock may change" · R04 "Check, then tap" · "Inspect the real pack. If something is wrong, leave it and report it." · "The seal is unbroken" · "The date is fine" · R04c "Nothing was taken or logged yet." and the two help lines · R06 "Enjoy your food. You saved n items that are still good." · "Map updated · Café Daisy now shows n items" · "Recorded pickups may not include app-free pickups." · "Something wrong? Report it" · R07 "What’s wrong?" · reasons · "Which item?" · R07b "Thanks for telling us" / "The café’s shelf steward will check the shelf. The listing now shows the item as missing."
- **Scenario C**: "A shelf for everyone, at your café." · the three benefits · "Use the café’s registration details. Local rules depend on the operator." · "Care for the shelf, together." (fixed string) · "Operator verification comes before food arrives …" · H03c "Application sent", "Under review", timeline labels · H04 "We’re checking your café." · "This screen shows progress only. It is not a verification guarantee." · H05 "A shelf that explains itself." · "All five parts" · the four kit lines · "Kit is in place" · "Tap to go live" · H05b "Couldn’t link the tag", "Your shelf isn’t live yet. Nothing else is lost." · "Café Daisy is live." · "How people see you" · "Reminders follow your opening hours …" · H06 "Shelf check due at 09:00 / About 2 minutes" · "Coupon cap this month: To be agreed" · H06b "People see “Paused” on the map. Pickups are still allowed." · reasons · H07 "Scan the code on the guest’s phone, or type it." · H07b "Valid coupon" · "Give the discount, then mark it as redeemed so it can’t be used twice." · H07c "Already used" · H08 "Item missing? Mark it" · "Decide on every item to submit" · H08b "Shelf checked." · "Saved to the food-safety record." · "Hand tomorrow’s check to another steward" · H08c "Yesterday’s shelf check was missed …" · X01 page texts.
- **New in this build (no frame)**: "Finish setting up first" sheet · "Directions to … would open in your maps app." · "Who pays for the thank-you coupons? Three options are still open." · "Sort: nearest" / "Open now first" / "Best-before date" · "Not here?" toast "The shelf steward will be told" · "Reported missing" · "Mark an item missing" · "Tomorrow’s check" picker · X01 done "Thanks. Enjoy your food." · Help and FAQ placeholders · "Switch to leave and find" (host-mode card in host mode).
