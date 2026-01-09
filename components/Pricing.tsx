'use client'

import { trackBookCallClick } from '@/lib/analytics'

export default function Pricing() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl font-semibold text-gray-900 dark:text-white mb-4">
          Pricing
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl">
          Exact pricing depends on scope. Start with a quick call.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Conversion Sprint
            </h3>
            <p className="text-4xl font-heading font-semibold text-gray-900 dark:text-white mb-6">
              $2,500
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Starting at
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Includes initial audit, prioritized improvements, implementation, and launch support.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Monthly Optimization
            </h3>
            <p className="text-4xl font-heading font-semibold text-gray-900 dark:text-white mb-6">
              $500<span className="text-lg font-normal">/mo</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Starting at
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Ongoing monitoring, analysis, and iterative improvements to maintain performance.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackBookCallClick()}
            className="inline-block px-8 py-4 bg-accent hover:bg-accent-hover text-white font-medium rounded-md transition-colors"
          >
            Book a 15-minute call
          </a>
        </div>
      </div>
    </section>
  )
}
