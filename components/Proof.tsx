'use client'

import { trackAuditRequestClick } from '@/lib/analytics'

export default function Proof() {
  const caseStudies = [
    {
      title: 'Website Speed Optimization',
      outcome: 'Improved Core Web Vitals scores and reduced page load time by 60%',
      domain: 'Representative work',
    },
    {
      title: 'Contact Form Redesign',
      outcome: 'Simplified form reduced friction and increased submission rate',
      domain: 'Selected work',
    },
    {
      title: 'Analytics Dashboard Setup',
      outcome: 'Implemented comprehensive tracking to measure conversion funnel performance',
      domain: 'Representative work',
    },
  ]

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl font-semibold text-gray-900 dark:text-white mb-12">
          Proof
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-heading text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Sample Audit Preview
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Download a sample audit based on publicly observable issues common to service websites. This preview shows the type of analysis I provide.
            </p>
            <a
              href="/sample-audit.pdf"
              onClick={() => trackAuditRequestClick()}
              className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Download Sample Audit
              <span className="ml-2">↓</span>
            </a>
          </div>
          
          <div>
            <h3 className="font-heading text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Representative Work
            </h3>
            <div className="space-y-4">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <p className="text-xs font-medium text-accent uppercase tracking-wider mb-2">
                    {study.domain}
                  </p>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {study.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {study.outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
