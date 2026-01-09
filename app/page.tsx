import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import BestFit from '@/components/BestFit'
import Problem from '@/components/Problem'
import Services from '@/components/Services'
import Proof from '@/components/Proof'
import Process from '@/components/Process'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import About from '@/components/About'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <Hero />
      <BestFit />
      <Problem />
      <Services />
      <Proof />
      <Process />
      <Pricing />
      <FAQ />
      <About />
      
      <section id="contact" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Get in touch
          </h2>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
