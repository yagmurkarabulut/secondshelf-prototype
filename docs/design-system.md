# SecondShelf design system: UI Kit v0.5

> v0.3 approved by the team on 10 Nov 2026 (Kathy's kit + the warm Elements kit). **v0.4** (same day) adds the components and decisions from the main navigation frames (`frames/M01-home.png`, `G02-map.png`, `G08-coupons.png`, `M02-me.png`). New items are marked **v0.4**. **v0.4.1: the gradient background is removed; screens are flat Cream.** **v0.5** (same day) merges the airy hi-fi mocks in `frames/` (G04–G08d, R01b–R06, H01–H07, M01-v2, M02-v2) and adds terracotta and gold to them; changes are marked **v0.5**.
> Source of truth: the **SecondShelf** design system artifact (https://claude.ai/artifact/1hn8SCWXGTcBzaimeadbe1). This file mirrors it for Claude Code.
> **Rules for Claude Code:**
> - Use only these tokens.
> - Write components with **semantic** tokens (`--text-secondary`, `--surface-reward`), never with primitives or hex.
> - If something is missing, add a token here first, marked `[NEW]`, and list it in `docs/open-questions.md`.

## 1. Personality
Warm, neighbourly, for everyone. Like a well-kept pantry in a friendly café, not a charity or a tech product. Taking and leaving food carry equal weight.

Proportions: about **60% Cream and Paper · 30% Pantry Green and Ink · 10% Ochre and Terracotta**. Rewards and highlights work only if they stay rare.

## 2. Colour

### 2.1 Primitives (do not use directly in components)
| Token | Hex | Name / note |
|---|---|---|
| `green-950` | `#172E20` | Pressed Pantry Green |
| `green-900` | `#1F3D2B` | **Pantry Green**, brand |
| `green-700` | `#3F5B3A` | Forest, hover, illustration |
| `green-100` | `#CFE3C8` | Leaf, selected surfaces |
| `terracotta-800` | `#89432D` | Pressed terracotta |
| `terracotta-700` | `#A14C33` | Terracotta for text and buttons (Paper on it 5.8:1) |
| `terracotta-500` | `#C2593A` | Terracotta: fills, icons, text 24px+ only |
| `terracotta-100` | `#F0DFD2` | Terracotta tint |
| `ochre-800` | `#876326` | Ochre for text and icons on Cream and Paper |
| `ochre-500` | `#BF8B2E` | **Ochre / gold**: reward fills, Ink text on it |
| `ochre-100` | `#EFE5D1` | Ochre tint |
| `sand-200` | `#E8D7B9` | **v0.4** Sand: icon tile on the Ink host-mode card |
| `clay-500` | `#8A6F4A` | Clay: tertiary and decorative icons only |
| `ink-900` | `#2B241E` | Ink (warm) |
| `stone-700` | `#5C554C` | Warm stone, secondary text |
| `stone-200` | `#E6DED0` | **v0.4** Secondary text on dark surfaces (11.5:1 on Ink, 5.7:1 on Forest) |
| `stone-600` | `#6E665C` | Warm stone, tertiary text |
| `stone-500` | `#8C8477` | Warm stone, control outlines, disabled |
| `stone-300` | `#CFC6B6` | Warm stone, decorative dividers only |
| `oat-200` | `#E9DFCC` | Oat: notes, **v0.5** segmented track and step-progress track |
| `cream-100` | `#F6F1E7` | **v0.5** Cream (canvas), Kathy's lighter cream |
| `paper-0` | `#FFFFFF` | Paper |
| `success-700` | `#2C6E46` | Success |
| `warning-600` | `#A86A12` | Warning (icons only) |
| `slate-600` | `#51666D` | Slate: problems. **No red anywhere.** |
| `info-600` | `#2F6E8C` | Info, focus ring |
| `map-land` · `map-road` · `map-road-main` · `map-water` | `#FFFFFF` · `#D9DED8` · `#798C75` · `#85D5EB` | **v0.4** Map illustration only, never UI |

### 2.2 Text
| Token | → | Contrast on Cream | Use |
|---|---|---|---|
| `text-primary` | ink-900 | 13.6 | Body, item names, input values |
| `text-secondary` | stone-700 | 6.5 | Meta, descriptions, field labels |
| `text-tertiary` | stone-600 | 5.0 | Placeholders, hints, timestamps. On Cream or Paper only, not on Oat |
| `text-disabled` | stone-500 | 3.3 | Disabled only |
| `text-brand` | green-900 | 10.6 | **v0.5** Screen titles, headings, coupon value, impact numbers |
| `text-accent` | terracotta-700 | 5.2 | Highlights, sparingly |
| `text-reward` | ochre-800 | 4.9 | Reward labels on Cream and Paper |
| `text-link` | green-900 | 10.6 | Links, always underlined |
| `text-on-primary` | paper-0 | 11.9 on green | Text on Pantry Green |
| `text-on-accent` | paper-0 | 5.8 on terracotta-700 | Text on terracotta buttons |
| `text-on-reward` | ink-900 | 4.9 on ochre-500 | Text on ochre fills |
| `text-on-inverse` | paper-0 | 15.3 on Ink · 7.6 on Forest | **v0.4** Main text on dark cards |
| `text-on-inverse-secondary` | stone-200 | 11.5 on Ink · 5.7 on Forest | **v0.4** Supporting text on dark cards |
| `text-on-unavailable` | paper-0 | 5.8 on terracotta-700 | **v0.4** Text on the availability chip ("Full shelf", v0.5) |
| `text-problem` | slate-600 | 5.4 | Error and problem messages |
| `text-success` | success-700 | 5.5 | Short success text (prefer icon + Ink) |

### 2.3 Icons
| Token | → | Use |
|---|---|---|
| `icon-primary` | green-900 | Navigation, actions, leading icons |
| `icon-secondary` | stone-700 | Meta icons, inactive tabs |
| `icon-tertiary` | clay-500 | Decorative and illustrative only |
| `icon-disabled` | stone-500 | Disabled |
| `icon-accent` | terracotta-500 | Feature icons (new shelf, **v0.5** Leave food card) |
| `icon-reward` | ochre-800 | Coupon, Rescue Bonus, search, **v0.5** Find food card |
| `icon-on-primary` | paper-0 | On green or terracotta-700 fills |
| `icon-neutral` | ink-900 | **v0.4** Inactive tab icons, neutral list icons |
| `icon-on-inverse` | ochre-500 | **v0.4** Gold icons on **Ink only** (5.1:1). Never on Forest (2.5:1) |
| `icon-on-brand-soft` | green-100 | **v0.4** Icons on Forest cards (Leaf, 5.6:1) |
| `icon-success` · `icon-warning` · `icon-problem` · `icon-info` | success-700 · warning-600 · slate-600 · info-600 | Status, **always with an Ink label** |

### 2.4 Surfaces, borders, actions
| Token | → | Use |
|---|---|---|
| `surface-canvas` | cream-100 | Screen background, **flat** (no gradient) |
| `surface-default` | paper-0 | Cards, sheets, inputs |
| `surface-subtle` | oat-200 | Notes, tips, open decisions |
| `surface-selected` | green-100 | Selected rows, completed steps, success banners, **v0.5** impact card |
| `surface-brand` | green-900 | Task screens (tap the tag), hero bands |
| `surface-accent` | terracotta-500 | Feature blocks with 24px+ text only |
| `surface-accent-subtle` | terracotta-100 | Quiet feature cards, Ink text; **v0.5** Leave food icon tile |
| `surface-reward` | ochre-500 | Coupon band (6px), **v0.5** Rescue Bonus progress fill; Ink text |
| `surface-reward-subtle` | ochre-100 | Reward banners, Ink text; **v0.5** Find food and Rescue Bonus icon tiles |
| `surface-inverse` | ink-900 | **v0.5** Host-mode card, map markers, count pill only |
| `surface-brand-soft` | green-700 | Forest: toggle on. (**v0.5**: no longer used for the coupon, Find food or impact cards) |
| `surface-indicator` | green-100 | **v0.4** Active tab pill, positive status tiles |
| `surface-track` | cream-100 | **v0.4** Progress track, neutral chips (count, spots available) |
| `surface-segment` | oat-200 | **v0.5** Segmented-control track (Oat) |
| `surface-unavailable` | terracotta-700 | Availability limits only (**v0.5** label "Full shelf") with Paper text 5.8:1 |
| `surface-progress` | terracotta-500 | **v0.5 [NEW]** Step-progress fill (3.9:1 on Cream, 3.3:1 on the track) |
| `surface-progress-track` | oat-200 | **v0.5 [NEW]** Track behind the step progress |
| `border-subtle` | stone-300 | Decorative dividers |
| `border-strong` | stone-500 | Inputs, checkboxes, outline controls (3:1) |
| `border-brand` | green-900 | Secondary button outline, selected card |
| `border-focus` | info-600 | Focus ring on light surfaces |
| `action-primary` / `-hover` / `-pressed` | green-900 / green-700 / green-950 | Primary buttons |
| `action-accent` / `-pressed` | terracotta-700 / terracotta-800 | **One closing action per flow**: Confirm drop-off, Confirm pickup, Go live. Never Clay. |
| `action-disabled` | oat-200 | Disabled button fill (with `text-disabled`) |
| `map-park` · `map-marker` | green-100 · ink-900 | **v0.4** Map parks; marker fill (Paper number) |

### 2.5 Colour rules
- **Ochre means "you earned something".** Use it only for coupons, the Rescue Bonus and thank-you moments.
- **Terracotta is never an error or a warning.** Problems are Slate, calm and with a clear way forward.
- **Terracotta marks availability limits** (**v0.5** label "Full shelf") as a `surface-unavailable` chip: Terracotta **700** + Paper text (5.84:1) + the `shelf-full` icon. White on Terracotta 500 is 4.39:1 and fails AA, so 500 is never used behind normal-size text.
- **Gold icons** appear on Ink (`icon-on-inverse`) and, on light surfaces, as `icon-reward` (Ochre 800) for search, rewards and the Find food card. On Forest, icons are Leaf.
- **v0.5 Where the warmth goes (airy style):** Terracotta 700 = the closing action and "Full shelf"; Terracotta 500 = step progress and the Leave food icon; Ochre 500 = coupon band and Rescue Bonus fill; Ochre 800 = reward and search icons. Everything else is Cream, Paper and Pantry Green.
- **v0.5 Rescue Bonus bar**: Ochre 500 on the Cream track is 2.7:1, so the bar is always paired with the text "n of N picked up · pending", which carries the meaning.
- **v0.4 Grey text**: never the frames' `#95918E` (3.1:1); use `text-secondary` or `text-tertiary`.
- Never put Ochre 500 as text or icons on Cream (2.7:1); use `ochre-800`. Never put Ochre 800 text on the ochre tint (4.4:1); use Ink.
- Normal-size text is never placed on `terracotta-500`.
- Stone 300 and Oat are never the only boundary of a control.
- Status = icon + shape + words. Never colour alone.

## 3. Typography

Fraunces Bold brings warmth; Rubik keeps instructions clear. Two families only (**v0.5**: the mocks' DM Sans is replaced by Rubik).

| Token / class | Font | Size / line | Weight | Tracking | Use |
|---|---|---|---|---|---|
| `display` | Fraunces | 32 / 40 | 700 | -0.02em | One per screen: confirmations, onboarding |
| `heading-1` | Fraunces | 28 / 36 | 700 | -0.01em | Screen titles |
| `heading-2` | Fraunces | 24 / 32 | 700 | -0.01em | Section titles |
| `heading-3` | Fraunces | 20 / 28 | 700 | 0 | Card group titles (smallest Fraunces) |
| `section` | Rubik | 20 / 28 | 500 | 0 | **v0.4** Section titles, action-card titles |
| `title` | Rubik | 18 / 24 | 500 | 0 | Card and list item titles |
| `body-large` | Rubik | 18 / 28 | 400 | 0 | Intro paragraphs |
| `body` | Rubik | 16 / 24 | 400 | 0 | Default text, input values |
| `button` | Rubik | 16 / 24 | 500 | 0 | Button labels |
| `body-small` | Rubik | 14 / 20 | 400 | 0 | Meta, secondary text |
| `label` | Rubik | 14 / 20 | 500 | 0 | Field labels, chips, tab labels |
| `caption` | Rubik | 12 / 16 | 400 | 0 | Non-essential metadata (smallest size) |
| `overline` | Rubik | 12 / 16 | 500 | 0.06em, UPPERCASE | Section labels, "STEP 2 OF 3" |

- Load: `https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Rubik:wght@400;500&display=swap`
- Stacks: `--font-serif: Fraunces, Georgia, serif` · `--font-sans: Rubik, system-ui, -apple-system, sans-serif`
- **v0.5** Screen titles (Fraunces `display`/`heading-1`) are **Pantry Green** (`text-brand`, 10.6:1 on Cream), as in the airy mocks. Fraunces headings on Paper cards are `text-brand` too. Section titles ("Your food on shelves", "Points near you") use **`section`**: Rubik 500 20/28, Ink. Sentence case everywhere (item names too: "Canned soup").
- Fraunces is never used under 20px, on buttons or in labels.
- Inputs are 16px (no iOS zoom). 12px is the floor, and never for instructions. Text reflows at 200%; labels are never truncated.

## 4. Spacing: multiples of 4
| Token | px | Use |
|---|---|---|
| `space-4` | 4 | Icon to text, tightly related details |
| `space-8` | 8 | Inside controls, label to field, chip gaps |
| `space-12` | 12 | Vertical control padding, list rows |
| `space-16` | 16 | Card padding, horizontal control padding, default stack gap |
| `space-20` | 20 | **Screen side gutter** |
| `space-24` | 24 | Between groups of cards |
| `space-28` | 28 | Rare: optical space under large headlines |
| `space-32` | 32 | Between sections |
| `space-40` | 40 | Top of confirmation screens, large breaks |
| `space-48` | 48 | Major breaks, empty states |
| `space-56` | 56 | Rare: safe space above fixed actions |
| `space-64` | 64 | Onboarding hero spacing |

## 5. Radius
| Token | px | Use |
|---|---|---|
| `radius-none` | 0 | Print, signage, full-bleed images |
| `radius-xs` | 4 | Checkbox, tiny tags |
| `radius-sm` | 8 | Items **nested inside** a 16px card (thumbnails, status tiles, stepper buttons, QR sketch) |
| `radius-md` | **12** | Inputs, banners, icon tiles, suggestions list (**v0.5**: buttons are pills) |
| `radius-lg` | **16** | **v0.4 Cards** (from the frames): action cards, coupon ticket, list cards, shelf cards, dialogs |
| `radius-xl` | 24 | Top corners of bottom sheets |
| `radius-full` | 999 | **v0.5** Buttons, steppers, search field, chips, badges, map markers, avatars, progress bars |

**v0.5:** every button is a pill (`radius-full`); inputs stay 12px so text fields and buttons stay easy to tell apart.

Nested rule: inner radius = outer radius − padding. In practice, items inside a 16px card use `radius-sm` (8px) or, for 44px icon tiles, `radius-md` (12px).

## 6. Background, elevation, focus, size, motion
- **Background (v0.4.1)**: flat `surface-canvas` (Cream) on every standard screen. **No gradients anywhere.** Task screens use `surface-brand`.
- `shadow-card`: `0 1px 2px rgba(43,36,30,.08), 0 8px 24px rgba(43,36,30,.08)`. **v0.5** For tappable cards (action cards, shelf cards, coupon); flat Paper on Cream for everything else. The map search is flat with a `border-strong` outline.
- `shadow-sheet`: `0 -4px 24px rgba(43,36,30,.12)`. For bottom sheets and fixed action bars.
- `shadow-focus`: `0 0 0 2px #FFFFFF, 0 0 0 5px #2F6E8C`. On dark fills, use a Paper ring instead.
- Sizes:
  - `size-tap-min` 44 · `size-control` 48 (buttons, inputs)
  - icons `16 / 20 / 24 / 32` (stroke 1.5 at 16, otherwise 2)
  - frame 390 × 844, layout max-width 430
  - **v0.4** avatar 48 · tab indicator pill 64 × 32 · toggle 52 × 32
- Motion:
  - `--motion-fast 150ms` (fades) · `--motion-base 250ms` (screen push) · `--ease cubic-bezier(.2,0,0,1)`
  - NFC scanning 1.2s; auto-advance after success 600ms
  - Respect `prefers-reduced-motion`

## 7. Iconography
**SecondShelf icon library v2.0** in `assets/icons/`: 68 rounded line icons (12 reference icons redrawn softer + 56 for the app). It's also the **Icons** asset group in the design system artifact.

### Style
- 24 × 24 grid, 2px stroke, **round caps and joins**, generous corner radii, no fills.
- Sizes:
  - 24px default · 20px inside buttons and next to 14–16px text
  - 32px in empty states · 16px only with a 1.5px stroke
- Every icon sits in a **44 × 44px target**; any icon that carries meaning has a visible label. Status icons always pair with an Ink text label.

### Files
| Path | Use |
|---|---|
| `assets/icons/sprite.svg` | **Use in code.** Inline the sprite once, then `<svg class="icon" aria-hidden="true"><use href="#ss-done"/></svg>` |
| `assets/icons/svg-currentcolor/` | Single files with `stroke="currentColor"` |
| `assets/icons/svg/` | Pantry Green `#1F3D2B` files for Figma and documents |
| `assets/icons/icons.json` | Name, id, label, description, category |
| `assets/icons/preview.html` | Browsable preview with a colour switch |

### Colour
Set CSS `color` on the icon with an icon token (§2.3), never a raw hex:
```css
.icon{width:24px;height:24px;color:var(--icon-primary);flex:none}
.icon--sm{width:20px;height:20px}
.icon--secondary{color:var(--icon-secondary)} .icon--tertiary{color:var(--icon-tertiary)}
.icon--accent{color:var(--icon-accent)} .icon--reward{color:var(--icon-reward)}
.icon--on-primary{color:var(--icon-on-primary)} .icon--disabled{color:var(--icon-disabled)}
.icon--success{color:var(--icon-success)} .icon--warning{color:var(--icon-warning)}
.icon--problem{color:var(--icon-problem)} .icon--info{color:var(--icon-info)}
```

### Icon set (ids are `ss-<name>`)
| Category | Icons |
|---|---|
| Reference | `community-shelf` · `sealed-food` · `pickup-bag` · `community-care` · `saved-food` · `filter` · `tap-nfc` · `done` · `paused` · `needs-attention` · `location` · `continue` |
| Navigation | `home` · `map` · `list` · `coupon` · `profile` · `back` · `chevron-left` · `chevron-right` · `chevron-down` · `chevron-up` · `close` · `more` · `dashboard` |
| Actions | `search` · `sort` · `plus` · `minus` · `edit` · `remove` · `undo` · `retry` · `camera` · `photo` · `qr-code` · `shelf-code` · `phone-tap` · `switch-role` · `share` |
| Food and shelf | `shelf-full` · `venue` · `coffee` · `package` · `tin` · `pasta` · `best-before` · `sealed-badge` · `travel` · `calendar` |
| Status and feedback | `info` · `help` · `pause` · `notification` · `reminder` · `checkbox` · `checkbox-empty` · `new` |
| Rewards and impact | `rescue-bonus` · `impact` · `thank-you` · `redeem` |
| Host and steward | `shelf-check` · `staff` · `agreement` · `starter-kit` · `activity` · `verified` |

### Where each icon goes
| Place | Icon(s) | Token |
|---|---|---|
| Consumer tab bar | `home` · `map` · `coupon` · `profile` | active `icon-primary` on a Leaf pill, inactive `icon-neutral` |
| Host tab bar | `dashboard` · `shelf-check` · `redeem` · `profile` | same |
| Top bar | `back`, `close`, `more` | `icon-primary` |
| M01 Leave food / Find food cards | `sealed-food` / `search` | **v0.5** `icon-accent` on terracotta tint / `icon-reward` on ochre tint |
| M01 Your food on shelves | `done` (picked up) / `paused` (waiting) | `icon-success` on Leaf tile / `icon-warning` on cream tile |
| G02 map search | `search` · `filter` · `map` / `list` | `icon-reward` (search) · `icon-primary` |
| G01 travel prompt | `travel` | `icon-primary` |
| G02 / R01 map and list | `location`, `list`, `map`, `search`, `filter`, `sort` | `icon-primary` |
| G03 / R03 shelf details | `venue`, `paused` (hours), `best-before`, `sealed-badge`, `shelf-full` | `icon-secondary` for meta |
| G04 / R04 / H05 tag tap | `phone-tap` (instruction), `tap-nfc` (button), `qr-code`, `shelf-code` | `icon-on-primary` on the task screen |
| G05 photo | `camera`, `photo` (sample photo) | `icon-primary` |
| G06 item list | `edit`, `remove`, `undo`, `plus` / `minus`, `best-before`, `sealed-badge` | `icon-primary` / `icon-secondary` |
| G07 / G08 rewards | `thank-you`, `coupon`, `rescue-bonus` | `icon-reward` (Rescue Bonus on an ochre-tint tile) |
| G09 rescue alert | `notification` + `saved-food` | `icon-success` |
| G11 monthly impact | `impact`, `saved-food` | `icon-primary` |
| R05 pickup list | `checkbox` / `checkbox-empty` | `icon-primary` / `border-strong` |
| Reports and problems | `needs-attention`, `retry` | `icon-problem` |
| New shelf highlight | `new` | `icon-accent` |
| H01–H05 host onboarding | `community-shelf`, `agreement`, `verified`, `starter-kit` | `icon-primary` |
| H06 dashboard | `activity`, `staff`, `coupon` | `icon-primary` / `icon-secondary` |
| H08 daily check | `shelf-check`, `reminder`, `pause`, `shelf-full` | `icon-primary` |
| Status labels | `done` · `paused` · `needs-attention` · `info` | success · warning · problem · info |
| Empty states | the screen's main icon at 32px | `icon-tertiary` |
| M02 settings | `sealed-food` (My items) · `notification` (Food alerts) · `info` (Sharing rules) · **`help`** (Help and FAQ) | `icon-primary`; alerts `icon-reward` on ochre tint |
| M02 impact / host mode | `saved-food` / `community-shelf` | **v0.5** `icon-primary` on Leaf / `icon-reward` on Sand tile (Ink card) |
| Role switch (M02) | `switch-role` | `icon-primary` |

If a screen needs an icon that isn't here, add it to `assets/icons/` in the same style (24px grid, 2px rounded stroke) and list it in this table. Don't pull in another icon set.

## 8. Components
Every component uses semantic tokens only and is built with all its states.

| Component | Recipe | States |
|---|---|---|
| **Button** | **v0.5 pill**: 48px, `radius-full`, padding 12/24, `button` type, optional 20px leading icon (gap 8) | Primary (`action-primary`) · Accent (`action-accent`, max one per flow) · Secondary (Paper + 1.5px `border-brand`) · Text link · (v0.4 Dark button removed) · default / hover / pressed / focus / loading / disabled |
| **Input** | Label above (`label`, `text-secondary`, gap 8); field 48px, `radius-md`, 1.5px `border-strong`, Paper, 16px text, placeholder `text-tertiary` | default · focus (`border-brand` + `shadow-focus`) · filled · error (`text-problem` border + flag icon + message under the field) · disabled |
| **Search field** | Pill (`radius-full`), 48px, Paper, **v0.5 flat: 1.5px `border-strong`, no shadow**, gold `search` icon (`icon-reward`), placeholder `text-tertiary`; separate 48px round filter button; suggestions list below (Paper, `radius-md`) | empty · typing with suggestions · results |
| **Filter chip** | `radius-full`, min 44px, `label` type, 16px side padding, gap 8 | default (Paper + `border-strong`) · selected (`action-primary` fill + tick + Paper text) |
| **Checkbox row** | 24px box `radius-xs` in a 44px target, label `body` | unchecked · checked (`action-primary`) · disabled |
| **Quantity stepper** | **v0.5 round**: 44px buttons `radius-full`, Paper + 1.5px `border-strong`, `minus`/`plus` in `icon-primary`; value `title` | default · min (minus disabled) · max |
| **Card** | Paper, **`radius-lg` (16)**, padding 16, optional `shadow-card` | default · pressed · selected (`surface-selected` or `border-brand`) |
| **Action card** (Home) **v0.5 airy** | Paper, `radius-lg`, `shadow-card`, padding 16; 44px icon tile (`radius-md`) with a 28px icon; title `section` Ink; description `body-small` `text-secondary`. **Leave food**: `surface-accent-subtle` tile + `sealed-food` in `icon-accent`. **Find food**: `surface-reward-subtle` tile + `search` in `icon-reward`. Same size = equal weight | default · pressed |
| **Feature card** | `surface-accent-subtle`, `overline` in `text-accent`, `icon-accent` | default |
| **Status label** | Status icon + `text-primary` label (problems may use `text-problem`) | done · waiting/paused · problem · info |
| **Banner / toast** | `radius-md`, padding 12/16, icon + text + optional action | success (`surface-selected`) · info (`surface-subtle`) · problem (Paper + Slate text) · reward (`surface-reward-subtle`) |
| **Coupon ticket** **v0.5 light** | Paper, `radius-lg`, `shadow-card`, 6px gold band (`surface-reward`) on top; `coupon` icon `icon-reward` + label `text-secondary`; value Fraunces 32/40 `text-brand`; Leaf "Ready to use" chip (Ink text); dashed tear line (`border-subtle`) with two notches in the canvas colour; validity `text-secondary` + **Primary** pill Show button with `qr-code` | active · used · expired · pending; value and validity say "to be agreed" |
| **Segmented control** | Pill track `surface-segment` (**v0.5 Oat**), 4px padding; selected segment Paper + Rubik 500; ≥ 40px segments; `role=tablist` | Active (n) / Used (n) |
| **Rescue Bonus card** | Paper `radius-lg`; 44px `surface-reward-subtle` tile + `rescue-bonus` in `icon-reward`; title `title`, venue `text-secondary`; 8px bar, **v0.5 gold fill** (`surface-reward`) on `surface-track`; status as plain text "n of N picked up · pending" (never a button-looking chip; no targets or countdowns) | 0 · partial · complete · expired |
| **NFC tap card** | (layout from G04 / R04 / H06 mocks) On `surface-brand`: illustration, instruction in `text-on-primary`, status, fallback links | idle · scanning · found · not found · QR fallback |
| **Food item row** | Thumb `radius-sm`, `title`, best-before `body-small`, sealed badge, **round** stepper, 44px remove; min 72px rows (v0.5 ItemRows) | default · edited · removed (Undo toast) · checkbox variant (receiver) |
| **Map marker** **v0.4** | 32px numbered circle: `map-marker` (Ink) fill, Paper number | default · selected (`action-primary` + Leaf halo) · full · paused · closed; legend "Numbers identify shelves, not item counts" |
| **Map controls** **v0.4** | Flat pill search + filter button (v0.5: `border-strong` outline, no shadow); scrolling filter chips (Open now · Has space · Nearby); count pill on `surface-inverse` ("32 locations in this area"); **Map / List toggle** at the bottom | — |
| **Item status list** **v0.4** | Paper `radius-lg`; header `section` + count chip (`surface-track`) + chevron; 48px rows: 32px status tile (`radius-sm`) + name + venue `text-secondary`; hidden status label | picked up (Leaf + `done`) · waiting (cream + `paused`) |
| **Shelf card** **v0.4** | Paper `radius-lg`, `shadow-card`, photo top, distance `text-brand` 14/500, venue `title`, closing time `text-secondary`, availability chip; horizontal carousel with 12px gaps | has space (`surface-track` chip) · **full** (`surface-unavailable` chip + `shelf-full` icon, **v0.5** label "Full shelf") · closed |
| **Availability chip** **v0.4** | `radius-full`, 32px, `label` type, nowrap | spots available · Full shelf (Terracotta 700) |
| **Settings list** **v0.4** | Paper `radius-lg`; ≥ 64px rows: 44px icon tile `radius-md` + title + subtitle `text-secondary` + chevron or toggle; `border-subtle` dividers | — |
| **Toggle** **v0.4** | 52 × 32 pill, `role=switch` | on (Forest track + Cream knob) · off (`border-strong` outline + Paper knob) · disabled |
| **Profile row / avatar** **v0.4** | 48px avatar (photo or initials on Oat), name `title`, email `text-secondary` | — |
| **Impact card** **v0.5 light** | `surface-selected` (Leaf), label + captions `text-secondary`, numbers Fraunces 32/40 `text-brand`, `saved-food` in `icon-primary` | — |
| **Host-mode card** **v0.4** | Stays `surface-inverse` (the only dark card in v0.5), Sand icon tile with gold `community-shelf`, Paper title, `text-on-inverse-secondary` subtitle, chevron | — |
| **Greeting header** | "Hi Brenda" in Fraunces `heading-1` **`text-brand`** (v0.5) + avatar at right, on Cream | — |
| **Step header** **v0.5 [NEW]** | 44px Back (Close on step 1), centred `overline` "Step n of 3" `text-secondary`, 6px bar `surface-progress` on `surface-progress-track`, title Fraunces `heading-1` `text-brand`; `role=progressbar` | step 1 · 2 · 3 |
| **Counter QR sheet** **v0.5 [NEW, from G08d]** | Bottom sheet: coupon name, large QR on Paper, coupon code, "Show this to the staff", Close | active · used |
| **Photo capture frame** **v0.5 [NEW, from G05]** | Viewfinder `radius-lg` on `surface-subtle`, Primary pill **Take photo**, Secondary **Use sample photo**, text link **Add items manually** | empty · captured · reading · unreadable |
| **List result row** **v0.5 [NEW, from R01b]** | Paper row: numbered marker (same number as on the map), venue `title`, distance + hours `text-secondary`, availability chip, chevron | has space · full · closed |
| **Verification status card** **v0.5 [NEW, from H04]** | Paper card: `verified` icon + status label + one line; pending uses `paused` + `icon-warning` | pending · verified · needs info |
| **Benefit list** **v0.5 [NEW, from H01]** | Rows of 44px `surface-selected` icon tile + `title` + `body-small` | — |
| **Steward check row** | Item + reason + **Keep / Remove** 44px buttons | to check · kept · removed · flagged |
| **Activity log row** | Icon, event, time, anonymised donor ref | drop-off · pickup · coupon redeemed · check done |
| **Top bar** | Back, title (`title`), optional action | default · on `surface-brand` |
| **Tab bar** **v0.4** | Paper bar, 4 tabs, 24px icon over `label` in `text-primary`; active = 64 × 32 `surface-indicator` pill behind an `icon-primary` icon; inactive `icon-neutral` | consumer: Home · Map · Coupons · Me; host: Dashboard · Check · Redeem · Me |
| **Bottom sheet** | Paper, `radius-xl` top, grabber, `shadow-sheet` | manual add · report · filters |
| **Empty state** | 32px `icon-tertiary`, `heading-3`, one line, action | no results · no coupons · shelf empty |

## 9. Layout patterns
- **Standard screen (v0.5):** flat `surface-canvas` (`#F6F1E7`) → screen title (Fraunces, Pantry Green) or greeting header → content stack of 16px cards (gap 16, gutter 20) → tab bar. Detail screens add a top bar with Back.
- **Map screen (v0.4):** full-bleed map under the status bar; search, chips, count pill and Map / List toggle float above it; tab bar stays.
- **Task screen** (tap the tag, check and tap, go live): `surface-brand`, Paper text, no tab bar, a clear Cancel.
- **Confirmation screen:** `display` headline in `text-brand` ("Thanks for sharing." / "Pickup logged."), a summary card and one next action. The giver's confirmation includes the light coupon card.
- **Flow steps (v0.5 Step header):** an `overline` reading "Step n of 3" over a Terracotta 500 progress bar: 1 Tap the tag · 2 Photograph your items (before placing) · 3 Check the items and place them.

## 10. CSS tokens
```css
:root{
  /* primitives */
  --green-950:#172E20; --green-900:#1F3D2B; --green-700:#3F5B3A; --green-100:#CFE3C8;
  --terracotta-800:#89432D; --terracotta-700:#A14C33; --terracotta-500:#C2593A; --terracotta-100:#F0DFD2;
  --ochre-800:#876326; --ochre-500:#BF8B2E; --ochre-100:#EFE5D1; --clay-500:#8A6F4A;
  --ink-900:#2B241E; --stone-700:#5C554C; --stone-600:#6E665C; --stone-500:#8C8477; --stone-300:#CFC6B6;
  --oat-200:#E9DFCC; --cream-100:#F6F1E7; --paper-0:#FFFFFF;
  --sand-200:#E8D7B9; --stone-200:#E6DED0;
  --map-land:#FFFFFF; --map-road:#D9DED8; --map-road-main:#798C75; --map-water:#85D5EB;
  --success-700:#2C6E46; --warning-600:#A86A12; --slate-600:#51666D; --info-600:#2F6E8C;
  /* text */
  --text-primary:var(--ink-900); --text-secondary:var(--stone-700); --text-tertiary:var(--stone-600); --text-disabled:var(--stone-500);
  --text-brand:var(--green-900); --text-accent:var(--terracotta-700); --text-reward:var(--ochre-800); --text-link:var(--green-900);
  --text-on-primary:var(--paper-0); --text-on-accent:var(--paper-0); --text-on-reward:var(--ink-900);
  --text-problem:var(--slate-600); --text-success:var(--success-700);
  --text-on-inverse:var(--paper-0); --text-on-inverse-secondary:var(--stone-200); --text-on-unavailable:var(--paper-0);
  /* icons */
  --icon-primary:var(--green-900); --icon-secondary:var(--stone-700); --icon-tertiary:var(--clay-500); --icon-disabled:var(--stone-500);
  --icon-accent:var(--terracotta-500); --icon-reward:var(--ochre-800); --icon-on-primary:var(--paper-0);
  --icon-neutral:var(--ink-900); --icon-on-inverse:var(--ochre-500); --icon-on-brand-soft:var(--green-100);
  --icon-success:var(--success-700); --icon-warning:var(--warning-600); --icon-problem:var(--slate-600); --icon-info:var(--info-600);
  /* surfaces, borders, actions */
  --surface-canvas:var(--cream-100); --surface-default:var(--paper-0); --surface-subtle:var(--oat-200); --surface-selected:var(--green-100);
  --surface-brand:var(--green-900); --surface-accent:var(--terracotta-500); --surface-accent-subtle:var(--terracotta-100);
  --surface-reward:var(--ochre-500); --surface-reward-subtle:var(--ochre-100);
  --surface-inverse:var(--ink-900); --surface-brand-soft:var(--green-700);
  --surface-indicator:var(--green-100); --surface-track:var(--cream-100); --surface-segment:var(--oat-200); --surface-unavailable:var(--terracotta-700);
  --surface-progress:var(--terracotta-500); --surface-progress-track:var(--oat-200);
  --border-subtle:var(--stone-300); --border-strong:var(--stone-500); --border-brand:var(--green-900); --border-focus:var(--info-600);
  --action-primary:var(--green-900); --action-primary-hover:var(--green-700); --action-primary-pressed:var(--green-950);
  --action-accent:var(--terracotta-700); --action-accent-pressed:var(--terracotta-800); --action-disabled:var(--oat-200);
  --map-park:var(--green-100); --map-marker:var(--ink-900);
  /* type */
  --font-serif:Fraunces,Georgia,serif; --font-sans:Rubik,system-ui,-apple-system,sans-serif;
  /* spacing (multiples of 4) */
  --space-4:4px; --space-8:8px; --space-12:12px; --space-16:16px; --space-20:20px; --space-24:24px;
  --space-28:28px; --space-32:32px; --space-40:40px; --space-48:48px; --space-56:56px; --space-64:64px;
  /* radius */
  --radius-none:0; --radius-xs:4px; --radius-sm:8px; --radius-md:12px; --radius-lg:16px; --radius-xl:24px; --radius-full:999px;
  /* elevation and focus */
  --shadow-card:0 1px 2px rgba(43,36,30,.08),0 8px 24px rgba(43,36,30,.08);
  --shadow-sheet:0 -4px 24px rgba(43,36,30,.12);
  --shadow-focus:0 0 0 2px #FFFFFF,0 0 0 5px #2F6E8C;
  /* size and motion */
  --size-tap-min:44px; --size-control:48px; --frame-max:430px; --size-avatar:48px; --size-tab-indicator:64px;
  --motion-fast:150ms; --motion-base:250ms; --ease:cubic-bezier(.2,0,0,1);
}
```

## 11. Frames
Put PNG exports at 2x in `frames/`, named by screen code (`frames/G04-tap-the-tag.png`). Frames in the repo: `M01-home`, `G02-map` (also used for R01), `G08-coupons`, `M02-me`, plus the **v0.5 hi-fi mocks** (G04, G05, G06, G07, G08-coupons-v2, G08d, R01b, R03, R04, R05, R06, H01–H07, M01-home-v2, M02-me-v2). The mocks set **layout and the airy feel**; colours follow this file (see `docs/open-questions.md`, "Mocks vs kit"). When a frame and this file disagree on styling, **this file wins**; v0.4 already resolves the known differences (grey text, gold icons on Forest, coupon values, unnumbered markers, terracotta chip contrast, help icon). Note the difference in `docs/open-questions.md`.

## 12. Still open
Coupon value and funding · logo and master identity (use the Fraunces Bold text wordmark for now) · dark mode (not planned) · photo style (use labelled warm placeholders on `surface-subtle`).
