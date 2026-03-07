# 🌸 PostHamli — Setup Guide

## ✅ Quick Start (Windows)

Open PowerShell or Command Prompt in the `posthamli` folder, then run these commands **one by one**:

```bash
# Step 1 — Install all dependencies (including Vite)
npm install

# Step 2 — Fix any security vulnerabilities
npm audit fix

# Step 3 — Start the development server
npm run dev
```

Then open your browser at: **http://localhost:5173**

---

## 🛠 Requirements

- **Node.js** version 18 or higher → https://nodejs.org
- **npm** version 8 or higher (comes with Node.js)

Check your versions:
```bash
node -v    # should be v18+
npm -v     # should be 8+
```

---

## ❓ Common Errors

| Error | Fix |
|-------|-----|
| `Missing script: "dev"` | Run `npm install` first, then `npm run dev` |
| `node: command not found` | Install Node.js from https://nodejs.org |
| Port 5173 already in use | Run `npm run dev -- --port 3000` |
| TypeScript errors | Run `npm install` again to ensure all `@types` are installed |

---

## 🚀 Deploy to Vercel (Free)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or connect your GitHub repo at **vercel.com** for automatic deploys.

---

## 📁 Project Structure

```
posthamli/
├── src/
│   ├── components/     # Reusable UI (Navbar, Modal, SVGs, Styles)
│   ├── pages/          # Full pages (Home, Journal, Tracker, Movements, Wellness)
│   ├── data/           # Constants (moods, affirmations, exercises)
│   ├── types/          # TypeScript interfaces
│   ├── App.tsx         # Root component + routing
│   └── main.tsx        # Entry point
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```
