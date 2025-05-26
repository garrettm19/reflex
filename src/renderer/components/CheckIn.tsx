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
      <div className="bg-zinc-800 p-6 rounded-xl max-w-xl mx-auto text-white shadow-md">
        <p className="text-lg font-semibold text-green-400">
          ✅ You’ve already checked in today.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-800 p-6 rounded-xl max-w-xl mx-auto text-white shadow-md">
      <h2 className="text-2xl font-bold mb-4">Did you trade today?</h2>

      <div className="flex gap-4">
        <button
          onClick={() => handleCheckIn(true)}
          className="bg-green-600 px-4 py-2 rounded hover:bg-green-500 transition"
        >
          Yes
        </button>
        <button
          onClick={() => handleCheckIn(false)}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-500 transition"
        >
          No
        </button>
      </div>

      {response && (
        <p className="mt-4 text-zinc-400">
          {response === 'yes'
            ? 'Nice — let’s log that trade!'
            : 'Discipline pays off. No trades today is a win.'}
        </p>
      )}
    </div>
  );
}
