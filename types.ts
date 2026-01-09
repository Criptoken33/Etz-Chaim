export type World = 'Atziluth' | 'Briah' | 'Yetzirah' | 'Assiah';

export interface Sefira {
  id: string;
  number: number;
  name: string;
  hebrewName: string;
  transliteration: string;
  meaning: string;
  description: string;
  colors: Record<World, string>; // Mapping world to Tailwind class
  pillar: 'Misericordia' | 'Rigor' | 'Equilibrio';
  virtue: string;
  vice: string;
  question: string;
  planet: string;
  bodyPart: string;
  archetype: string;
  practices: string[];
  affirmation: string;
  position: { x: number; y: number }; // Percentage 0-100
}

export interface Path {
  id: string;
  letter: string;
  letterName: string;
  gematria: number;
  sourceId: string;
  targetId: string;
  meaning: string;
  tarotCard: string;
  type: 'Madre' | 'Doble' | 'Simple';
  description: string;
  practice: string;
  color: string; // King's Scale color (Hex)
  mysticalPhrase: string;
}

export interface UserJournalEntry {
  id: string;
  date: string;
  sefirot: string[];
  path: string;
  reflection: string;
  integration: string;
}

export type ViewMode = 'tree' | 'practice' | 'simulator' | 'journal' | 'study';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}