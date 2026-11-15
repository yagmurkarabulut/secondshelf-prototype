# Review status: SecondShelf hi-fi prototype (16 Nov build)

Branch `claude/hifi-fill-gaps` (from `claude/map-sheet-v06`). Test day: Tuesday 17 Nov.
Open any screen from the hidden index `#/screens` (it prepares the demo state first). Moderator menu: tap the movable ··· button (drag it anywhere; it snaps to an 8 px grid and avoids buttons), or long-press (800 ms) the greeting / wordmark / venue title.
Screenshots: `docs/screenshots/` (390 × 844, one per screen and state, plus four contact sheets `contact-*.png`).

## A. Screen coverage

Generated from the same registry the app uses for `#/screens` and the moderator "Jump to screen" list.

| Code | Name | Route | Frame used | Status | Notes |
|---|---|---|---|---|---|
| **Onboarding** | | | | | |
| O01 | Welcome | `#/welcome` | `O01-welcome` | Built from frame | Questions: Q5, Q6, Q41 |
| O02 | How it works (Step 1 of 3) | `#/how` | `O02-how-it-works` | Built from frame | Questions: Q5, Q41 |
| O03 | Choose how you use it (Step 2 of 3) | `#/role` | `O03-choose-how-you-use-it` | Built from frame | Questions: Q5, Q42 |
| O04 | Sharing rules (Step 3 of 3) | `#/rules` | `O04-sharing-rules` | Built from frame | Questions: Q43 |
| O04 | Sharing rules, read-only (from Me) | `#/rules?view=1` | `O04-sharing-rules` | Built from frame |  |
| O05 | Location permission | — | — | Not built (P3, not in CLAUDE.md) | Questions: P3, not in CLAUDE.md |
| O06 | Notification permission | — | — | Not built (P3, not in CLAUDE.md) | Questions: P3, not in CLAUDE.md |
| **Main** | | | | | |
| M01 | Home (Brenda, giver) | `#/home` | `M01-home-v2` | Built from frame | Questions: Q21, Q35 |
| M01 | Home (Jonas, receiver, empty state) | `#/home?as=jonas` | `M01-home-v2` | Built from frame | Questions: Q44 |
| M02 | Me | `#/me` | `M02-me-v2` | Built from frame | Questions: Q7, Q8, Q17 |
| **Scenario A · giver** | | | | | |
| G01 | Travel prompt (overlay on Home) | `#/home?sim=travel` | `G01-travel-prompt` | Built from frame | Questions: Q14 |
| G02 | Map, Leave mode (sheet at half) | `#/map` | `G02b-map-half` | Built from frame | Questions: Q25, Q36, Q38, Q39 |
| G02 | Map, sheet at peek | `#/map?sheet=peek` | `G02a-map-peek` | Built from frame |  |
| G02 | Map, list at full height | `#/map?view=list` | `G02c-map-full` | Built from frame |  |
| G03 | Location details in the sheet | `#/map?shelf=1` | `G03-location-half` | Built from frame | Questions: Q23 |
| G03 | Point page (from Home) | `#/point/1` | `G03-location-half` | Built from frame | Questions: Q23 |
| G03b | Point full | `#/point/2` | `G03b-point-full` | Built from frame | Questions: Q13 |
| G03b | Point paused (same layout, reason + reopening) | `#/point/10` | `G03b-point-full` | Built from frame | Questions: Q13 |
| G04 | Tap the tag (idle → scanning → found) | `#/give/tap?shelf=1` | `G04-tap-the-tag` | Built from frame | Questions: Q4, Q28, Q45 |
| G04c | Tag not found | `#/give/tap?shelf=1&fail=1` | `G04-tap-the-tag` | Built without frame | Questions: Q14, Q45 |
| G05 | Photograph your items | `#/give/photo` | `G05-photograph-your-items` | Built from frame | Questions: Q20, Q29 |
| G05 | Photo unreadable | `#/give/photo?error=1` | `G05-photograph-your-items` | Built without frame | Questions: Q14 |
| G06a | Reading your photo | `#/give/reading` | `G05-photograph-your-items` | Built without frame | Questions: Q24 |
| G06 | Check items | `#/give/items` | `G06-check-and-place` | Built from frame | Questions: Q29, Q47 |
| G06c | Edit or add item (sheet) | `#/give/items?add=1` | `G06-check-and-place` | Built without frame | Questions: Q24 |
| G07 | Thanks for sharing | `#/give/done` | `G07-thanks-for-sharing` | Built from frame | Questions: Q1, Q30 |
| G07b | Monthly coupon limit reached | `#/give/done?cap=1` | `G07b-monthly-coupon-limit-reached` | Built from frame | Questions: Q1 |
| G08 | Coupons | `#/coupons` | `G08-coupons-v2` | Built from frame | Questions: Q1, Q12, Q32 |
| G08 | Coupons, used / expired / withdrawn | `#/coupons?tab=used` | `G08-coupons-v2` | Built from frame | Questions: Q12, Q48 |
| G08d | Show at the counter | `#/coupons/code/c1` | `G08d-show-at-counter` | Built from frame | Questions: Q31 |
| G09 | Rescue push on the lock screen | — | — | Not built (P3, not in CLAUDE.md) | Questions: P3, not in CLAUDE.md |
| G09b | Rescue banner (overlay on Home) | `#/home?sim=rescue` | `G09b-rescue-banner-in-app` | Built from frame | Questions: Q12 |
| G10 | Rescue Bonus | `#/bonus` | `G10-rescue-bonus` | Built from frame | Questions: Q1, Q49 |
| G11 | Monthly impact | `#/impact` | `G11-monthly-impact` | Built from frame | Questions: Q14 |
| **Scenario B · receiver** | | | | | |
| R01 | Find food (map, search focused) | `#/map?find=1` | `G02a-map-peek` | Built from frame | Questions: Q37, Q39 |
| R01b | No results | `#/map?find=1&food=Baby%20food` | `R01b-no-results` | Built from frame | Questions: Q14 |
| R02 | Search results (list) | `#/map?find=1&view=list&food=Pasta` | `R01b-find-food-list` | Built from frame | Questions: Q37 |
| R03 | Shelf listing | `#/take/point/1` | `R03-shelf-listing` | Built from frame | Questions: Q2, Q14 |
| R03 | Location expanded ("On this shelf") | `#/map?find=1&shelf=1&expand=1` | `R03-location-expanded` | Built from frame |  |
| R04 | Check and tap | `#/take/tap?shelf=1` | `R04-check-and-tap` | Built from frame | Questions: Q45 |
| R04c | Tag not found | `#/take/tap?shelf=1&fail=1` | `R04c-tag-not-found` | Built from frame |  |
| R05 | What are you taking | `#/take/items` | `R05-what-did-you-take` | Built from frame | Questions: Q11, Q50 |
| R06 | Pickup logged | `#/take/done` | `R06-pickup-logged` | Built from frame |  |
| R07 | Report a problem (sheet) | `#/take/point/1?report=1` | `R07-report-a-problem` | Built from frame | Questions: Q46 |
| R07b | Report sent (sheet) | `#/take/point/1?report=sent` | `R07b-report-sent` | Built from frame |  |
| **Scenario C · host** | | | | | |
| H01 | Become a host | `#/host` | `H01-understand-the-service` | Built from frame | Questions: Q1, Q5, Q51 |
| H02 | Venue details | `#/host/venue` | `H02-venue-details` | Built from frame | Questions: Q52 |
| H03 | Host agreement | `#/host/agreement` | `H03-responsibilities` | Built from frame | Questions: Q53 |
| H03c | Application under review | `#/host/review` | `H03c-application-under-review` | Built from frame | Questions: Q14 |
| H04 | Operator verification | `#/host/verify` | `H04-operator-verification` | Built from frame |  |
| H05 | Starter kit | `#/host/kit` | `H05-starter-kit` | Built from frame | Questions: Q10 |
| H05 | Activation tap | `#/host/activate` | `H06-activate-go-live` | Built from frame | Questions: Q10, Q45 |
| H05 | Shelf is live | `#/host/live` | `H07-shelf-is-live` | Built from frame | Questions: Q10 |
| H05b | Activation error | `#/host/activate?fail=1` | `H05b-activation-error` | Built from frame |  |
| H06 | Host dashboard | `#/host/dashboard` | `H06-host-dashboard` | Built from frame | Questions: Q1, Q14 |
| H06b | Pause the shelf | `#/host/pause` | `H06b-pause-the-shelf` | Built from frame |  |
| H07 | Redeem coupon | `#/host/redeem` | `H07-redeem-coupon` | Built from frame | Questions: Q1 |
| H07b | Coupon valid | `#/host/redeem/result?code=SS-4817` | `H07b-coupon-valid` | Built from frame | Questions: Q1 |
| H07c | Coupon already used | `#/host/redeem/result?code=SS-4790` | `H07c-coupon-already-used-or-expired` | Built from frame |  |
| H07c | Coupon expired | `#/host/redeem/result?code=SS-4817&sim=expired` | `H07c-coupon-already-used-or-expired` | Built from frame |  |
| H07c | Coupon not found | `#/host/redeem/result?code=SS-0000` | `H07c-coupon-already-used-or-expired` | Built from frame |  |
| H08 | Daily shelf check | `#/host/check` | `H08-daily-shelf-check` | Built from frame | Questions: Q54 |
| H08b | Check done | `#/host/check/done` | `H08b-check-done` | Built from frame |  |
| H08c | Missed check (banner on H06) | `#/host/dashboard?sim=missed` | `H08c-missed-check` | Built from frame |  |
| H09 | Shelf tab | — | — | Not built (P3, not in CLAUDE.md) | Questions: P3, not in CLAUDE.md |
| H10 | Settings | — | — | Not built (P3, not in CLAUDE.md) | Questions: P3, not in CLAUDE.md (pause, reminder, stewards covered elsewhere) |
| **No-app** | | | | | |
| X01 | "I took something" web page | `#/x/1` | `X01-i-took-something-web` | Built from frame | Questions: Q55 |

