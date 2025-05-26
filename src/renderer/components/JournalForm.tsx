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
      <div className="bg-green-800 text-white p-6 rounded-xl max-w-xl mx-auto mt-6 shadow-lg">
        <h3 className="text-lg font-bold mb-2">✅ Entry Logged!</h3>
        <p className="text-sm text-zinc-300 mb-1">Planned R:R: {rr}</p>
        <p className="text-sm text-zinc-300 mb-1">Result: {result.toUpperCase()}</p>
        <p className="text-sm text-zinc-300">Notes: {notes}</p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-800 p-6 rounded-xl max-w-xl mx-auto text-white shadow-md mt-8">
      <h2 className="text-xl font-bold mb-4">Log Your Trade</h2>

      <div className="mb-4">
        <label className="block mb-1 text-sm">Planned R:R</label>
        <input
          type="text"
          value={rr}
          onChange={(e) => setRR(e.target.value)}
          className="w-full px-3 py-2 rounded bg-zinc-700 text-white"
          placeholder="e.g., 1:3"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm">Result</label>
        <select
          value={result}
          onChange={(e) => setResult(e.target.value as any)}
          className="w-full px-3 py-2 rounded bg-zinc-700 text-white"
        >
          <option value="win">Win</option>
          <option value="loss">Loss</option>
          <option value="be">Breakeven</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm">Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full px-3 py-2 rounded bg-zinc-700 text-white"
          rows={4}
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition"
      >
        Submit
      </button>
    </div>
  );
}
