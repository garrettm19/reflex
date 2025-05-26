import { create } from 'zustand';

interface CheckInEntry {
  date: string; // YYYY-MM-DD
  traded: boolean;
  timestamp: string;
}

interface CheckInStore {
  entries: CheckInEntry[];
  checkedInToday: boolean;
  checkIn: (traded: boolean) => void;
}

export const useCheckInStore = create<CheckInStore>((set, get) => ({
  entries: [],
  checkedInToday: false,
  checkIn: (traded: boolean) => {
    const today = new Date().toISOString().split('T')[0];

    if (get().checkedInToday) return;

    const entry: CheckInEntry = {
      date: today,
      traded,
      timestamp: new Date().toISOString(),
    };

    console.log('[Check-In Saved]', entry);

    set((state) => ({
      entries: [...state.entries, entry],
      checkedInToday: true,
    }));
  },
}));
