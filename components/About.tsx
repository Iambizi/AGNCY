export default function About() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-gray-900 dark:text-white mb-6">
              About
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Frontend developer building production software for years.
              </p>
              <p>
                I care about clarity, speed, accessibility, and systems that reduce admin burden.
              </p>
              <p>
                Current focus: law firms, but I take on a small number of other service businesses when the fit is strong.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-gray-400 dark:text-gray-500 text-sm">Headshot placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
