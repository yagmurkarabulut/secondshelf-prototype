# SecondShelf: hi-fi mobile web prototype

> Draft v0.3 (10 Nov 2026). Sources: Service Blueprint Part II, 4.1 Low-Fidelity Prototypes, Low-Fidelity Usability Testing Protocol (Prague and Tbilisi results), SecondShelf UI Kit v0.4 and the main navigation frames in `frames/`.
> `[TBD]` = team decision still open. `[FRAME]` = add or confirm from the Figma frames.

@docs/design-system.md

---

## 1. Purpose

SecondShelf is a product-service system. Households use it to pass on sealed, shelf-stable food they will not eat, using shelves at public pickup points such as cafés. Givers and receivers never meet. The app supports a service that happens at a physical shelf, and the app is not the service itself.

- **Problem:** a household has good food it will not use and no convenient way to pass it on.
- **SDG:** 12 (Responsible Consumption and Production), targets 12.3, 12.5 and 12.8.
- **What this build is for:** a **front-end-only, clickable hi-fi prototype**. People open it from a link on their own phone during moderated usability tests in Prague, Tallinn and Tbilisi. It is not a production app.

### Core values (every design decision should support one)
| Value | In the app |
|---|---|
| Simplicity | One short action per visit: tap the tag, take a photo, confirm |
| Transparency | Photo, best-before date and "sealed" on every listing; rules visible; a report option |
| Reciprocity | Coupon for the giver, free food for the receiver, visitors for the host |
| Dignity | Ordinary venue, open to everyone; no charity or "food waste" wording |
| Locality | Points within walking distance; the map centres on the user |

### Scope rules
- Only **sealed, shelf-stable food within its date** (pasta, canned food, packaged bread, snacks). No chilled food, no cooked leftovers.
- **Not in scope:** home inventory tracking, meal planning, recipes, reservations, chat between users, login with real accounts, real payments.

---

## 2. Users and roles

| Role | Persona | Goal | Main concern |
|---|---|---|---|
| Giver | **Brenda**: plans change often, unopened food is left over | Avoid binning good food with little effort | Logging takes too long; is the food welcome? |
| Receiver | **Jonas**: shops on a tight budget near home | Lower the grocery bill without lowering quality | Is unchecked food from another household safe? |
| Host / steward | **Café manager** or a staff member | Foot traffic and a good image at low cost | Liability, cleanliness, staff time (target: 2 min a day) |

Most sharing-app users only take food, so supply from givers is the bottleneck. The giver flow must feel the quickest and the most rewarding.

---

## 3. Features

| # | Feature | Role | Screens |
|---|---|---|---|
| F-01 | Onboarding and role choice (give / take / host), sharing rules | All | O01–O04 |
| F-02 | Home: greeting, **Leave food** and **Find food** cards (equal size), "Your food on shelves" status list, "Points near you" shelf carousel | Giver, Receiver | M01 |
| F-03 | Contextual travel / weekend prompt (no inventory tracking) | Giver | G01 |
| F-04 | Map of pickup points: pill search + filter button, filter chips (Open now · Has space · Nearby), numbered markers + legend, count pill, **Map / List toggle**, shelf status (open / full / paused / closed), NFC/QR support | All | G02, R01 |
| F-05 | Point card with rules shown before the trip | Giver | G03 |
| F-06 | **NFC tag tap** with animated feedback; QR fallback; shelf-code fallback | Giver, Receiver, Host | G04, R04, H0x |
| F-07 | **One photo** of all items → AI-proposed list (simulated) | Giver | G05, G06a |
| F-08 | Confirm / edit item list, manual add, quantity stepper, required "sealed and in date" check | Giver | G06, G06c |
| F-09 | **Split reward**: instant thank-you coupon + Rescue Bonus that grows as items are picked up | Giver | G07 |
| F-10 | Coupon wallet: Active / Used segmented control, coupon ticket with Show button, Rescue Bonus card, clear "how to use" | Giver | G08 |
| F-11 | Rescue push / in-app banner ("2 of your items were saved") and Rescue Bonus progress | Giver | G09, G09b, G10 |
| F-12 | Monthly impact summary with a gentle buying tip | Giver | G11 |
| F-13 | Search food with suggestions under the search bar, category filters, sort (distance, open now, date) | Receiver | R01, R02 |
| F-14 | Shelf listing: photo, item, best-before, sealed badge, venue hours | Receiver | R03 |
| F-15 | Pickup: check seal and date → tap tag → **explicit checkboxes** for what you took → confirm | Receiver | R04–R06 |
| F-16 | Report missing / damaged item ("Not here? Report missing stock") | Receiver | R03–R05 |
| F-17 | Host onboarding in 6 stages: become a host, venue details, host agreement (duty checkboxes), operator verification, starter kit, activation tap | Host | H01–H05 |
| F-18 | Host dashboard with analytics: drop-offs, pickups, coupons redeemed, activity log | Host | H06 |
| F-19 | Redeem a coupon at the counter (valid / used / expired) | Host | H07, H07b |
| F-20 | **Daily shelf check** (about 2 min): flagged items, keep / remove, confirm; reminders; any staff member can do it | Host | H08 |
| F-21 | Pause the point (shelf full, café closed) | Host | H06/H08 |
| F-22 | Me: profile row, monthly impact card, My items, Food alerts, Sharing rules, Help and FAQ, Switch to host mode, Log out (placeholder) | All | M02 |
| F-24 | **Food alerts** (from the M02 frame): a receiver saves a food + distance ("Pasta within 1 km") and gets an in-app banner when it appears on a nearby shelf (simulated from the moderator menu) | Receiver | M02, banner |
| F-23 | **Moderator tools** (test only): reset demo, jump to screen, choose scenario | Facilitator | hidden |

