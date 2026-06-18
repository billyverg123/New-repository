# VGL Phase 1 Offline Dashboard

This is a phone-friendly offline dashboard for Verguson Growth Lab Phase 1.

## Files
- index.html: main dashboard
- styles.css: design
- app.js: editable/checklist logic
- manifest.json: home-screen/PWA metadata
- service-worker.js: offline caching
- icons: app icons

## Important
For true iPhone home-screen app mode and offline caching, host this folder on HTTPS first.
Easy options:
1. Netlify Drop
2. GitHub Pages
3. Vercel

Then open the live link in Safari:
Share button → Add to Home Screen.

The dashboard saves your edits/checkmarks inside your phone browser using localStorage.
Use Export Backup JSON regularly so your progress is not trapped inside Safari like a tiny digital hostage.
