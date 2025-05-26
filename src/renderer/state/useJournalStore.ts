import { create } from 'zustand';

interface JournalEntry {
  id: string;
  timestamp: string;
  rr: string;
  result: 'win' | 'loss' | 'be';
  notes: string;
  image?: string;
}

interface JournalStore {
  entries: JournalEntry[];
  addEntry: (entry: Omit<JournalEntry, 'id' | 'timestamp'>) => void;
}

export const useJournalStore = create<JournalStore>((set) => ({
  entries: [],
  addEntry: (entryData) => {
    const newEntry: JournalEntry = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      ...entryData,
    };

    console.log('[Journal Saved]', newEntry);

    set((state) => ({
      entries: [...state.entries, newEntry],
    }));
  },
}));