---

## 4. Screen inventory

Codes follow the testing protocol. Exact names, order and states come from the Figma frames (`[FRAME]`). Route = hash route in the app.

| Code | Name | Route | Frame status |
|---|---|---|---|
| O01 | Welcome | `#/welcome` | [FRAME] |
| O02 | How it works | `#/how` | [FRAME] |
| O03 | Choose how you use it | `#/role` | [FRAME] |
| O04 | Sharing rules | `#/rules` | [FRAME] |
| M01 | Home | `#/home` | `frames/M01-home.png` |
| M02 | Me | `#/me` | `frames/M02-me.png` |
| G01 | Travel prompt (push + in-app) | `#/give/prompt` | [FRAME] |
| G02 | Map (shared with R01) | `#/map` | `frames/G02-map.png` |
| G03 | Point card | `#/point/:id` | [FRAME] |
| G04 / G04b | Tap the tag / Tag found (+ not found, QR, shelf code) | `#/give/tap` | [FRAME] |
| G05 | Take a photo | `#/give/photo` | [FRAME] |
| G06a | Reading your photo | `#/give/reading` | [FRAME] |
| G06 / G06c | Confirm item list / Edit or add item | `#/give/items` | [FRAME] |
| G07 | Thanks for sharing + split reward | `#/give/done` | [FRAME] |
| G08 | Coupons (wallet) | `#/coupons` | `frames/G08-coupons.png` |
| G09 / G09b | Rescue push / Rescue banner in app | overlay | [FRAME] |
| G10 | Rescue Bonus progress | `#/bonus` | [FRAME] |
| G11 | Monthly impact | `#/impact` | [FRAME] |
| R01 | Find food (map opened from the Find food card, search focused) | `#/map?find=1` | uses `frames/G02-map.png` |
| R02 | Search results (list) | `#/take/results` | [FRAME] |
| R03 | Shelf listing | `#/take/point/:id` | [FRAME] |
| R04 | Check and tap | `#/take/tap` | [FRAME] |
| R05 | What are you taking | `#/take/items` | [FRAME] |
| R06 | Pickup logged | `#/take/done` | [FRAME] |
| H01 | Become a host | `#/host` | [FRAME] |
| H02 | Venue details | `#/host/venue` | [FRAME] |
| H03 / H03c | Host agreement / Application under review | `#/host/agreement` | [FRAME] |
| H04 | Operator verification | `#/host/verify` | [FRAME] |
| H05 | Starter kit checklist + activation tap | `#/host/kit` | [FRAME] |
| H06 | Host dashboard | `#/host/dashboard` | [FRAME] |
| H07 / H07b | Redeem coupon / Valid | `#/host/redeem` | [FRAME] |
| H08 | Daily shelf check | `#/host/check` | [FRAME] |

---

## 5. User stories and acceptance criteria

### Giver (Brenda), Scenario A
- **US-01** As a giver, I want to be reminded before a trip, so that I remember to pass on unused food.
  - Given the app is open, when the moderator triggers the travel prompt, then a banner "Going away this weekend?" names a pickup point on my route, with **Find a shelf** and **Not now**.
- **US-02** As a giver, I want to see if a shelf is open and has space before I go.
  - Given the map, when I select a marker, then the point card shows hours, distance, shelf status, NFC/QR support and the sealed-only rule.
