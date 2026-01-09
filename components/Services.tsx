export default function Services() {
  const services = [
    {
      title: 'Website Conversion Refresh',
      description: 'Messaging clarity, page structure, CTA placement, mobile UX, speed pass',
      outputs: 'Updated pages, tracking events, launch support',
    },
    {
      title: 'Intake Flow Optimization',
      description: 'Contact flow, form redesign, booking step, follow-up recommendations (email/SMS)',
      outputs: 'Streamlined journey, fewer drop-offs, clearer qualification',
    },
    {
      title: 'Analytics + Lead Tracking Setup',
      description: 'GA4, key events, conversion reporting, simple dashboard',
      outputs: 'Baseline metrics + monthly review option',
    },
  ]

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl font-semibold text-gray-900 dark:text-white mb-12">
          Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-accent transition-colors"
            >
              <h3 className="font-heading text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {service.description}
              </p>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Output: {service.outputs}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
