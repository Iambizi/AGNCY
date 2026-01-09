'use client'

import { useEffect } from 'react'

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize GA4 (placeholder)
    // Replace G-XXXXXXXXXX with your actual GA4 ID
    const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || 'G-XXXXXXXXXX'
    
    if (typeof window !== 'undefined' && GA4_ID !== 'G-XXXXXXXXXX') {
      (window as any).dataLayer = (window as any).dataLayer || []
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args)
      }
      ;(window as any).gtag = gtag

      gtag('js', new Date())
      gtag('config', GA4_ID)
      
      // Load GA4 script
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`
      document.head.appendChild(script)
    }
  }, [])

  return <>{children}</>
}
