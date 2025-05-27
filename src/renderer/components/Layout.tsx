import React from 'react'
import Mascot from './Mascot'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-zinc-900 text-white relative">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-800 p-4 border-r border-zinc-700 flex flex-col">
        <h1 className="text-2xl font-bold mb-8">Reflex</h1>
        <nav className="flex flex-col gap-4 text-zinc-300">
          <a href="#" className="hover:text-white">Journal</a>
          <a href="#" className="hover:text-white">Check-In</a>
          <a href="#" className="hover:text-white">Progress</a>
        </nav>
        <div className="mt-auto pt-6 border-t border-zinc-700 text-sm text-zinc-400">
          <p>Streak: 5 days 🔥</p>
          <p className="text-xs mt-1">Mason Garrett</p>
        </div>
      </aside>

      {/* Main Area */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-zinc-800 px-6 flex items-center justify-between border-b border-zinc-700">
          <div className="text-lg font-medium">Welcome back</div>
          <div className="text-sm text-zinc-400">Mon, May 26</div>
        </header>

        {/* Page Content */}
        <section className="p-8 overflow-y-auto">
          {children}
        </section>
      </main>

      {/* Floating Mascot */}
      <Mascot />
    </div>
  )
}
