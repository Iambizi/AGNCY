import type { Metadata } from 'next'
import { Literata, Inter } from 'next/font/google'
import './globals.css'
import { AnalyticsProvider } from '@/components/AnalyticsProvider'

const literata = Literata({ 
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://agncystudio.com'),
  title: 'AGNCY Studio | Website Conversion & Intake Optimization',
  description: 'I help service businesses improve website clarity, conversion flow, and follow-up so more visitors become qualified calls. Current focus: law firms.',
  openGraph: {
    title: 'AGNCY Studio | Website Conversion & Intake Optimization',
    description: 'I help service businesses improve website clarity, conversion flow, and follow-up so more visitors become qualified calls. Current focus: law firms.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${literata.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  )
}
