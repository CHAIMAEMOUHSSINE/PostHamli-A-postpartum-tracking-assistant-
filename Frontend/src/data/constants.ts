import type { MoodOption, DayData, Movement, JournalEntry } from "../types";

export const MOODS: MoodOption[] = [
  { s: 1, e: "😢", l: "Very Low" }, { s: 2, e: "😔", l: "Low" },
  { s: 3, e: "😕", l: "Uneasy" },  { s: 4, e: "😐", l: "Neutral" },
  { s: 5, e: "🙂", l: "Okay" },    { s: 6, e: "😊", l: "Good" },
  { s: 7, e: "😄", l: "Great" },   { s: 8, e: "🥰", l: "Wonderful" },
  { s: 9, e: "🌟", l: "Radiant" },
];

export const WEEK: DayData[] = [
  { day: "Lun", mood: 5, sleep: 6, water: 6, energy: 4 },
  { day: "Mar", mood: 4, sleep: 5, water: 5, energy: 3 },
  { day: "Mer", mood: 6, sleep: 7, water: 7, energy: 6 },
  { day: "Jeu", mood: 5, sleep: 6, water: 8, energy: 5 },
  { day: "Ven", mood: 7, sleep: 8, water: 7, energy: 7 },
  { day: "Sam", mood: 6, sleep: 7, water: 6, energy: 6 },
  { day: "Dim", mood: 7, sleep: 7, water: 8, energy: 7 },
];

export const MOVES: Movement[] = [
  { id:1, emoji:"🌿", name:"Gentle Neck Rolls", dur:"2 min", color:"#fce4ec", accent:"#e91e8c",
    steps:["Sit tall, shoulders relaxed","Slowly drop chin to chest","Roll head gently to right shoulder","Continue to back, then left shoulder","Complete 3-5 circles each direction"],
    benefit:"Releases tension from holding & feeding baby" },
  { id:2, emoji:"✨", name:"Shoulder Releases", dur:"3 min", color:"#f3e5f5", accent:"#9c27b0",
    steps:["Sit or stand tall","Inhale — lift shoulders to ears","Hold for 3 counts","Exhale — drop them completely","Roll backward 5 times, forward 5 times"],
    benefit:"Perfect after feeding or babywearing" },
  { id:3, emoji:"🌸", name:"Mindful Walking", dur:"10–15 min", color:"#e8f5e9", accent:"#388e3c",
    steps:["Step outside or walk slowly inside","Begin with three deep breaths","Walk at an effortless pace","Feel each footstep — heel, then toe","Notice light, sounds, air on skin","If thoughts arise, return to your breath"],
    benefit:"Gentle cardio, fresh air & mental clarity" },
  { id:4, emoji:"🌺", name:"Cat-Cow Stretch", dur:"5 min", color:"#fff8e1", accent:"#f57c00",
    steps:["Come onto hands and knees","Inhale — belly drops, lift head and tailbone (Cow)","Exhale — round spine, tuck chin (Cat)","Move fluidly with each breath","Repeat 8–10 slow cycles","Rest in child's pose"],
    benefit:"Relieves back pain & restores flexibility" },
  { id:5, emoji:"💫", name:"Deep Belly Breathing", dur:"5 min", color:"#e3f2fd", accent:"#1976d2",
    steps:["Sit comfortably, one hand on belly","Breathe in through nose for 4 counts","Feel belly expand like a gentle wave","Hold softly for 2 counts","Exhale through lips for 6 counts","Let body soften with each breath"],
    benefit:"Reduces cortisol and activates calm response" },
];

export const DEMO_ENTRIES: JournalEntry[] = [
  { id:1, date:"6 Mars 2026", time:"9:14", mood:6,
    text:"Ce matin était doux et inattendu. Bébé m'a souri et j'ai senti mon coeur s'ouvrir d'une façon que je ne connaissais pas encore.",
    tags:["gratitude","douceur"] },
  { id:2, date:"5 Mars 2026", time:"23:32", mood:4,
    text:"Nuit difficile. Trois réveils. J'ai pleuré un peu. Puis je suis revenue et j'ai regardé son souffle — et ça a suffi.",
    tags:["fatigue","tendresse"] },
  { id:3, date:"3 Mars 2026", time:"14:45", mood:5,
    text:"Petite promenade dehors. La première depuis une semaine. L'air sentait le printemps.",
    tags:["dehors","air frais"] },
];

// OpenAI
export const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
export const OPENAI_MODEL   = "gpt-4o-mini";