- **US-03** As a giver, I want to start the drop-off by tapping the shelf tag.
  - Given G04, when I tap **Tap shelf tag**, then the NFC card animates Idle → Scanning (1.2 s) → Found and moves on to G05 by itself.
  - Given G04, when the moderator chooses "Simulate: tag not found", then I see **Scan the QR code** and **Type shelf code**.
- **US-04** As a giver, I want to photograph all items at once.
  - Given G05, when I take or choose a photo (or **Use sample photo**), then G06a shows "Reading your photo" for about 1.5 s, then G06.
- **US-05** As a giver, I want to check and correct the proposed list.
  - Given G06, then each item shows its name, best-before date and a stepper (min 44 px). I can edit, remove or **Add item manually**.
  - **Confirm** stays disabled until "All items are sealed and within their date" is checked.
- **US-06** As a giver, I want to understand my reward right away.
  - Given G07, then I see "Thanks for sharing.", the thank-you coupon (value **To be agreed**), the Rescue Bonus at "0 of 4 picked up · pending", and a one-line **How to use your coupon**.
- **US-07** As a giver, I want to know when my food is saved.
  - Given a receiver logged a pickup (simulated), then a banner says "2 of your items were saved", and G10 shows "2 of 4 picked up".
- **US-08** As a giver, I want a monthly summary of what I passed on.

### Receiver (Jonas), Scenario B
- **US-10** As a receiver, I want to find pasta near me.
  - Given R01, when I type "pa", then suggestions appear under the search bar ("Pasta", "Pasta sauce"). Filters and sort update the map and the list.
- **US-11** As a receiver, I want to judge an item before walking over.
  - Given R03, then I see the photo, the best-before date, a sealed badge, the venue, its hours and the distance.
- **US-12** As a receiver, I want to confirm I am at the shelf and log what I take.
  - Given R04, then a reminder to check seal and date appears first, then the tag tap (same animation as US-03).
  - Given R05, then each item has an **explicit checkbox** and a stepper for multiples. **Confirm pickup** is disabled until at least one item is ticked.
  - Given R06, then I see "Pickup logged." and the shelf count updates.
- **US-13** As a receiver, I want to report a missing or damaged item from R03, R04 or R05.
- **US-14** As a receiver, I want an alert when food I need appears nearby.
  - Given M02, when I switch **Food alerts** on, then the row shows my saved alert ("Pasta within 1 km"); when the moderator triggers "Simulate: alert match", a banner says "Pasta is on a shelf 200 m away" with **View**.
- **US-15** As a receiver, I want to start from Home.
  - Given M01, when I tap **Find food**, then the map opens with the search field focused.

### Host / steward, Scenario C
- **US-20** As a host, I want to understand my duties before I commit.
  - Given H03, then the three duties (sealed food only, daily 2-minute check, remove items past their date) each have a checkbox, and **Agree and continue** is disabled until all three are ticked.
- **US-21** As a host, I want to activate the shelf once the kit is installed (H05 checklist → activation tap).
- **US-22** As a host, I want to see whether the activity is real.
  - Given H06, then I see counts of drop-offs, pickups and coupons redeemed, plus an activity log with times and a donor reference (anonymised).
- **US-23** As a steward, I want to do the daily check in under 2 minutes.
  - Given H08, then flagged items (7 days or past date) are listed. Each row has large **Keep** and **Remove** buttons (min 44 px) with clear visual feedback, and **Submit check** is enabled once every row has a decision.
  - Reminder time can be set, and the check can be done by any staff member (staff name picker).
- **US-24** As a host, I want to pause the point when the shelf is full or the café is closed.
- **US-25** As a host, I want to redeem a giver's coupon at the counter (valid / used / expired states).

---

## 6. Interactions

### Global
- Hash routing; the browser back button and the in-app back always work. Every screen except full-screen tasks shows the tab bar.
- Tab bar: **Home**, **Map**, **Coupons**, **Me**; the active tab has a Leaf pill behind its icon. Never label Home "Today" (it confused Prague P2).
- Host mode swaps the tabs for **Dashboard**, **Check**, **Redeem**, **Me**.
- Transitions: push (slide left, 250 ms) forward, slide right back, fade (150 ms) for overlays. Respect `prefers-reduced-motion` (no slide, instant).
- Feedback: every tap gives a visible pressed state. Successes use a toast or a full confirmation screen. Use `navigator.vibrate(30)` where supported for tag found / submit.
- Errors: slate (never red), icon + ink label, always with a way forward.

