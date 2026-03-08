# PostHamli 🌸 — بوست حملي

> **"You are not alone after motherhood."**

PostHamli is a SaaS web application providing AI-powered emotional support for mothers experiencing postpartum depression. Built with React, TypeScript, and Claude API (Anthropic).

---

## ✨ Features

| Feature | Description |
|---|---|
| 💬 **AI Chat Companion** | Empathetic 24/7 chatbot powered by Claude Sonnet 4. Detects crisis signals and escalates to emergency resources. |
| 📓 **Emotional Journal** | Daily journaling with AI analysis — themes, mood score (0–9), personalized reflection. |
| 📊 **Daily Wellness Tracker** | Log mood, sleep, hydration, energy. Radar chart + 7-day area chart. |
| 🤸 **Gentle Movements** | 5 guided postpartum exercises with step-by-step instructions. |
| 🌸 **Wellness Toolbox** | Affirmations, 5-4-3-2-1 grounding, animated breathing exercise (4-4-6). |
| 🆘 **Crisis Detection** | Auto-detects `[ESCALATE]` from AI response → shows emergency modal with hotlines. |

---

## 🌍 Languages Supported

- 🇬🇧 English  
- 🇫🇷 Français  
- 🇲🇦 العربية (Arabic)  
- 🇲🇦 Darija (Moroccan Arabic)

---

## 🗂️ Project Structure

```
posthamli/
├── public/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── GlobalStyles.tsx
│   │   ├── Blossom.tsx
│   │   ├── Baby.tsx
│   │   ├── BottomNav.tsx
│   │   └── CrisisModal.tsx
│   ├── pages/               # Full page components
│   │   ├── Home.tsx
│   │   ├── Journal.tsx
│   │   ├── Tracker.tsx
│   │   ├── Movements.tsx
│   │   └── Wellness.tsx
│   ├── data/                # Static data & constants
│   │   └── constants.ts
│   ├── types/               # TypeScript interfaces
│   │   └── index.ts
│   ├── App.tsx              # Root app + routing
│   └── main.tsx             # Entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/your-username/posthamli.git
cd posthamli

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

> **Note:** The AI features call the Anthropic API directly from the browser (demo mode). For production, proxy through a backend to protect your API key.

---

## 🛠️ Tech Stack

- **Frontend:** React 18 + TypeScript
- **Styling:** CSS-in-JS (inline) + Global CSS classes
- **Charts:** Recharts (AreaChart, RadarChart)
- **AI:** Claude Sonnet 4 via Anthropic API (`claude-sonnet-4-20250514`)
- **Fonts:** Playfair Display + EB Garamond (Google Fonts)
- **Deploy:** Vercel

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary Pink | `#E91E8C` |
| Deep Pink | `#880E4F` |
| Baby Pink | `#FCE4EC` |
| Light Pink | `#F8BBD0` |
| Text | `#3D1F2A` |
| Muted | `#B07080` |

---

## 🏗️ Roadmap

- [x] MVP — all core pages
- [x] AI Chat with Claude API
- [x] Crisis detection & escalation
- [x] 4 languages incl. Darija
- [ ] Backend (Node.js + PostgreSQL)
- [ ] Authentication (Clerk)
- [ ] Push notifications
- [ ] React Native mobile app
- [ ] Therapist dashboard

---

## ⚠️ Disclaimer

PostHamli is an emotional support tool — **not a medical device**. In case of severe distress, the app always directs users to licensed mental health professionals and crisis hotlines.

---

## 🌸 Built With Love

Made for **Hackathon GenAI for Social Impact 2025**  
Powered by React + Claude API (Anthropic)

> *"You are not just surviving — you are blossoming."*
