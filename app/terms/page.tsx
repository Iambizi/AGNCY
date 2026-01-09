import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | AGNCY Studio',
  description: 'Terms of Service for AGNCY Studio',
}

export default function Terms() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-block mb-8 text-accent hover:text-accent-hover">
          ← Back to home
        </Link>
        
        <h1 className="font-heading text-4xl font-semibold text-gray-900 dark:text-white mb-8">
          Terms of Service
        </h1>

        <div className="prose dark:prose-invert text-gray-600 dark:text-gray-400 space-y-6">
          <p>Last updated: January 2025</p>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-4">
              Acceptance of Terms
            </h2>
            <p>
              By accessing and using AGNCY Studio&apos;s website and services, you accept and agree to be bound by the terms and provisions of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-4">
              Services
            </h2>
            <p>
              AGNCY Studio provides website conversion and intake optimization services for service businesses. Specific services, deliverables, and timelines will be outlined in individual project agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-4">
              Payment Terms
            </h2>
            <p>
              Payment terms will be specified in each project agreement. Deposits may be required for certain services. All payments are non-refundable once work has commenced.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-4">
              Limitation of Liability
            </h2>
            <p>
              AGNCY Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-4">
              Contact Information
            </h2>
            <p>
              For questions about these Terms of Service, please contact hello@agncystudio.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
