# AGNCY Studio

A fast, professional landing site for service businesses focused on website conversion and intake optimization. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ⚡ Fast, optimized performance
- 🌓 Dark mode toggle
- 📱 Fully responsive design
- ♿ Accessible and semantic HTML
- 🔍 SEO optimized with metadata, sitemap, and robots.txt
- 📊 Analytics ready (GA4 placeholder)
- ✨ Clean, editorial design with custom fonts

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React 18

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Iambizi/AGNCY.git
cd AGNCY
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for detailed instructions on:
- Updating copy and content
- Changing fonts and colors
- Configuring Calendly link
- Setting up GA4 analytics
- Integrating contact form
- And more

## Project Structure

```
agncy/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Global styles and Tailwind
│   ├── privacy/            # Privacy policy page
│   ├── terms/              # Terms of service page
│   ├── sitemap.ts          # Sitemap for SEO
│   └── robots.ts           # Robots.txt for SEO
├── components/
│   ├── Navigation.tsx       # Top navigation with dark mode toggle
│   ├── Hero.tsx            # Hero section with CTAs
│   ├── BestFit.tsx         # Target audience section
│   ├── Problem.tsx         # Problem section
│   ├── Services.tsx        # Services cards
│   ├── Proof.tsx           # Proof/case studies section
│   ├── Process.tsx         # Process/timeline section
│   ├── Pricing.tsx         # Pricing options
│   ├── FAQ.tsx             # FAQ accordion
│   ├── About.tsx           # About section
│   ├── ContactForm.tsx      # Contact form with honeypot
│   ├── Footer.tsx          # Footer with links
│   └── AnalyticsProvider.tsx # GA4 analytics wrapper
├── lib/
│   └── analytics.ts        # Analytics tracking functions
├── public/                # Static assets
└── tailwind.config.js      # Tailwind configuration
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Google Analytics 4 measurement ID.

## Deployment

This site is ready to deploy to:
- [Vercel](https://vercel.com) (recommended)
- [Netlify](https://netlify.com)
- [Cloudflare Pages](https://pages.cloudflare.com)
- [AWS Amplify](https://aws.amazon.com/amplify/)

For deployment with Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables if needed
4. Deploy!

## License

This project is open source and available under the [MIT License](LICENSE).
