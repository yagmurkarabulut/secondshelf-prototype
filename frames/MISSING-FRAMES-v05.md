# SecondShelf: missing hi-fi frames (UI Kit v0.5), 15 Nov 2026

25 frames for screens that had no frame in `frames/`. They follow the layout of the team's SVG mocks (svg/ folder in the project) and are styled with `docs/design-system.md` v0.5: flat Cream, Pantry Green Fraunces titles, Rubik, pill buttons, Terracotta 500 step bar, Terracotta 700 closing action, Ochre for rewards only, Slate for problems.

- `png/`: 2x PNGs (780 × 1688). **Copy these into `frames/`** in the repo.
- `svg/`: the same frames as editable SVG (paste into Figma).
- Placeholders: photos and animations are dashed boxes. Undecided values read "To be agreed" or "[To be agreed]".

| Frame file | Spec screen | Route (CLAUDE.md §4) | Notes for the team |
|---|---|---|---|
| O01-welcome | O01 Welcome | `#/welcome` | Headline and intro are new copy: confirm |
| O02-how-it-works | O02 How it works | `#/how` | 4-row benefit list, Step 1 of 3 |
| O03-choose-how-you-use-it | O03 Choose how you use it | `#/role` | Two role cards, radio |
| O04-sharing-rules | O04 Sharing rules | `#/rules` | Start button disabled until the box is ticked |
| G01-travel-prompt | G01 Travel prompt | overlay on `#/home` | In-app version; push version not drawn |
| G03b-point-full | G03 point card, full state | `#/point/:id` | Paused state uses the same layout with the reason and reopening time |
| G07b-monthly-coupon-limit-reached | G07 variant | `#/give/done` | Cap value open (Q1) |
| G09b-rescue-banner-in-app | G09b Rescue banner | overlay on `#/home` | "View" → G10 |
| G10-rescue-bonus | G10 Rescue Bonus | `#/bonus` | Includes the no-app pickup note |
| G11-monthly-impact | G11 Monthly impact | `#/impact` | Buying tip copy is new: confirm |
| R01b-no-results | R01b No results (map) | `#/map?find=1` | Notify me, Clear filters |
| R04c-tag-not-found | R04 error state | `#/take/tap` | Same pattern as G04 not found |
| R07-report-a-problem | R07 Report (sheet over R03) | sheet | Reasons from the checklist |
| R07b-report-sent | R07 confirmation | sheet | |
| H03c-application-under-review | H03c | `#/host/agreement` | Reply time open |
| H05b-activation-error | H05 activation error | `#/host/kit` | Spec code H05 (mock H06 = activate, see Q10) |
| H06-host-dashboard | H06 Host dashboard | `#/host/dashboard` | Counts + activity log, donor refs anonymised |
| H06b-pause-the-shelf | F-21 Pause | `#/host/pause` (new) | Pickups still allowed while paused |
| H07-redeem-coupon | H07 Redeem | `#/host/redeem` | Scan or type |
| H07b-coupon-valid | H07b Valid | `#/host/redeem` | Mark as redeemed = closing action (Terracotta 700) |
| H07c-coupon-already-used-or-expired | H07 used / expired / not found | `#/host/redeem` | |
| H08-daily-shelf-check | H08 Daily check | `#/host/check` | One row decided (Kept + Undo), one open; Submit disabled |
| H08b-check-done | H08b Check done | `#/host/check` | |
| H08c-missed-check | H08c Missed check | `#/host/dashboard` | Problem banner on the dashboard |
| X01-i-took-something-web | X01 no-app web page | new | Not in CLAUDE.md yet: team decision |
