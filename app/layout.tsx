import './global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { JetBrains_Mono } from "next/font/google";
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

const inter = Inter({ subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'wijck.me | Cooper van Wijck\'s Portfolio and Blog',
    template: '%s | Cooper van Wijck',
  },
  description: 'I\'m a final-year student at the University of New South Wales, where I study Law and Computer Science. My passion lies at the intersection of technology and law, and I\'m excited to explore how emerging technologies impact and shape society. I enjoy investigating how automation and the integration of technology can enhance efficiency and enjoyment in our daily lives.',
  openGraph: {
    title: 'wijck.me | Cooper van Wijck\'s Portfolio',
    description: 'I\'m a final-year student at the University of New South Wales, where I study Law and Computer Science. My passion lies at the intersection of technology and law, and I\'m excited to explore how emerging technologies impact and shape society. I enjoy investigating how automation and the integration of technology can enhance efficiency and enjoyment in our daily lives.',
    url: baseUrl,
    siteName: 'wijck.me | Cooper van Wijck\'s Portfolio and Blog',
    locale: 'en_AU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        inter.className, // Apply Inter font to the whole site
      )}
    >
      <body className="antialiased flex flex-col min-h-screen max-w-5xl mx-auto px-4">
        <Navbar />
        <main className="flex-grow mt-4 mb-8">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}