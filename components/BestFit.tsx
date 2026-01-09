export default function BestFit() {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Best fit
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Law firms, clinics, accountants, agencies, and other service businesses that rely on consultations.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">
              Confusing service pages
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Visitors don&apos;t understand what you offer or how to take the next step
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">
              Weak calls to action
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Buttons are buried or unclear, leading to missed opportunities
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">
              Slow mobile experience
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Poor mobile performance drives away potential clients
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
