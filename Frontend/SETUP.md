# PostHamli — Setup Guide

## Requirements
- Node.js 18+ (https://nodejs.org)
- An OpenAI API key (https://platform.openai.com/api-keys)

## Setup Steps

### 1. Clone / extract the project
```bash
cd posthamli
```

### 2. Create your .env file
Copy the example and add your key:
```bash
cp .env.example .env
```
Then edit `.env` and replace the placeholder:
```
VITE_OPENAI_API_KEY=sk-your-actual-openai-key
```

### 3. Install dependencies
```bash
npm install
```

### 4. Run the app
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

## Languages supported
| Language | Code | Notes |
|---|---|---|
| Français | fr | Default |
| English | en | Full support |
| العربية | ar | RTL, classical Arabic |
| الدارجة | darija | RTL, Moroccan dialect |

## AI Chatbot
- Powered by **OpenAI GPT-4o-mini** via `VITE_OPENAI_API_KEY`
- Each language has its own system prompt tuned for that language/culture
- Darija system prompt is written in authentic Moroccan dialect
- Crisis detection: if AI detects distress signals, [ESCALATE] triggers the crisis modal

## Deployment (Vercel)
1. Push to GitHub
2. Import in Vercel
3. Add `VITE_OPENAI_API_KEY` in Vercel environment variables
4. Deploy!
