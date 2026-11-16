# Venue and community photos: slots and credits

Photos come from **Unsplash** and are used under the [Unsplash License](https://unsplash.com/license): free to use, commercial or not, without permission. Attribution isn't required, but we credit every photographer here. The licence doesn't allow selling unaltered copies or building a competing photo service.

**Status (15 Nov):** no photos chosen yet. From the build session, Unsplash photo pages and download links sat behind a bot check, and the Unsplash API needs a key, so no image IDs could be read. To keep the rule "don't invent photo IDs", every slot is still empty, and the app shows the labelled placeholders.

## How to add a photo (about 1 minute each)
1. Open the photo on unsplash.com, right-click the large image and choose **Copy image address**. You get a URL starting with `https://images.unsplash.com/photo-…`.
2. Keep only the part up to `?` and add `?w=800&q=70&auto=format&fit=crop`.
3. Paste it into the matching slot in `index.html` (search for `const PHOTOS = {`).
4. Add a row to the credits table below.

Or download the image (about 800 px wide, WebP or JPEG, under 120 KB) into this folder and use `assets/photos/<name>.jpg` as the slot value.

## Slots
| Slot | Used for | Keywords | Look for |
|---|---|---|---|
| `cafe` | Café Daisy and every third café (Home card, map sheet, G03 / G03b, R03) | cafe, community, jar | Warm natural-light café counter, shelves with jars |
| `cafe2` | Café Lumi and every third café | cafe, pantry shelf | Bright café interior with wooden shelves |
| `cafe3` | Other cafés | cafe, restaurant | Calm, colourful café corner |
| `bistro` | Bistro Olive, Bistro Thyme, Riverside Bistro | bistro | Bistro interior with plants, wooden tables |
| `restaurant` | Green Bowl, Noodle Bar Ume, Soup & Bread, Falafel Corner, Dumpling House, Taco Garden | restaurant | Warm restaurant interior, no diners in focus |
| `pizzeria` | Pizza Nonna, Pizzeria Forno, Pizza Corte | pizzeria | Pizzeria counter or oven corner (no logos) |
| `bakery` | Corner Bakery, Morning Bakery, Bakery Kringel, Bagel Shop Orbit | bakery | Bread on wooden shelves, bakery counter |
| `grocery` | Village Grocer, Organic Pantry | pantry shelf, jar | Dry goods in glass jars on shelves |
| `deli` | Deli Marta, Market Hall Deli | jar, pantry shelf | Deli shelf with jars (no alcohol in focus) |
| `tearoom` | Tea Room Saga | cafe, jar | Tea tins or jars on a café shelf |
| `canteen` | Canteen 12 | restaurant | Bright, simple canteen counter |
| `hostShelf` | H01 "Café with a community shelf" | community, pantry shelf | Café shelf with jars and packs |
| `avatar` | Brenda (Home greeting, Me) | portrait | One friendly portrait |

Empty slots fall back to `cafe`, then to the placeholder. Avoid: faces as the subject (except the avatar), visible brand logos, alcohol as the focus, and anything that looks like charity or a food bank (donation boxes, queues).

## Candidate pages found by web search (not checked visually)
Unsplash photo pages, not image URLs. Open them, check the look, then copy the image address as described above.
- Jars on a white wooden shelf, Luisa Brimble: https://unsplash.com/photos/assorted-glass-jars-on-white-wooden-shelf-i-GPyFK_SJg (`grocery`, `hostShelf`)
- Wooden shelf with jars of food, Ray Shrewsberry: https://unsplash.com/photos/a-wooden-shelf-filled-with-lots-of-jars-of-food-bhni1zsPiio (`deli`)
- Three glass jars on a shelf, Megan Qualley: https://unsplash.com/photos/NHyjfBlC2xI (`tearoom`)
- Cozy café interior with warm lighting: https://unsplash.com/photos/a-cozy-cafe-interior-with-warm-lighting-and-furniture-0i5clWZBit0 (`cafe`)
- Colourful café interior with plants and artwork: https://unsplash.com/photos/colorful-cafe-interior-with-plants-and-artwork-584-Px6_s8Q (`cafe2`)
- Café with a blue tiled counter: https://unsplash.com/photos/a-cafes-interior-featuring-blue-tiled-counter-HOC7ZexWhlQ (`cafe3`)
- Restaurant with plants on the wall, Polina Kuzovkova: https://unsplash.com/photos/a-restaurant-with-tables-and-chairs-with-plants-on-the-wall-F86IbrHHee0 (`restaurant`)
- Rustic restaurant with wooden beams, Roshan lanova: https://unsplash.com/photos/rustic-restaurant-interior-with-wooden-beams-and-tables-YnXvyvHVKjs (`bistro`)
- Hanging vine plants over dining tables, Toa Heftiba: https://unsplash.com/photos/hanging-vine-plants-over-dining-tables-TwtUYtDOv6w (`bistro`, alternative)
- Bakery interiors: https://unsplash.com/s/photos/bakery-interior (`bakery`)
- Pizzeria interiors: https://unsplash.com/s/photos/italian-restaurant-interior (`pizzeria`)

## Credits
| Slot | Photographer | Unsplash URL |
|---|---|---|
| — | — | — |
