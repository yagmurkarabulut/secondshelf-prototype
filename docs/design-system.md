# SecondShelf design system: UI Kit v0.3

> Approved by the team on 10 Nov 2026. It merges Kathy's kit (the base) with the warm Elements kit (ochre, terracotta, warm neutrals, Fraunces + Rubik, 4px rhythm).
> Source of truth: the "SecondShelf UI Kit v0.3 (merged)" design system artifact. This file mirrors it for Claude Code.
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
| `clay-500` | `#8A6F4A` | Clay: tertiary and decorative icons only |
| `ink-900` | `#2B241E` | Ink (warm) |
| `stone-700` | `#5C554C` | Warm stone, secondary text |
| `stone-600` | `#6E665C` | Warm stone, tertiary text |
| `stone-500` | `#8C8477` | Warm stone, control outlines, disabled |
| `stone-300` | `#CFC6B6` | Warm stone, decorative dividers only |
| `oat-200` | `#E9DFCC` | Oat |
| `cream-100` | `#F4EDE1` | Cream (canvas) |
| `paper-0` | `#FFFFFF` | Paper |
| `success-700` | `#2C6E46` | Success |
| `warning-600` | `#A86A12` | Warning (icons only) |
| `slate-600` | `#51666D` | Slate: problems. **No red anywhere.** |
| `info-600` | `#2F6E8C` | Info, focus ring |

### 2.2 Text
| Token | → | Contrast on Cream | Use |
|---|---|---|---|
| `text-primary` | ink-900 | 13.1 | Body, item names, input values |
| `text-secondary` | stone-700 | 6.3 | Meta, descriptions, field labels |
| `text-tertiary` | stone-600 | 4.9 | Placeholders, hints, timestamps. On Cream or Paper only, not on Oat |
| `text-disabled` | stone-500 | 3.2 | Disabled only |
| `text-brand` | green-900 | 10.3 | Headings, brand moments |
| `text-accent` | terracotta-700 | 5.0 | Highlights, sparingly |
| `text-reward` | ochre-800 | 4.7 | Reward labels on Cream and Paper |
| `text-link` | green-900 | 10.3 | Links, always underlined |
| `text-on-primary` | paper-0 | 11.9 on green | Text on Pantry Green |
| `text-on-accent` | paper-0 | 5.8 on terracotta-700 | Text on terracotta buttons |
| `text-on-reward` | ink-900 | 4.9 on ochre-500 | Text on ochre fills |
| `text-problem` | slate-600 | 5.2 | Error and problem messages |
| `text-success` | success-700 | 5.3 | Short success text (prefer icon + Ink) |

### 2.3 Icons
| Token | → | Use |
|---|---|---|
| `icon-primary` | green-900 | Navigation, actions, leading icons |
| `icon-secondary` | stone-700 | Meta icons, inactive tabs |
| `icon-tertiary` | clay-500 | Decorative and illustrative only |
| `icon-disabled` | stone-500 | Disabled |
| `icon-accent` | terracotta-500 | Feature icons (new shelf, giver moments) |
| `icon-reward` | ochre-800 | Coupon and Rescue Bonus |
| `icon-on-primary` | paper-0 | On green or terracotta-700 fills |
| `icon-success` · `icon-warning` · `icon-problem` · `icon-info` | success-700 · warning-600 · slate-600 · info-600 | Status, **always with an Ink label** |