**Totals:** 58 screen/state rows built from a frame, 4 built without a frame (G04c, G05 unreadable, G06a, G06c), 0 placeholders, 5 not built on purpose (O05, O06, G09, H09, H10: P3, not in CLAUDE.md).

## B. Critical interaction matrix (hand-off §8)

| Interaction | Normal | Feedback | Alternative | Error |
|---|---|---|---|---|
| **1 Finding and using the NFC tag** | ✓ Tap shelf tag: G04 `#/give/tap?shelf=1`, R04 `#/take/tap?shelf=1` (after the check card), H05 `#/host/activate` | ✓ Pulse rings (idle) → faster rings + "Scanning…" (1.2 s) → tick draws in + 30 ms vibration → auto-advance (600 ms); status is `aria-live` | ✓ **Scan the QR code instead** (sample QR, "The sticker is next to the tag.") and **Type shelf code** sheet on all three screens | ✓ Not found: G04c `#/give/tap?shelf=1&fail=1`, R04c `#/take/tap?shelf=1&fail=1`, H05b `#/host/activate?fail=1`, or Simulate › Tag not found. Card shakes + [30, 60, 30] vibration; Try again / QR / shelf code |
| **2 Confirming food was registered or collected** | ✓ G06 → G07 (`#/give/items`), R05 → R06 (`#/take/items`) | ✓ Loading button, staggered confirmation, Daisy’s count changes everywhere, R06 count-down ("Café Daisy now shows n items"), toasts | ✓ Add item manually / edit sheet (G06c `#/give/items?add=1`); **Not here?** per row and "Not here? Report missing stock" (R05) | ✓ Confirm disabled with a hint; tapping it highlights the sealed check (G06) or the rows (R05). Photo unreadable: `#/give/photo?error=1` or Simulate › Photo unreadable |
| **3 Understanding rewards** | ✓ G07 → G08 → G10 (`#/give/done`, `#/coupons`, `#/bonus`); H07 → H07b (`#/host/redeem`) | ✓ Coupon appears in G08 (Active count +1); Rescue Bonus gold fill animates from old to new value; G09b banner after Simulate › Receiver picked up 2 items | ✓ G08d counter code (`#/coupons/code/c1`); typed code or Use sample code on H07 | ✓ Cap reached G07b (`#/give/done?cap=1`, Simulate › Monthly cap reached); H07c used / expired / not found (`#/host/redeem/result?code=SS-4790`, `…SS-4817&sim=expired`, `…SS-0000`); withdrawn coupon (Simulate › Coupon withdrawn) |
| **4 Completing the steward routine** | ✓ H06 Start → H08 → H08b (`#/host/check`) | ✓ Kept / Removed done states + Undo; open-row count; loading Submit; H08b summary (steward, time, duration, decisions) | ✓ "Item missing? Mark it" sheet; "Hand tomorrow’s check to another steward" picker (H08b); Pause the shelf (H06b) | ✓ Submit blocked until every row is decided, open rows highlighted; missed check H08c (`#/host/dashboard?sim=missed` or Simulate › Missed check) |

