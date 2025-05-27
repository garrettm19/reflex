import { create } from 'zustand';

type MascotState =
  | 'idle'
  | 'celebrate'
  | 'warning'
  | 'presenting'
  | 'thinking'
  | 'money'
  | 'welcome'
  | 'tip'
  | 'clap';

export const useMascotStore = create<{
  state: MascotState;
  message: string;
  setState: (s: MascotState, msg?: string) => void;
  reset: () => void;
}>((set) => ({
  state: 'idle',
  message: '',
  setState: (state, message = '') => set({ state, message }),
  reset: () => set({ state: 'idle', message: '' }),
}));
