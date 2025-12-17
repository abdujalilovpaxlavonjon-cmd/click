# Mini Marketplace (SPA)

A small marketplace SPA where:
- **Products** are rendered using **Vanilla JS** (no React)
- **Cart** is a separate **React zone** with **localStorage** persistence

## Author
- **Name:** Abdujalilov Paxlavonjon
- **Time spent:** 6-8 hours (edit)
- **Hard parts:** Vanilla JS → React integration via CustomEvent, localStorage syncing (edit)
- **Demo:** https://YOUR_DEMO_LINK (add)

## Screenshots
### Desktop (2 columns)
![Desktop](./screenshots/desktop.png)

### Mobile (stacked layout)
![Mobile](./screenshots/mobile.png)

### Cart filled
![Cart Filled](./screenshots/cart-filled.png)

## Tech Stack
- React (Vite)
- Vanilla JavaScript (fetch + DOM rendering)
- CSS (no UI frameworks)

## Requirements Checklist
- [x] Desktop: 2 columns layout
- [x] Mobile: stacked layout
- [x] Buttons have hover/active states
- [x] Products fetched from https://fakestoreapi.com/products
- [x] Product card shows image/title/price/add button
- [x] Cart is React-only zone (separate part of page)
- [x] Cart: add/remove, item count, total sum
- [x] useState + useEffect (localStorage)

## How to Run Locally
```bash
npm install
npm run dev