All 16 cells ✓.

## C. Lo-fi → hi-fi checklist

| # | Change | Status | Where to see it | What’s missing |
|---|---|---|---|---|
| L1 | Animated NFC tap card, states, haptics, QR + shelf-code fallbacks | ✓ | G04, R04, H05 | Real Web NFC not wired (Q45) |
| L2 | Step order Tap → Photo → Check; photo purpose line; Add items manually | ✓ | G05 | — |
| L3 | Round 44px steppers, instant count change (crossfade) | ✓ | G06, R05 | — |
| L4 | Suggestions under the search, filters + sort, list view, any listing selectable | ✓ | R01, R02 (`#/map?find=1`) | — |
| L5 | Numbered markers + legend "Numbers identify shelves, not item counts"; list rows use the same numbers | ✓ | Map, filter sheet, list | — |
| L6 | Explicit checkboxes, whole-row tap, count in the button | ✓ | R05 | — |
| L7 | Seal-and-date check card before the tap | ✓ | R04 | — |
| L8 | "Café Daisy now shows n items" + live count change | ✓ | R06, map, list, H06 | — |
| L9 | "How to use your coupon", coupon states, Rescue Bonus in one plain line, no "Split reward" | ✓ | G07, G08, G10 | Pending coupon state has no trigger (Q61) |
| L10 | "Your food is on the shelf" first | ✓ | G07, G07b | — |
| L11 | **Back to Home** as the main button | ✓ | G07 | — |
| L12 | No "expire after 7 days"; shelf time as "on the shelf n days" | ✓ | M01, G10, H08 reasons, H03 duty 3 | G10 frame’s "days left" not used (Q49) |
| L13 | "Shelf-stable only"; milk and juice under "Not on the shelf" | ✓ | O04 | — |
| L14 | 44px+ "Not now" (48px pill) | ✓ | G01 | — |
| L15 | Duty checkboxes, Agree disabled until all ticked, liability placeholder, FAQ link | ✓ | H03 | Liability text To be agreed |
| L16 | Gains + "no fridge, no power, ~2 min a day"; funding shown as open | ✓ | H01 | The three funding options aren’t in the repo (Q51) |
| L17 | "Where do I find this?" help sheet | ✓ | H02 | Country-specific wording To be agreed |
| L18 | Spec stages with a Step header, no repeated content | partial | H01–H05 | Merging stages stays open (Q5, Q79) |
| L19 | 44px Keep / Remove with done state + Undo | ✓ | H08 | — |
| L20 | Tab and title "Home" | ✓ | Tab bars, H06 overline | Venue name is the big title (Q68) |
| L21 | Dashboard counts + activity log | ✓ | H06 | — |
| L22 | Reminder time + staff picker + hand-over | ✓ | H02, H03, H08, H08b | — |
| L23 | Missed-check banner + reminder | ✓ | H08c on H06 | — |
| L24 | Normal, feedback, alternative and error for every critical interaction | ✓ | Section B | — |
| L25 | No-app access: X01, "Item missing", no-app note, sign line | ✓ | X01, H08, G10, R06 | X01 reachable from the moderator menu only (Q55) |
| L26 | 48px Report button, R07 sheet, "Not here?" per row | ✓ | R03, R05, R06, R07 | — |
| L27 | Task start / done event log (drop-off < 90 s, check < 2 min) | ✓ | Moderator menu › Task timing, Export log | How the team times tasks is open (Q72) |
| L28 | Wording: still good, saved, pass it on; no food waste, leftovers, charity | ✓ | All (checked with a text search of the build) | O04 frame’s "leftovers" replaced (Q43) |

