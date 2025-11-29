import { useState } from 'react';
import { useJournalStore } from '../state/useJournalStore';

export default function JournalForm() {
  const addEntry = useJournalStore((s) => s.addEntry);
  const [rr, setRR] = useState('');
  const [result, setResult] = useState<'win' | 'loss' | 'be'>('win');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!rr || !notes.trim()) {
      alert('Please enter both R:R and your notes.');
      return;
    }

    addEntry({ rr, result, notes });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm text-white p-8 rounded-2xl max-w-2xl mx-auto mt-8 shadow-2xl border border-emerald-500/20 animate-in fade-in duration-300">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2 text-emerald-400">Trade Logged Successfully!</h3>
            <p className="text-sm text-slate-300">Your entry has been saved to your journal</p>
          </div>
        </div>

        <div className="space-y-3 bg-slate-900/50 p-6 rounded-xl border border-slate-700/50">
          <div className="flex items-center gap-3">
            <span className="text-slate-400 text-sm font-medium min-w-[100px]">Risk:Reward</span>
            <span className="text-white font-semibold">{rr}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400 text-sm font-medium min-w-[100px]">Outcome</span>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
              result === 'win' ? 'bg-emerald-500/20 text-emerald-400' :
              result === 'loss' ? 'bg-red-500/20 text-red-400' :
              'bg-blue-500/20 text-blue-400'
            }`}>
              {result === 'win' ? 'Win' : result === 'loss' ? 'Loss' : 'Breakeven'}
            </span>
          </div>
          <div className="pt-2 border-t border-slate-700/50">
            <span className="text-slate-400 text-sm font-medium block mb-2">Notes</span>
            <p className="text-slate-200 text-sm leading-relaxed">{notes}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-auto text-white shadow-2xl border border-slate-700/50 mt-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Log Your Trade</h2>
        <p className="text-slate-400 text-sm">Document your trade details and reflections for future analysis</p>
      </div>

      <div className="space-y-6">
        <div className="group">
          <label className="block mb-2 text-sm font-medium text-slate-300 group-focus-within:text-emerald-400 transition-colors">
            Planned Risk:Reward Ratio
          </label>
          <div className="relative">
            <input
              type="text"
              value={rr}
              onChange={(e) => setRR(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              placeholder="e.g., 1:3"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="group">
          <label className="block mb-2 text-sm font-medium text-slate-300 group-focus-within:text-emerald-400 transition-colors">
            Trade Outcome
          </label>
          <div className="relative">
            <select
              value={result}
              onChange={(e) => setResult(e.target.value as any)}
              className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700/50 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all appearance-none cursor-pointer"
            >
              <option value="win">Win</option>
              <option value="loss">Loss</option>
              <option value="be">Breakeven</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="group">
          <label className="block mb-2 text-sm font-medium text-slate-300 group-focus-within:text-emerald-400 transition-colors">
            Trade Notes & Reflections
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
            rows={5}
            placeholder="What was your setup? How did you feel? What did you learn?"
          />
          <p className="mt-2 text-xs text-slate-500">Be detailed. Your future self will thank you.</p>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25 active:scale-95"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Submit Trade Entry
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </button>
      </div>
    </div>
  );
}
