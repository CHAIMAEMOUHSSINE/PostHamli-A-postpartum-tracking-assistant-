// ─── Types ────────────────────────────────────────────────────────────────────

export interface MoodOption {
  s: number;
  e: string;
  l: string;
}

export interface DayData {
  day: string;
  mood: number;
  sleep: number;
  water: number;
  energy: number;
}

export interface Movement {
  id: number;
  emoji: string;
  name: string;
  dur: string;
  color: string;
  accent: string;
  steps: string[];
  benefit: string;
}

export interface JournalEntry {
  id: number;
  date: string;
  time: string;
  mood: number;
  text: string;
  tags: string[];
}

export type PageId = "home" | "journal" | "tracker" | "movements" | "wellness";
