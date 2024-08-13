import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
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
    default: 'Cooper van Wijck',
    template: '%s | Cooper van Wijck',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'Cooper van Wijck',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'Cooper van Wijck',
    locale: 'en_US',
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
          inter.className,
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