### Critical interactions (all need normal, alternative and error states)
| Interaction | Normal | Alternative | Error |
|---|---|---|---|
| NFC tap (G04, R04, H05) | Idle (pulsing phone-to-tag animation + "Hold your phone to the tag on the shelf") → Scanning 1.2 s → Found ✓ → auto-advance 600 ms | **Scan the QR code instead** (camera / sample QR) | Not found → retry, QR, **Type shelf code** |
| Photo → AI list (G05–G06) | Camera / file input → Reading 1.5 s → list | **Use sample photo**; **Add items manually** | "Couldn't read the photo" → retake or manual |
| Item list (G06) | Edit, stepper, remove with **Undo** toast (5 s) | Manual add sheet | Confirm disabled until the sealed check is ticked |
| Pickup log (R05) | Checkboxes + stepper → Confirm | Report missing | Nothing ticked → button disabled with a hint |
| Daily check (H08) | Keep / Remove per row → Submit | Pause point | Unresolved rows highlighted on submit |

### Simulated in the prototype (front end only)
- NFC: on-screen **Tap shelf tag** button. Optionally real Web NFC on Android Chrome, with a fallback.
- Camera: `<input type="file" accept="image/*" capture="environment">` plus **Use sample photo**.
- AI recognition: scripted result (fusilli pasta 500 g, tomato soup ×2, crackers).
- Push notifications and the other person's actions: triggered from the moderator menu.
- Data: mock JSON; state in memory plus localStorage (wrapped in try/catch); **Reset demo** restores the start state.

### Moderator menu (hidden)
Open with `?mod=1` or a long press (800 ms) on the logo. It offers:
- Reset demo
- Choose scenario (A giver, B receiver, C host)
- Jump to screen
- Simulate: tag not found / photo unreadable / receiver picked up 2 items / travel prompt / alert match
- Optional: export the event log (screen views, task start/end timestamps) as JSON, to measure drop-off < 90 s and host check < 2 min.

---

## 7. Content and wording

- Say **"still good"**, **"saved"** and **"pass it on"**. Never say "food waste", "leftovers", "charity" or "free food for the needy".
- Use the same words for the same action everywhere: **Leave food** (giver entry) / **Find food** (receiver entry) / **Tap shelf tag** / **Confirm** / **Report**. Inside the pickup flow the verb is "take" ("What are you taking", "Take what you can use").
- Sentence case for item names and labels ("Canned soup", not "Canned Soup").
- Fixed strings: "Thanks for sharing." · "Pickup logged." · "Not here? Report missing stock" · "Care for the shelf, together." · "Every item you leave is welcome, even if the box is a little worn." · "Numbers identify shelves, not item counts."
- Unknown values show **To be agreed** (coupon value, expiry, monthly cap). Don't invent numbers.
- Sample content (from the frames): user **Brenda Kowalska**; venues **Café Daisy** (200 m, closing 20:00, 4 spots), **Café Lumi** (1.2 km, closing 18:00, no spot), **Pizza Nonna** (2.1 km, 3 spots) [TBD per city]; items fusilli pasta 500 g (BB 2027-03), tomato soup ×2 (BB 2027-08), crackers (BB 2027-01), canned tuna, all-purpose flour; impact "11 items passed on · 8 saved by neighbours".
- Coupon value and validity show **"to be agreed"**, even though the G08 frame shows "€2 off" and "22 Nov 2026". Rescue Bonus says "2 of 4 picked up · pending", not "Only 2 more items to go!".

---

## 8. Hi-fi changes from low-fi testing (must be visible in the build)
| Finding | Change |
|---|---|
| NFC tap unclear (Prague P1, Tbilisi P1) | Animated tap card with states and haptics |
| Quantity buttons too small (Tbilisi P1) | 44 px stepper |
| Map / search friction (Prague P1) | Suggestions under the search bar, sort and filters, list view |
| Receiver unsure what to tick (Prague P1) | Explicit checkboxes in R05 |
| Reward unclear how to use (Tbilisi P1, Prague P2) | "How to use your coupon" line + wallet detail |
| Host duties unclear (Prague P2, Tbilisi P2) | Duty checkboxes in H03, responsibility summary |
| Small "X", unclear clear-item button (Prague P2) | 44 px targets, Keep/Remove with feedback |
| "Today" tab confusing (Prague P2) | Tab labelled "Home" |
| Host wants proof of activity (Prague P2) | Dashboard counts + activity log |
| Reminders and several staff (Tbilisi P2) | Reminder setting + staff picker in H08 |
| Redundant onboarding screens (Prague P2) | Merge where the frames allow [FRAME] |
| Frame review, v0.4 (team, 10 Nov) | Grey text → `text-secondary`; "No spot available" chip on Terracotta 700; gold icons only on Ink; numbered markers + Map / List toggle; Help icon `help`; coupon values "to be agreed" |

---

