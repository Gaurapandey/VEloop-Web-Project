# VELOOP Rewards

## Project Overview

VELOOP Rewards is a premium fintech-inspired rewards landing experience designed to explain five different earning and redemption flows in a trustworthy, polished way. The project includes a home page with five premium promotional banners and dedicated feature routes for each experience.

## Project Objective

The goal of the project is to showcase:

- Refer & Earn
- Swap Center
- Bonus VEs
- Captcha Tasks
- Exchange Center

Each banner is built as a premium fintech card with clear messaging, responsive behavior, and subtle micro-interactions while staying aligned with the dark reward platform design language.

## Banner List

1. Refer & Earn
2. Swap Center
3. Bonus VEs
4. Captcha Tasks
5. Exchange Center

## Features

- Premium dark fintech palette with navy, gold, silver, and soft blue accents
- Responsive banners for desktop, tablet, and mobile
- Reusable banner architecture with CSS Modules
- Smooth hover, elevation, arrow, and motion effects
- Route-based detail pages for each feature
- Accessible, click-friendly CTA buttons

## Technology Stack

- React
- Vite
- Bootstrap
- CSS Modules
- React Router
- React Icons
- Lucide React

## Folder Structure

```text
src/
├── components/
│   ├── RewardBanner/
│   │   ├── RewardBanner.jsx
│   │   └── RewardBanner.module.css
│   ├── ReferEarnBanner/
│   │   ├── ReferEarnBanner.jsx
│   │   └── ReferEarnBanner.module.css
│   ├── SwapCenterBanner/
│   │   ├── SwapCenterBanner.jsx
│   │   └── SwapCenterBanner.module.css
│   ├── BonusVEsBanner/
│   │   ├── BonusVEsBanner.jsx
│   │   └── BonusVEsBanner.module.css
│   ├── CaptchaTasksBanner/
│   │   ├── CaptchaTasksBanner.jsx
│   │   └── CaptchaTasksBanner.module.css
│   ├── ExchangeCenterBanner/
│   │   ├── ExchangeCenterBanner.jsx
│   │   └── ExchangeCenterBanner.module.css
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.module.css
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.module.css
├── pages/
│   ├── Home.jsx
│   ├── ReferEarn.jsx
│   ├── SwapCenter.jsx
│   ├── BonusVEs.jsx
│   ├── CaptchaTasks.jsx
│   └── ExchangeCenter.jsx
├── styles/
│   ├── globals.css
│   └── variables.css
├── App.jsx
├── index.css
├── main.jsx
└── assets/
```

## Installation Instructions

```bash
npm install
```

## Development Commands

```bash
npm run dev
npm run build
npm run preview
```

## Responsive Design

The application uses responsive breakpoints for desktop, tablet, and mobile. Banner layouts adjust to maintain clear hierarchy, readable text, and consistent 100% width while preserving the premium fintech look.

## Animation Details

Subtle motion is used across each banner for hover elevation, coin movement, reward-box motion, exchange icon rotation, and arrow transitions. The motion is restrained and designed to feel premium rather than flashy.

## Accessibility

- Keyboard-accessible buttons and links
- Visible focus states
- High contrast against a dark background
- Semantic HTML structure
- Touch-friendly targets

## Performance

- No heavy media dependencies
- CSS-based illustration work
- Lightweight vector-style visual system
- No unnecessary packages

## Screenshots

Add screenshots of the home page and feature pages here after running locally.

## Live Demo

Add your deployed Vercel or Netlify URL here.

## GitHub Repository

Add your GitHub repository URL here.

## Author

VELOOP Rewards UI redesign concept
