import React from 'react'
import Mascot from './Mascot'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Sidebar */}
      <aside className="w-72 bg-slate-900/60 backdrop-blur-xl p-6 border-r border-slate-700/50 flex flex-col relative z-10 shadow-2xl">
        <div className="mb-10">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">Reflex</h1>
          <p className="text-xs text-slate-400 tracking-wide">TRADING DISCIPLINE</p>
        </div>

        <nav className="flex flex-col gap-2 flex-1">
          <a href="#" className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800/50 transition-all duration-200 text-slate-300 hover:text-white hover:translate-x-1">
            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="font-medium">Journal</span>
          </a>
          <a href="#" className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800/50 transition-all duration-200 text-slate-300 hover:text-white hover:translate-x-1">
            <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Check-In</span>
          </a>
          <a href="#" className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800/50 transition-all duration-200 text-slate-300 hover:text-white hover:translate-x-1">
            <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="font-medium">Progress</span>
          </a>
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-700/50">
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-4 rounded-xl border border-orange-500/20 mb-4">
            <div className="flex items-center gap-3 mb-1">
              <div className="text-2xl">🔥</div>
              <div>
                <p className="text-lg font-bold text-orange-400">5 Day Streak</p>
                <p className="text-xs text-slate-400">Keep it going!</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-slate-900 font-bold">
              MG
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">Mason Garrett</p>
              <p className="text-xs text-slate-400">Pro Trader</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Area */}
      <main className="flex-1 flex flex-col relative z-10">
        {/* Header */}
        <header className="h-20 bg-slate-900/40 backdrop-blur-xl px-8 flex items-center justify-between border-b border-slate-700/50 shadow-lg">
          <div>
            <h2 className="text-2xl font-bold text-white">Welcome back</h2>
            <p className="text-sm text-slate-400 mt-0.5">Stay focused, trade smart</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-slate-300">Monday, May 26</p>
            <p className="text-xs text-slate-500 mt-0.5">2024</p>
          </div>
        </header>

        {/* Page Content */}
        <section className="p-8 overflow-y-auto flex-1">
          {children}
        </section>
      </main>

      {/* Floating Mascot */}
      <Mascot />
    </div>
  )
}
