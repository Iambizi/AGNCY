# Customization Guide

This guide will help you customize the AGNCY Studio website to match your brand and needs.

## 1. Copy and Content

### Brand Name
Update the brand name in these files:
- `components/Navigation.tsx` - Update the "AGNCY Studio" link text
- `app/layout.tsx` - Update the metadata title and description
- `app/privacy/page.tsx` - Update company references in the privacy policy
- `app/terms/page.tsx` - Update company references in the terms of service

### Hero Section
Edit `components/Hero.tsx` to customize:
- Headline
- Subhead text
- Calendly URL (update the `CALENDLY_URL` constant)
- Trust bullets

### About Section
Edit `components/About.tsx` to update:
- Your bio and experience
- Location information
- Focus areas

### Services
Edit `components/Services.tsx` to customize:
- Service titles, descriptions, and outputs
- Add or remove service cards as needed

### Pricing
Edit `components/Pricing.tsx` to update:
- Pricing amounts
- Service descriptions

### Contact Information
Update in `components/Footer.tsx`:
- Email address
- Location
- Company name in copyright

## 2. Font Pairing

The site currently uses:
- **Headings**: Literata (serif font)
- **Body**: Inter (sans-serif font)

To change fonts:

### Step 1: Install new fonts in `app/layout.tsx`
```typescript
import { NewFontName } from 'next/font/google'

const newFont = NewFontName({ 
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})
```

### Step 2: Update Tailwind config in `tailwind.config.js`
```javascript
theme: {
  extend: {
    fontFamily: {
      heading: ['NewFontName', 'serif'],
      body: ['Inter', 'sans-serif'],
    },
  },
}
```

### Step 3: Update layout in `app/layout.tsx`
```typescript
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${newFont.variable} ${inter.variable}`}>
      {/* ... */}
    </html>
  )
}
```

## 3. Accent Color

The default accent color is blue (`#2563eb`).

To change the accent color, edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      accent: {
        DEFAULT: '#YOUR_COLOR_HEX',
        hover: '#YOUR_DARKER_COLOR_HEX',
      },
    },
  },
}
```

Examples:
- Purple: `DEFAULT: '#7c3aed'`, `hover: '#6d28d9'`
- Green: `DEFAULT: '#059669'`, `hover: '#047857'`
- Orange: `DEFAULT: '#ea580c'`, `hover: '#c2410c'`

## 4. Calendly Link

Replace the Calendly placeholder URL in:
- `components/Hero.tsx` - Update the `CALENDLY_URL` constant
- `components/Pricing.tsx` - Update the "Book a 15-minute call" href

Replace with your actual Calendly link, e.g.:
```javascript
const CALENDLY_URL = 'https://calendly.com/your-username'
```

## 5. Audit PDF Link

1. Place your sample audit PDF in the `public/` folder
2. Update the link in `components/Proof.tsx`:
```typescript
<a href="/your-audit-file.pdf">
```

Make sure the filename matches your actual PDF file.

## 6. GA4 ID

1. Create a `.env.local` file in the project root (copy from `.env.local.example`)
2. Add your GA4 measurement ID:
```
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
```
3. Replace `G-XXXXXXXXXX` with your actual GA4 ID

The analytics will automatically start tracking events:
- `book_call_click` - When someone clicks to book a call
- `audit_request_click` - When someone requests an audit
- `form_submit` - When someone submits a contact form

## 7. Contact Form Integration

The contact form currently logs to the console. To integrate with a backend or form service:

Edit `components/ContactForm.tsx` in the `handleSubmit` function:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  if (formData.honeypot) {
    return
  }

  trackFormSubmit('contact')

  // Replace this with your backend integration
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    
    if (response.ok) {
      setSubmitted(true)
    }
  } catch (error) {
    console.error('Form submission error:', error)
  }
  
  // ... rest of the code
}
```

## 8. Headshot Image

To add a real headshot:

1. Place your headshot image in the `public/` folder (e.g., `headshot.jpg`)
2. Update `components/About.tsx`:
```typescript
<img
  src="/headshot.jpg"
  alt="Your Name"
  className="w-48 h-48 rounded-full object-cover"
/>
```

## 9. FAQ Questions

Edit the `faqs` array in `components/FAQ.tsx` to add, remove, or modify questions and answers.

## 10. Domain and Deployment

### Update Domain URLs
After deploying to your domain, update these files:
- `app/layout.tsx` - Update `metadataBase` URL
- `app/sitemap.ts` - Update `baseUrl` constant
- `app/robots.ts` - Update `baseUrl` constant

### Deployment Platforms
This site works great on:
- Vercel (recommended)
- Netlify
- Cloudflare Pages
- AWS Amplify

For Vercel:
1. Push your code to GitHub
2. Import the project in Vercel
3. Add your environment variables
4. Deploy!

## 11. Performance Tips

- Images: Always optimize images before adding to `public/` folder
- Fonts: Use the `display: 'swap'` option for better performance
- Analytics: Only enable GA4 when you have a real ID to avoid console errors
- Build: Run `npm run build` to check for errors before deploying

## 12. Accessibility

The site is built with accessibility in mind:
- Semantic HTML
- Proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support
- Good color contrast ratios

When making changes, maintain these standards to keep the site accessible.

## Support

For questions or issues, refer to:
- Next.js documentation: https://nextjs.org/docs
- Tailwind CSS documentation: https://tailwindcss.com/docs
- TypeScript documentation: https://www.typescriptlang.org/docs
