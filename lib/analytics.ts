export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters)
  }
}

export const trackBookCallClick = () => {
  trackEvent('book_call_click')
}

export const trackAuditRequestClick = () => {
  trackEvent('audit_request_click')
}

export const trackFormSubmit = (formType: string) => {
  trackEvent('form_submit', { form_type: formType })
}
