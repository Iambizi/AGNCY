'use client'

import { trackBookCallClick, trackAuditRequestClick } from '@/lib/analytics'

const CALENDLY_URL = 'https://calendly.com' // Replace with your Calendly link

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="max-w-3xl">
        <h1 className="font-heading text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white leading-tight mb-6">
          Turn your website into a booked-consultation engine.
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          I help service businesses improve website clarity, conversion flow, and follow-up so more visitors become qualified calls. Current focus: law firms.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackBookCallClick()}
            className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-md transition-colors"
          >
            Book a 15-minute call
          </a>
          <a
            href="#contact"
            onClick={() => trackAuditRequestClick()}
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-medium rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Get a free 10-point intake audit
          </a>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            <span>Fast turnaround</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            <span>Performance + accessibility first</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            <span>Clear, measurable improvements</span>
          </div>
        </div>
      </div>
    </section>
  )
}