### 4.1 recommendations (instructor point 12)

| 4.1 recommendation | Covered by | Status |
|---|---|---|
| R1 NFC | L1, G04 arrow tip, H05 go-live line | Visible in the build |
| R2 Photo | L2 | Visible in the build ("ignore items already logged" deferred, Q47) |
| R3 Map | L4, L5 | Visible in the build |
| R4 Tap targets and done states | L3, L6, L19 | Visible in the build |
| R5 Rewards | L9–L11 | Visible in the build |
| R6 Funding and FAQ | L15, L16 | Visible in the build (funding shown as open options) |
| R7 Withdrawn coupon and cap | G07b, G08 withdrawn | Visible in the build (via Simulate; keep-or-not open, Q48) |
| R8 Shelf time | L12 | Visible in the build |
| R9 No-app access | L25 | Visible in the build |
| R10 Host duties | L15 | Visible in the build (Donate option deferred, Q54) |
| R11 Host setup | L17, L22, H06b | Visible in the build |
| R12 Activity log and Home | L20, L21 | Visible in the build |

## D. Decisions needed

Every open question in `docs/open-questions.md`, grouped by topic. The last two columns are for the team.

### Rewards and coupons
| # | Question | Screens affected | What the prototype shows now | Decision | Decided by / date |
|---|---|---|---|---|---|
| Q1 | Coupon value, expiry, monthly cap and who funds them | G07, G07b, G08, G10, H01, H07 | "To be agreed" everywhere | | |
| Q12 | Labels for coupon states other than active; Rescue Bonus complete / expired | G08, G10 | Used, Expired, Withdrawn chips; "4 of 4 picked up", "· expired" | | |
| Q18 | Real date on coupons ("after your drop-off on 23 Oct") | G08 | "Café Daisy · after your drop-off" | | |
| Q30 | G07 "How to use your coupon" line not in the frame | G07 | Line added (US-06) | | |
| Q32 | G08 v2 frame tabs and bonus button | G08 | Kit segmented control, plain bonus text | | |
| Q46 | Effect of "Not here?" and no-app pickups on the giver’s Rescue Bonus | R05, R07, X01, G10 | No change to the bonus | | |
| Q48 | Withdrawn coupon: does the giver keep it? | G08 | Moves to Used, "Withdrawn" | | |
| Q49 | Per-item "days left" in G10 | G10 | "On the shelf n days" | | |
| Q51 | The three funding options (Q1) | H01, host FAQ | "Option 1 / 2 / 3 · [To be agreed]" | | |
| Q61 | When is a coupon "pending"? | G08 | Shown by the Rescue Bonus line only | | |
| Q77 | Monthly cap trigger | G07b | Simulate only | | |

