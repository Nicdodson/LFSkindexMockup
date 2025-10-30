# Lovercraft Skindex  
*A dark-academia skin collection, verification & trading hub*

## Overview  
Lovercraft Skindex is a single-page web application that lets collectors catalogue, verify and trade in-game skins.  
The UI fuses “dark academia” aesthetics with eldritch-horror micro-interactions: think candle-lit library meets cosmic particle void.

## Stack  
- **HTML5 / Tailwind CSS** – structure & styling  
- **Vanilla JS** – all logic (no frameworks)  
- **p5.js** – animated particle background  
- **Anime.js** – micro-interactions & reveals  
- **ECharts.js** – collection analytics  
- **Splitting.js** – typographic flourishes  

## Pages  
| File | Purpose |
|---|---|
| `index.html` | Dashboard – filter, sort, paginate 1 200+ skins; upload verification proof; track streaks & value |
| `leaderboard.html` | Global rankings (collection size, trades, verification streaks); user hover-cards; time filters |
| `trade-center.html` | Create/accept trades; escrow chat; reputation badges; offer-vs-request split view |
| `community-gallery.html` | Photo feed; weekly challenges; likes/comments; infinite scroll masonry |

## Quick Start  
1. Clone or download the folder.  
2. Open any `.html` file in a modern browser—everything runs client-side.  
3. *(Optional)* place real images in `/resources` to replace placeholders.

## Key Scripts  
- `main.js` – shared state, skin database (1 000+ items), notification system, modal & filter engines  
- Page-specific inline scripts handle routing, chart initialisation and drag-drop uploads  

## Features  
✅ Real-time search & multi-criteria filtering  
✅ Drag-and-drop verification uploads with status tracking (Verified ⏳ Pending ❌ Unverified)  
✅ Paginated collection grid (20 items/page) with 3-D hover tilt  
✅ Secure trade workflow: offer ↔ request + integrated chat + reputation system  
✅ Particle background that reacts to mouse movement  
✅ Achievement toasts, countdown timers, keyboard shortcuts (`ESC` close, `Ctrl+K` search)  

## Data Model  
Each skin object:  
```js
{
  id: "vip5_pickaxe",
  name: "VIP5 Pickaxe",
  category: "vip",        // vip | purge | season5 | mythic | crate
  rarity: "legendary",    // common → mythic
  status: "verified",     // verified | pending | unverified
  image: "resources/skin-placeholder.jpg"
}