### 2.4 Surfaces, borders, actions
| Token | → | Use |
|---|---|---|
| `surface-canvas` | cream-100 | Screen background |
| `surface-default` | paper-0 | Cards, sheets, inputs |
| `surface-subtle` | oat-200 | Notes, tips, open decisions |
| `surface-selected` | green-100 | Selected rows, completed steps, success banners |
| `surface-brand` | green-900 | Task screens (tap the tag), hero bands |
| `surface-accent` | terracotta-500 | Feature blocks with 24px+ text only |
| `surface-accent-subtle` | terracotta-100 | Quiet feature cards, Ink text |
| `surface-reward` | ochre-500 | Coupon band, Rescue Bonus fill, Ink text |
| `surface-reward-subtle` | ochre-100 | Coupon body, reward banners, Ink text |
| `border-subtle` | stone-300 | Decorative dividers |
| `border-strong` | stone-500 | Inputs, checkboxes, outline controls (3:1) |
| `border-brand` | green-900 | Secondary button outline, selected card |
| `border-focus` | info-600 | Focus ring on light surfaces |
| `action-primary` / `-hover` / `-pressed` | green-900 / green-700 / green-950 | Primary buttons |
| `action-accent` / `-pressed` | terracotta-700 / terracotta-800 | **One closing action per flow**: Confirm drop-off, Confirm pickup |
| `action-disabled` | oat-200 | Disabled button fill (with `text-disabled`) |

### 2.5 Colour rules
- **Ochre means "you earned something".** Use it only for coupons, the Rescue Bonus and thank-you moments.
- **Terracotta is never an error or a warning.** Problems are Slate, calm and with a clear way forward.
- Never put Ochre 500 as text or icons on Cream (2.6:1); use `ochre-800`. Never put Ochre 800 text on the ochre tint (4.4:1); use Ink.
- Normal-size text is never placed on `terracotta-500`.
- Stone 300 and Oat are never the only boundary of a control.
- Status = icon + shape + words. Never colour alone.

## 3. Typography

Fraunces Bold brings warmth; Rubik keeps instructions clear. Two families only.

| Token / class | Font | Size / line | Weight | Tracking | Use |
|---|---|---|---|---|---|
| `display` | Fraunces | 32 / 40 | 700 | -0.02em | One per screen: confirmations, onboarding |
| `heading-1` | Fraunces | 28 / 36 | 700 | -0.01em | Screen titles |
| `heading-2` | Fraunces | 24 / 32 | 700 | -0.01em | Section titles |
| `heading-3` | Fraunces | 20 / 28 | 700 | 0 | Card group titles (smallest Fraunces) |
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
- Headings are in `text-brand`, sentence case. Fraunces is never used under 20px, on buttons or in labels.
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
| `radius-sm` | 8 | Items **nested inside** a 12px card (thumbnails, inner tiles, stepper buttons, QR sketch) |
| `radius-md` | **12** | **Primary radius**: buttons, inputs, cards, banners, list tiles |
| `radius-lg` | 16 | Containers that hold other rounded items (dialogs, map card) |
| `radius-xl` | 24 | Top corners of bottom sheets |
| `radius-full` | 999 | Chips, badges, map markers, avatars, progress bars only |

Nested rule: inner radius = outer radius − padding. In practice, anything inside a `radius-md` card uses `radius-sm`.

## 6. Elevation, focus, size, motion
- `shadow-card`: `0 1px 2px rgba(43,36,30,.08), 0 8px 24px rgba(43,36,30,.08)`. For raised cards only; flat Paper on Cream is the default.
- `shadow-sheet`: `0 -4px 24px rgba(43,36,30,.12)`. For bottom sheets and fixed action bars.
- `shadow-focus`: `0 0 0 2px #FFFFFF, 0 0 0 5px #2F6E8C`. On dark fills, use a Paper ring instead.
- Sizes:
  - `size-tap-min` 44 · `size-control` 48 (buttons, inputs)
  - icons `16 / 20 / 24 / 32` (stroke 1.5 at 16, otherwise 2)
  - frame 390 × 844, layout max-width 430
- Motion:
  - `--motion-fast 150ms` (fades) · `--motion-base 250ms` (screen push) · `--ease cubic-bezier(.2,0,0,1)`
  - NFC scanning 1.2s; auto-advance after success 600ms
  - Respect `prefers-reduced-motion`

## 7. Iconography
SecondShelf icon library (`assets/icons/`): 24px grid, 2px stroke, round caps and joins, no fills.
- Use the `svg-currentcolor/` set or `sprite.svg` so colour comes from the icon tokens. The `svg/` set is hard-coded to forest `#3F5B3A`.
- Every meaningful icon has a visible label and sits in a 44 × 44px target.
- Key icons:
  - Actions and markers: `tap-nfc`, `sealed-food` (leave), `pickup-bag` (take), `location`, `filter`, `continue`
  - Status: `done`, `paused`, `needs-attention`
  - Rewards and host: `coupon`, `rescue-bonus`, `community-shelf` (host)

