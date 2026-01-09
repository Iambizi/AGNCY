'use client'

import { useState } from 'react'
import { trackFormSubmit } from '@/lib/analytics'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    message: '',
    honeypot: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Check honeypot field
    if (formData.honeypot) {
      return
    }

    trackFormSubmit('contact')

    // Here you would normally send the form data to your backend/API
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        website: '',
        message: '',
        honeypot: '',
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-lg text-center">
        <p className="text-green-800 dark:text-green-200 font-medium">
          Thanks! I&apos;ll get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Firm/Company name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="website" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Website
        </label>
        <input
          type="url"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
        />
      </div>

      {/* Honeypot field for spam protection */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <button
        type="submit"
        className="w-full px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-md transition-colors"
      >
        Send Message
      </button>
    </form>
  )
}
