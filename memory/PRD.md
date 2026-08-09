# GRAFENA 2026 — Landing Page PRD

## Original Problem Statement
Landing page untuk acara GRAFENA 2026 — orientasi maba prodi Teknologi Industri Kimia (TIK) D4 Unpad, 8 minggu (5 Sep – 24 Okt 2026, Pramabim 29 Agustus). Tema: perjalanan Bumi → luar angkasa (dari "sendirian" jadi "satu angkatan"). Palet Aurora Dreamy dengan gradasi progresif per section. Font Fredoka (heading) + Poppins (body). Maskot astronot chibi "Astro". Fitur inti: "Kunci Orbit" — 8 gerbang orbit dengan sistem password + localStorage.

## User Choices
- Frontend-only (tanpa backend/database)
- Maskot: placeholder (di-generate custom chibi astronaut)
- Password: placeholder nama planet (user akan beri daftar sendiri nanti)
- Konten reveal: placeholder image + teks dummy
- Font heading: Fredoka

## Architecture
- React SPA (CRA + craco), Tailwind + shadcn, framer-motion (motion), lenis (smooth scroll), sonner (toast)
- No backend used. State/progress persisted in browser localStorage (key: `grafena_orbit_progress_v1`)
- Sections: Hero → Marquee → About → Mascot → Kunci Orbit → Gallery → Video Teaser → Contact

## Core Requirements (static)
- Fully responsive, mobile-first
- Smooth scroll + section reveal animations
- Kunci Orbit: 8 sequential gates, gate 1 ready, others locked; correct password unlocks + cascades next to ready; wrong password → error; persistence via localStorage; distinct locked vs unlocked visuals
- Placeholder text/images throughout

## Implemented (2026-06-09)
- Kinetic hero with masked line-by-line reveal, parallax stars/planet, aurora blobs, orbit rings, CTA "Mulai Perjalanan" (Lenis scroll to About)
- Editorial marquee tagline
- About (3 numbered chapters), Mascot section with custom-generated "Astro" chibi astronaut (2 images)
- Kunci Orbit feature — fully functional (verified 100% by testing agent): unlock cascade, error handling, progress bar + count, reset button, localStorage persistence
- Instagram-like bento gallery (6 placeholder images), 9:16 vertical video teaser placeholder, Contact/CTA with Instagram + email placeholders
- Sticky glass navbar appearing on scroll
- Data-testids on all interactive elements

## Passwords (placeholder, in /app/frontend/src/data/orbits.js)
W1 MERKURIUS · W2 VENUS · W3 BUMI · W4 MARS · W5 JUPITER · W6 SATURNUS · W7 URANUS · W8 NEPTUNUS

## Backlog / Remaining
- P1: Replace placeholder passwords/reveal content/outfit images with real content
- P1: Real mascot name + final Astro artwork; real Instagram handle & committee contact
- P2: Embed real teaser Reels video
- P2: Countdown timer to launch date; mobile hamburger nav menu
- P2: Real event photos in gallery

## Next Tasks
- Await user's real passwords, content, links, and assets to swap out placeholders