## 8. Components
Every component uses semantic tokens only and is built with all its states.

| Component | Recipe | States |
|---|---|---|
| **Button** | 48px, `radius-md`, padding 12/20, `button` type, optional 20px leading icon (gap 8) | Primary (`action-primary`) · Accent (`action-accent`, max one per flow) · Secondary (Paper + 1.5px `border-brand`) · Text link · default / hover / pressed / focus / loading / disabled |
| **Input** | Label above (`label`, `text-secondary`, gap 8); field 48px, `radius-md`, 1.5px `border-strong`, Paper, 16px text, placeholder `text-tertiary` | default · focus (`border-brand` + `shadow-focus`) · filled · error (`text-problem` border + flag icon + message under the field) · disabled |
| **Search field** | As Input with a search icon and clear button; suggestions list below (Paper, `radius-md`, `shadow-card`) | empty · typing with suggestions · results |
| **Filter chip** | `radius-full`, min 44px, `label` type, 16px side padding, gap 8 | default (Paper + `border-strong`) · selected (`action-primary` fill + tick + Paper text) |
| **Checkbox row** | 24px box `radius-xs` in a 44px target, label `body` | unchecked · checked (`action-primary`) · disabled |
| **Quantity stepper** | 44px buttons `radius-sm`, value `title` | default · min · max |
| **Card** | Paper, `radius-md`, padding 16, optional `shadow-card` | default · pressed · selected (`surface-selected` or `border-brand`) |
| **Action card** (Home) | Card + 40px Leaf icon tile `radius-sm` + `heading-3` + `body-small` in `text-secondary`. **Leave and Take are identical in size and style** | default · pressed |
| **Feature card** | `surface-accent-subtle`, `overline` in `text-accent`, `icon-accent` | default |
| **Status label** | Status icon + `text-primary` label (problems may use `text-problem`) | done · waiting/paused · problem · info |
| **Banner / toast** | `radius-md`, padding 12/16, icon + text + optional action | success (`surface-selected`) · info (`surface-subtle`) · problem (Paper + Slate text) · reward (`surface-reward-subtle`) |
| **Coupon card** | `radius-md`, `shadow-card`; band `surface-reward` + `text-on-reward`; body `surface-reward-subtle`; headline `heading-3`; QR sketch `radius-sm` | active · used · expired · pending; values say "To be agreed" |
| **Rescue Bonus progress** | 8px bar `radius-full`, ochre-500 on Paper, label "n of N picked up · pending" | 0 · partial · complete · expired |
| **NFC tap card** | On `surface-brand`: illustration, instruction in `text-on-primary`, status, fallback links | idle · scanning · found · not found · QR fallback |
| **Food item row** | Thumb `radius-sm`, `title`, best-before `body-small`, sealed badge, stepper, remove | default · edited · removed (Undo toast) · checkbox variant (receiver) |
| **Map marker** | Numbered circle `radius-full`: Paper fill, green border, bold number | default · selected (solid green + Leaf halo) · full · paused · closed; legend "Numbers identify shelves, not item counts" |
| **Steward check row** | Item + reason + **Keep / Remove** 44px buttons | to check · kept · removed · flagged |
| **Activity log row** | Icon, event, time, anonymised donor ref | drop-off · pickup · coupon redeemed · check done |
| **Top bar** | Back, title (`title`), optional action | default · on `surface-brand` |
| **Tab bar** | 4 tabs, icon + `label`; active `icon-primary`, inactive `icon-secondary` | consumer: Home · Map · Coupons · Me; host: Dashboard · Check · Redeem · Me |
| **Bottom sheet** | Paper, `radius-xl` top, grabber, `shadow-sheet` | manual add · report · filters |
| **Empty state** | 32px `icon-tertiary`, `heading-3`, one line, action | no results · no coupons · shelf empty |

