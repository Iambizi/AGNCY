import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | AGNCY Studio',
  description: 'Privacy Policy for AGNCY Studio',
}

export default function Privacy() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-block mb-8 text-accent hover:text-accent-hover">
          ← Back to home
        </Link>
        
        <h1 className="font-heading text-4xl font-semibold text-gray-900 dark:text-white mb-8">
          Privacy Policy
        </h1>

        <div className="prose dark:prose-invert text-gray-600 dark:text-gray-400 space-y-6">
          <p>Last updated: January 2025</p>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-4">
              Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us, such as when you fill out a contact form or book a consultation. This may include your name, email address, company name, website, and any messages you send us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-4">
              How We Use Your Information
            </h2>
            <p>
              We use the information we collect to communicate with you, provide requested services, and improve our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-4">
              Analytics
            </h2>
            <p>
              We use Google Analytics to understand how visitors use our website. This service collects information about how you use our website, including the pages you visit and how long you spend on each page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at hello@agncystudio.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
