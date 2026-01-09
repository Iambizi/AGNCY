export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Quick Audit',
      description: 'Review your current website, identify conversion leaks, and prioritize improvements',
    },
    {
      number: '02',
      title: 'Fix + Launch',
      description: 'Implement changes, optimize performance, and set up tracking',
    },
    {
      number: '03',
      title: 'Measure + Improve',
      description: 'Monitor results, analyze data, and iterate based on performance',
    },
  ]

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl font-semibold text-gray-900 dark:text-white mb-12">
          Process
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-heading text-gray-200 dark:text-gray-700 font-semibold mb-4">
                {step.number}
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div>
              <div className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-2">
                Sprint
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                1–2 weeks
              </div>
            </div>
            <div>
              <div className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-2">
                Ongoing
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Monthly
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
