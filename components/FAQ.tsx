'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Who do you work with?',
      answer: 'Law firms, clinics, accountants, agencies, and other service businesses that rely on consultations and want to improve their website conversion.',
    },
    {
      question: 'Do you work mostly with law firms?',
      answer: 'My current focus is law firms, but I work with a small number of other service businesses when the fit is strong and the opportunity is clear.',
    },
    {
      question: 'How fast can you start?',
      answer: 'Typically within a week of our initial call. Quick turnaround is a priority.',
    },
    {
      question: 'Do you replace our whole site?',
      answer: 'Not necessarily. I can work with your existing site to improve conversion performance without a complete rebuild.',
    },
    {
      question: 'Can you work with our existing vendor/developer?',
      answer: 'Yes, I can collaborate with your current team or work independently depending on your needs.',
    },
    {
      question: 'What do you need from us?',
      answer: 'Access to your website analytics, current goals, and a brief understanding of your target audience and ideal client.',
    },
    {
      question: 'What results should we expect?',
      answer: 'Improved website clarity, better conversion flow, reduced friction in the intake process, and measurable data to track performance over time.',
    },
  ]

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl font-semibold text-gray-900 dark:text-white mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