## 9. Accounts and tracking (team note, 10 Nov)

**Prototype:** no real accounts. Brenda is a fixed demo user; "Log out" is a placeholder that returns to Welcome and keeps the demo state.

**For the real service, who picked up what?** Without accounts, a pickup is logged by the NFC/QR tap (which shelf, when) plus the items ticked; the app knows *what* left the shelf, not *who* took it. That is enough for the map, the giver's Rescue Bonus count ("2 of 4 picked up") and the host's activity log, because those count items, not people.

| Role | Account? | Why |
|---|---|---|
| **Giver** | **Required (light)**: email magic link or phone code, no password | Coupons and the Rescue Bonus belong to a person; the monthly cap and coupon-farming protection (F9) need an identity; drop-off logs give traceability (F5). |
| **Host / steward** | **Required**, one venue account with named staff | Host agreement, operator verification, daily-check log ("who checked the shelf and when"), coupon redemption. |
| **Receiver** | **Optional** | Dignity and low barrier: anyone can take food, with or without the app. Pickups log anonymously (device ID + tap). An account only adds Food alerts across devices and a pickup history. Fraud risk is low because the food is free and logs only adjust counts. |

Recommendation: accounts for givers and hosts, optional for receivers. Decision pending in `docs/open-questions.md` (Q7).

## 10. Tech rules

- **Front end only.** No backend, no accounts, no API keys, no analytics services.
- Default: one self-contained `index.html` (inline CSS + vanilla JS, hash routing), published as a link. Alternative `[TBD]`: Vite + vanilla/React, static build, deployed to GitHub Pages.
- Mobile first: viewport meta with `viewport-fit=cover`, `min-height: 100dvh`, `env(safe-area-inset-*)`, max-width 430 px (centred in a phone frame on desktop). Input text ≥ 16 px. No hover-only interactions.
- Web app manifest + `theme-color` so testers can Add to Home Screen.
- Every colour, size, radius and shadow comes from `docs/design-system.md` tokens as CSS custom properties. No literal values in components.
- Icons: only the SecondShelf icon library v2.0 (`assets/icons/sprite.svg`, 68 icons). Placement and colour rules: `docs/design-system.md` §7.
- Fonts: Fraunces Bold (headings, 20px+) and Rubik 400/500 (everything else) from Google Fonts with `display=swap` and system fallbacks.
- Colour roles: warm gradient background; Pantry Green = primary buttons and Fraunces headings on Paper; **Forest** and **Ink** = dark cards (coupon ticket, Find food, impact / Leave food, host mode, map markers); **Ochre = rewards only** (coupon band, reward icons); **Terracotta 700 = the single closing action of a flow** and availability limits ("No spot available"); Slate = problems. No red anywhere.
- Accessibility: WCAG AA contrast, visible focus ring, labelled controls, `aria-live` for scanning / status changes.

## 11. How to work in this repo
1. Read this file and `docs/design-system.md` before any change.
2. Build order: tokens → components (all states) → screens in flow order (A, then B, then C) → moderator menu.
3. Take one screen at a time. After each one, take a screenshot at 390 × 844 and compare it with its frame in `frames/`.
4. If a frame and this spec disagree, the **frame wins on layout**, **`docs/design-system.md` wins on styling** (colours, type, radius, spacing) and the **spec wins on behaviour and wording**. Note the conflict in `docs/open-questions.md`.
5. Never invent features, values or copy. Use `[TBD]` and add it to `docs/open-questions.md`.

## 12. Definition of done
- [ ] Every screen in §4 exists, is reachable and matches its frame at 390 × 844 (also check 360 and 430 px)
- [ ] Every acceptance criterion in §5 passes
- [ ] Every critical interaction in §6 has normal, alternative and error states
- [ ] Copy follows §7; no literal style values outside tokens; no "€2" or real dates on coupons
- [ ] Tap targets ≥ 44 px; contrast AA; reduced motion respected
- [ ] Reset demo restores the start state; the link opens on iPhone Safari and Android Chrome

## 13. Open decisions [TBD]
- Coupon value, expiry, monthly cap and who funds them (Nino's three funding options)
- ~~Fonts~~ decided: Fraunces + Rubik · ~~Icon colour~~ decided: icon tokens in `docs/design-system.md` (primary = Pantry Green)
- Venue name and map area per test city (frames use Café Daisy, Café Lumi, Pizza Nonna)
- Accounts: required for givers and hosts, optional for receivers? (see §9, Q7)
- Food alerts: keep in the test, or park for later? (Q8)
- Hosting: single HTML link or a GitHub Pages project
- Whether simulated steps are labelled as demo for participants
