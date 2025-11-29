import { useCheckInStore } from '../state/useCheckInStore';
import { useState } from 'react';

export default function CheckIn() {
  const checkIn = useCheckInStore((s) => s.checkIn);
  const checkedIn = useCheckInStore((s) => s.checkedInToday);
  const [response, setResponse] = useState<'yes' | 'no' | null>(null);

  const handleCheckIn = (traded: boolean) => {
    checkIn(traded);
    setResponse(traded ? 'yes' : 'no');
  };

  if (checkedIn) {
    return (
      <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-auto text-white shadow-2xl border border-emerald-500/20 animate-in fade-in duration-300">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-bold text-emerald-400 mb-1">
              All Set for Today
            </p>
            <p className="text-slate-300 text-sm">You've already checked in. See you tomorrow!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-auto text-white shadow-2xl border border-slate-700/50">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Did you trade today?</h2>
        <p className="text-slate-400 text-sm">Let's track your trading activity and build your streak</p>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => handleCheckIn(true)}
          className="flex-1 group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25 active:scale-95"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Yes, I traded
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </button>
        <button
          onClick={() => handleCheckIn(false)}
          className="flex-1 group relative overflow-hidden bg-gradient-to-r from-slate-600 to-slate-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-slate-500/25 active:scale-95"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            No trades today
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </button>
      </div>

      {response && (
        <div className={`p-4 rounded-xl border animate-in slide-in-from-bottom-2 duration-300 ${
          response === 'yes'
            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
            : 'bg-blue-500/10 border-blue-500/30 text-blue-300'
        }`}>
          <div className="flex items-start gap-3">
            <div className="text-2xl">
              {response === 'yes' ? '📈' : '🛡️'}
            </div>
            <p className="text-sm leading-relaxed">
              {response === 'yes'
                ? 'Great! Now let\'s log the details of your trade below to keep your journal up to date.'
                : 'Excellent discipline! Sometimes the best trade is no trade. Patience is key to long-term success.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