### Accounts and no-app access
| # | Question | Screens affected | What the prototype shows now | Decision | Decided by / date |
|---|---|---|---|---|---|
| Q7 | Accounts: required for givers and hosts, optional for receivers? | O01, M02, coupons, host | Fixed demo users; Log in / Log out placeholders | | |
| Q8 | Keep food alerts in this test round? | M02, R01b, banner | Simulated: "Pasta within 1 km", Notify me, alert banner | | |
| Q44 | Scenario B persona details | M01, M02 | "Jonas", J, jonas@example.com | | |
| Q55 | X01 no-app page: add to the spec? | X01 | Built, moderator menu only | | |
| Q65 | O01 "Log in" | O01 | Goes to Home as the demo user | | |
| Q71 | Food alert food and distance | M02, R01b | Fixed: Pasta within 1 km / searched food within 1 km | | |
| Q76 | Browse mode and Leave food | M01 | "Finish setting up first" sheet → O02 | | |

### Host and liability
| # | Question | Screens affected | What the prototype shows now | Decision | Decided by / date |
|---|---|---|---|---|---|
| Q5 / Q79 | Merge redundant onboarding stages (Prague P2) | O01–O04, H01–H05 | Not merged (L18 partial) | | |
| Q10 | Host screen codes (mock H06/H07 vs spec) | Host flow | Spec codes; mock H05–H07 inside spec H05 | | |
| Q52 | H02 defaults (capacity, reminder, stewards) | H02 | 10 items, 09:00, Anna + Brenda | | |
| Q53 | Step count for host onboarding | H01–H05 | "Step n of 6" | | |
| Q54 | Add "Donate" to Keep / Remove? | H08 | Keep / Remove only | | |
| Q59 | Host persona (Anna) vs Scenario C user (Brenda) | H06, H08 | Owner Anna; stewards Anna, Brenda | | |
| Q60 | H07c: one result or all three | H07c | One result per check | | |
| Q63 | Simulated timings (verification 1.5 s, loading 600–800 ms) | H04, buttons | As listed | | |
| Q67 | H06b until-when options | H06b | Frame options | | |
| Q68 | H06 title: "Home" or venue name | H06 | Overline "Home" + venue name | | |
| Q72 | How the team times tasks | Moderator | Event log + export | | |

