'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialDark = saved ? saved === 'dark' : prefersDark
    setIsDark(initialDark)
    document.documentElement.classList.toggle('dark', initialDark)
  }, [])

  const toggleDark = () => {
    const newDark = !isDark
    setIsDark(newDark)
    document.documentElement.classList.toggle('dark', newDark)
    localStorage.setItem('theme', newDark ? 'dark' : 'light')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-heading text-xl font-semibold text-gray-900 dark:text-white">
          AGNCY Studio
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDark}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}
