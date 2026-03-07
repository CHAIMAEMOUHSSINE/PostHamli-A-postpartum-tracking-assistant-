import type { MoodOption, DayData, Movement, JournalEntry } from "../types";

export const MOODS: MoodOption[] = [
  { s: 1, e: "😢", l: "Very Low" },
  { s: 2, e: "😔", l: "Low" },
  { s: 3, e: "😕", l: "Uneasy" },
  { s: 4, e: "😐", l: "Neutral" },
  { s: 5, e: "🙂", l: "Okay" },
  { s: 6, e: "😊", l: "Good" },
  { s: 7, e: "😄", l: "Great" },
  { s: 8, e: "🥰", l: "Wonderful" },
  { s: 9, e: "🌟", l: "Radiant" },
];

export const AFFIRMATIONS: string[] = [
  "You are not just surviving — you are blossoming.",
  "Every breath you take is an act of love for your baby.",
  "You are stronger than yesterday, and gentler than you know.",
  "Rest is not laziness. Rest is wisdom.",
  "Your worth is not measured by your productivity.",
  "You are doing enough. You are enough.",
  "Healing is not linear, and neither is motherhood.",
  "You were chosen for this journey because you can walk it.",
];

export const WEEK: DayData[] = [
  { day: "Mon", mood: 5, sleep: 6, water: 6, energy: 4 },
  { day: "Tue", mood: 4, sleep: 5, water: 5, energy: 3 },
  { day: "Wed", mood: 6, sleep: 7, water: 7, energy: 6 },
  { day: "Thu", mood: 5, sleep: 6, water: 8, energy: 5 },
  { day: "Fri", mood: 7, sleep: 8, water: 7, energy: 7 },
  { day: "Sat", mood: 6, sleep: 7, water: 6, energy: 6 },
  { day: "Sun", mood: 7, sleep: 7, water: 8, energy: 7 },
];

export const MOVES: Movement[] = [
  {
    id: 1,
    emoji: "🌿",
    name: "Gentle Neck Rolls",
    dur: "2 min",
    color: "#fce4ec",
    accent: "#e91e8c",
    steps: [
      "Sit tall, shoulders relaxed",
      "Slowly drop chin to chest",
      "Roll head gently to right shoulder",
      "Continue to back, then left shoulder",
      "Complete 3–5 circles each direction",
    ],
    benefit: "Releases tension from holding & feeding baby",
  },
  {
    id: 2,
    emoji: "✨",
    name: "Shoulder Releases",
    dur: "3 min",
    color: "#f3e5f5",
    accent: "#9c27b0",
    steps: [
      "Sit or stand tall",
      "Inhale — lift shoulders to ears",
      "Hold for 3 counts",
      "Exhale — drop them completely",
      "Roll backward 5 times, forward 5 times",
    ],
    benefit: "Perfect after feeding or babywearing",
  },
  {
    id: 3,
    emoji: "🌸",
    name: "Mindful Walking",
    dur: "10–15 min",
    color: "#e8f5e9",
    accent: "#388e3c",
    steps: [
      "Step outside or walk slowly inside",
      "Begin with three deep breaths",
      "Walk at an effortless pace",
      "Feel each footstep — heel, then toe",
      "Notice light, sounds, air on skin",
      "If thoughts arise, return to your breath",
    ],
    benefit: "Gentle cardio, fresh air & mental clarity",
  },
  {
    id: 4,
    emoji: "🌺",
    name: "Cat-Cow Stretch",
    dur: "5 min",
    color: "#fff8e1",
    accent: "#f57c00",
    steps: [
      "Come onto hands and knees",
      "Inhale — belly drops, lift head & tailbone (Cow)",
      "Exhale — round spine, tuck chin (Cat)",
      "Move fluidly with each breath",
      "Repeat 8–10 slow cycles",
      "Rest in child's pose",
    ],
    benefit: "Relieves back pain & restores flexibility",
  },
  {
    id: 5,
    emoji: "💫",
    name: "Deep Belly Breathing",
    dur: "5 min",
    color: "#e3f2fd",
    accent: "#1976d2",
    steps: [
      "Sit comfortably, one hand on belly",
      "Breathe in through nose for 4 counts",
      "Feel belly expand like a gentle wave",
      "Hold softly for 2 counts",
      "Exhale through lips for 6 counts",
      "Let body soften with each breath",
    ],
    benefit: "Reduces cortisol & activates calm response",
  },
];

export const DEMO_ENTRIES: JournalEntry[] = [
  {
    id: 1,
    date: "March 6, 2026",
    time: "9:14 AM",
    mood: 6,
    text: "Had a surprisingly gentle morning. Baby smiled at me and I felt my heart expand in a way I didn't know was possible. Still tired, but a different kind of tired.",
    tags: ["gratitude", "gentle"],
  },
  {
    id: 2,
    date: "March 5, 2026",
    time: "11:32 PM",
    mood: 4,
    text: "Night was rough. Three wake-ups. I cried a little in the bathroom. Then I came back and watched her breathe and somehow that was enough.",
    tags: ["tired", "tender"],
  },
  {
    id: 3,
    date: "March 3, 2026",
    time: "2:45 PM",
    mood: 5,
    text: "Took a short walk outside today. First time in a week. The air smelled like spring.",
    tags: ["outside", "fresh air"],
  },
];

// Anthropic API model
export const CLAUDE_MODEL = "claude-sonnet-4-20250514";
export const ANTHROPIC_API_URL = "https://api.anthropic.com/v1/messages";
