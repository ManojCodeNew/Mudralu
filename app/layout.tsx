import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StructuredData from './components/StructuredData'
import { SongsProvider } from './context/SongsContext'

export const metadata: Metadata = {
  title: {
    default: 'ಭಕ್ತಿ ಗೀತೆಗಳು - Devotional Songs Collection | Mudralu Temple',
    template: '%s | Mudralu Temple'
  },
  description: 'Complete collection of Kannada devotional songs, bhajans, and spiritual lyrics. Traditional Hindu devotional music with lyrics for meditation and worship.',
  keywords: [
    'kannada devotional songs',
    'bhajans',
    'spiritual songs',
    'hindu devotional music',
    'kannada lyrics',
    'mudralu temple',
    'devotional music',
    'bhakti geethe',
    'religious songs',
    'temple songs'
  ],
  authors: [{ name: 'Mudralu Temple', url: 'https://mudralu.netlify.app' }],
  creator: 'Mudralu Temple',
  publisher: 'Mudralu Temple',
  category: 'Religion & Spirituality',
  classification: 'Devotional Music',
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL('https://mudralu.netlify.app'),
  alternates: {
    canonical: '/',
    languages: {
      'kn-IN': '/kn',
      'en-US': '/en'
    }
  },
  openGraph: {
    title: 'ಭಕ್ತಿ ಗೀತೆಗಳು - Devotional Songs Collection',
    description: 'Complete collection of Kannada devotional songs, bhajans, and spiritual lyrics for meditation and worship.',
    url: 'https://mudralu.netlify.app',
    siteName: 'Mudralu Temple - Devotional Songs',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Mudralu Temple - Devotional Songs Collection',
        type: 'image/jpeg'
      }
    ],
    locale: 'kn_IN',
    type: 'website',
    countryName: 'India'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@MudraluTemple',
    creator: '@MudraluTemple',
    title: 'ಭಕ್ತಿ ಗೀತೆಗಳು - Devotional Songs',
    description: 'Complete collection of Kannada devotional songs and bhajans',
    images: {
      url: '/logo.jpg',
      alt: 'Mudralu Temple Devotional Songs'
    }
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico'
  },
  manifest: '/manifest.json',
  other: {
    'msapplication-TileColor': '#f97316',
    'theme-color': '#f97316',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'mobile-web-app-capable': 'yes'
  }
}

// Font setup
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

// Root Layout
export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='kn' dir='ltr'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fff7f1]`}
      >
        <StructuredData />
        <SongsProvider>
          <Navbar />
          <main className='min-h-[80vh]'>{children}</main>
          <Footer />
        </SongsProvider>
      </body>
    </html>
  )
}