### Map and sample data
| # | Question | Screens affected | What the prototype shows now | Decision | Decided by / date |
|---|---|---|---|---|---|
| Q2 | Venue names and map area per test city | Map, listings | Café Daisy, Café Lumi, Pizza Nonna + 29 generated | | |
| Q13 | Marker states full / paused / closed | Map, legend | Terracotta / dashed / Oat with badges | | |
| Q25 | Number of sample shelves, Nearby distance | Map | 32 shelves, Nearby = 1 km | | |
| Q26 | Pizza Nonna closing time | Home, map | Hours left out | | |
| Q27 / Q66 | Start data (Brenda, shelves, coupons) | All | See Q27, Q66 | | |
| Q36 | Generated sample shelves OK for tests? | Map, search | Seeded, same on every phone | | |
| Q37 | Food catalogue for search | Search | 16 shelf-stable categories | | |
| Q38 | Cluster style | Map | Paper pill + shelf icon + count | | |
| Q39 | Filter meanings | Chips | Open now / Has space / Nearby as listed | | |
| Q40 | Filter button behaviour | Map | Filters sheet with sort and legend | | |
| Q45 | Which NFC pattern to mock (iPhone "Ready to scan" sheet) | G04, R04, H05 | Same on-screen card everywhere | | |
| Q47 | Ignore items already logged on that shelf (photo) | G06a, G06 | Not built | | |
| Q57 | Map Back order and browser back | G02, R01 | In-app order as specified; browser back leaves the map | | |
| Q58 | Details sheet height | G03 | 80% of the map area | | |
| Q64 | Frame brands / addresses | G02, G03, R03 | Not used | | |
| Q69 | Directions | G03, R03 | Placeholder toast | | |
| Q78 | R01b inside the sheet | R01b | Count and switch hidden | | |

### Wording and copy proposals
| # | Question | Screens affected | What the prototype shows now | Decision | Decided by / date |
|---|---|---|---|---|---|
| Q4 | Label simulated steps as "demo" for participants? | G04, G05, R04, H03c | No demo labels (moderator menu only) | | |
| Q11 | R05 title | R05 | "What are you taking" | | |
| Q14 | New copy from the 15 Nov frames and this build | All | Used; full list in open-questions.md "Q14 update" | | |
| Q16 | G04 fallback labels | G04, R04 | Spec wording | | |
| Q17 | "picked up by neighbours" vs "saved by neighbours" | M02, G11 | "saved by neighbours" | | |
| Q21 | "Find free food at shelves near you" | M01 | Frame text | | |
| Q28 | G04 frame vs spec wording | G04 | Spec wording | | |
| Q29 | G05 / G06 frame wording | G05, G06 | Spec wording | | |
| Q35 | M01-v2 frame vs spec wording | M01 | Spec wording | | |
| Q41 | O01 / O02 copy | O01, O02 | Frame copy | | |
| Q42 | O03 two role cards | O03 | Frame layout | | |
| Q43 | O04 "leftovers" | O04 | "Cooked or homemade food" | | |
| Q50 | R05 seal checkbox from the frame | R05 | Not added | | |
| Q56 | Frame button labels vs spec | H01, H03, R03, H05 | Spec wording | | |
| Q62 | "Continue (demo)" on H03c | H03c | "Continue" | | |

