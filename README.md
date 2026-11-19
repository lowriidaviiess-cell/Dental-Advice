# Dental Advice

A standalone, image-free responsive website for the Dental Advice project.

## Files

- `index.html` — homepage, navigation, service cards, about section, full article and contact section.
- `style.css` — responsive visual system, gradients, abstract CSS shapes, hover states and animations.
- `script.js` — mobile navigation and light scroll-aware behavior.

## Run locally

Open `index.html` directly in a browser, or run a local static server from this folder:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Notes

The only link inside the article content is the requested `dentist rozelle` anchor in paragraph two. The site has no image assets; all visual decoration is CSS-generated. The font import uses Google Fonts, but the site remains readable with the system fallback if external font loading is unavailable.
