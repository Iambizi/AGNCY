'use client'

import { trackBookCallClick } from '@/lib/analytics'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h3 className="font-heading text-2xl font-semibold mb-6">
            Ready to improve your website?
          </h3>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackBookCallClick}
            className="inline-block px-8 py-4 bg-accent hover:bg-accent-hover text-white font-medium rounded-md transition-colors"
          >
            Book a 15-minute call
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-gray-800">
          <div>
            <p className="text-gray-400">
              Based in Montréal, working remotely
            </p>
          </div>
          
          <div>
            <p className="text-gray-400">
              hello@agncystudio.com
            </p>
          </div>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2025 AGNCY Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