### Styling vs frames
| # | Question | Screens affected | What the prototype shows now | Decision | Decided by / date |
|---|---|---|---|---|---|
| Q6 / Q22 | Logo and app icon | Wordmark, icon | Fraunces wordmark; shelf icon | | |
| Q9 | Real photos | M01, M02, G03, R03 | Labelled placeholders | | |
| Q15 / Q70 | Tokens added by the build | All | design-system §10b [NEW] | | |
| Q19 | Step header layout | Task flows | Frame layout (inline or stacked per frame) | | |
| Q20 | G05 dark viewfinder | G05 | `surface-subtle` | | |
| Q23 / Q24 | G03, G06a, G06c frames | G03, G06a, G06c | G03 now has a frame; G06a / G06c built without | | |
| Q31 | G08d page vs sheet | G08d | Full page | | |
| Q33 | M02 build | M02 | Built in this round | | |
| Q73 | G01 dim behind the banner | G01 | No dim | | |
| Q74 | M02 impact and host-mode card colours | M02 | Design system colours | | |
| Q75 | H07 dark camera box | H07 | Oat placeholder | | |

## E. Known gaps and polish list

**Simplified to save time**
- Map: location details don’t add a history entry, so browser / Android Back leaves the map instead of closing the details (Q57). In-app Back and Esc follow the specified order.
- "Report a problem" in the map details goes to the R03 page with the sheet open instead of opening the sheet over the map.
- The photo "AI" always returns the same 3 items; a real photo is shown but not read. R07 "Add a photo" only changes its label.
- Shelf time ("on the shelf n days", "added n days ago") is static sample data; no clock moves it.
- X01 takes one unit per ticked item (no stepper for multiples).
- H06 "pickups this week" counts pickup events, not items.
- Scenario starts reset the whole demo (shared shelves included); scenario B and A data don’t run side by side.
- H02 validation checks for empty fields only; G06c best-before is free text.
- No real Web NFC, camera QR scanning or maps integration (placeholders by design).

**Styling inconsistencies to look at**
- Older CSS from earlier phases still holds some literal sizes (shelf-card photo 72px, marker badge 20px / 14px icon, cluster 36px, "you are here" dot 18px, toggle knob 22px / 19px travel). New code uses tokens; these could move to `--size-*` tokens.
- R02 find-mode rows are tall (item, sealed + BB + added, distance + hours, chip); the R01b frame row is more compact.
- Generated venues use catalogue names ("Fusilli 500 g") while the spec venues use the frame format ("Fusilli pasta, 500 g").
- Pill chips in the details chip row are Paper with a subtle border; the frame uses Oat chips.
- G03 / R03 photos (until the photo URLs are pasted in, Q88) and the H07 camera are dashed placeholders. The G07 / R06 / H05 live / H08b illustrations are now the v2 art (`assets/illustrations/`).
- The ··· moderator button is visible to participants too (at 30% opacity) and is 40 px, below the 44 px tap minimum (Q80). It moves off buttons only when dropped; it stays put while content scrolls or screens change, so on another screen it can sit over a button until it is dragged again.
- Toasts on screens without a sticky action bar (M02, R06) can sit over the last row for 3–5 s.

**Animations that are rough**
- R06 count-down steps one number at a time with timeouts (600 ms in total).
- Step-header progress animates only the current segment on each screen; it doesn’t carry over between screens.
- Reduced motion turns every animation into an instant change; the illustrations show their still end frame (tap-the-tag: phone on the plate with two ripples; G06: items already in place; G07: items placed and sparkles shown). The screenshots in `docs/screenshots/` were taken with reduced motion on.

**To check on real phones before Tuesday**
- iPhone Safari and Android Chrome: sheet drag, map pinch, `100dvh`, safe areas, vibration (iOS ignores `navigator.vibrate`).
- Long-press on the greeting for the moderator menu on iOS (text selection is disabled on `[data-logo]`).