## 9. Layout patterns
- **Standard screen:** `surface-canvas` → top bar → content stack (gap 16, gutter 20) → primary action in the bottom area → tab bar.
- **Task screen** (tap the tag, check and tap, go live): `surface-brand`, Paper text, no tab bar, a clear Cancel.
- **Confirmation screen:** `display` headline ("Thanks for sharing." / "Pickup logged."), a summary card and one next action. The giver's confirmation includes the coupon card.
- **Flow steps:** an `overline` reading "Step n of 3": 1 Tap the tag · 2 Photograph your items (before placing) · 3 Check the items and place them.

## 10. CSS tokens
```css
:root{
  /* primitives */
  --green-950:#172E20; --green-900:#1F3D2B; --green-700:#3F5B3A; --green-100:#CFE3C8;
  --terracotta-800:#89432D; --terracotta-700:#A14C33; --terracotta-500:#C2593A; --terracotta-100:#F0DFD2;
  --ochre-800:#876326; --ochre-500:#BF8B2E; --ochre-100:#EFE5D1; --clay-500:#8A6F4A;
  --ink-900:#2B241E; --stone-700:#5C554C; --stone-600:#6E665C; --stone-500:#8C8477; --stone-300:#CFC6B6;
  --oat-200:#E9DFCC; --cream-100:#F4EDE1; --paper-0:#FFFFFF;
  --success-700:#2C6E46; --warning-600:#A86A12; --slate-600:#51666D; --info-600:#2F6E8C;
  /* text */
  --text-primary:var(--ink-900); --text-secondary:var(--stone-700); --text-tertiary:var(--stone-600); --text-disabled:var(--stone-500);
  --text-brand:var(--green-900); --text-accent:var(--terracotta-700); --text-reward:var(--ochre-800); --text-link:var(--green-900);
  --text-on-primary:var(--paper-0); --text-on-accent:var(--paper-0); --text-on-reward:var(--ink-900);
  --text-problem:var(--slate-600); --text-success:var(--success-700);
  /* icons */
  --icon-primary:var(--green-900); --icon-secondary:var(--stone-700); --icon-tertiary:var(--clay-500); --icon-disabled:var(--stone-500);
  --icon-accent:var(--terracotta-500); --icon-reward:var(--ochre-800); --icon-on-primary:var(--paper-0);
  --icon-success:var(--success-700); --icon-warning:var(--warning-600); --icon-problem:var(--slate-600); --icon-info:var(--info-600);
  /* surfaces, borders, actions */
  --surface-canvas:var(--cream-100); --surface-default:var(--paper-0); --surface-subtle:var(--oat-200); --surface-selected:var(--green-100);
  --surface-brand:var(--green-900); --surface-accent:var(--terracotta-500); --surface-accent-subtle:var(--terracotta-100);
  --surface-reward:var(--ochre-500); --surface-reward-subtle:var(--ochre-100);
  --border-subtle:var(--stone-300); --border-strong:var(--stone-500); --border-brand:var(--green-900); --border-focus:var(--info-600);
  --action-primary:var(--green-900); --action-primary-hover:var(--green-700); --action-primary-pressed:var(--green-950);
  --action-accent:var(--terracotta-700); --action-accent-pressed:var(--terracotta-800); --action-disabled:var(--oat-200);
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
  --size-tap-min:44px; --size-control:48px; --frame-max:430px;
  --motion-fast:150ms; --motion-base:250ms; --ease:cubic-bezier(.2,0,0,1);
}
```

## 11. Frames
Put PNG exports at 2x in `frames/`, named by screen code (`frames/G04-tap-the-tag.png`). When a frame and this file disagree on styling, **this file wins** (the frames may predate v0.3). Note the difference in `docs/open-questions.md`.

## 12. Still open
Coupon value and funding · logo and master identity (use the Fraunces Bold text wordmark for now) · dark mode (not planned) · photo style (use labelled warm placeholders on `surface-subtle`).
