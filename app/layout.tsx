import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { SongsProvider } from './context/SongsContext'

export const metadata = {
  metadataBase: new URL("https://mudralu.netlify.app"),

  title: {
    default: "Bhajane – Kannada Bhakti Songs & Lyrics",
    template: "%s | Bhajane",
  },

  description:
    "Explore Kannada devotional songs, lyrics, bhakti geethe, stotras, and bhajans. Updated daily with divine bhakti songs.",

  keywords: [
    "Kannada Bhakti Geethe",
    "Bhajans",
    "Stotra",
    "Devotional Songs",
    "Lyrics Kannada",
  ],

  openGraph: {
    title: "Bhajane – Kannada Bhakti Songs & Lyrics",
    description:
      "Explore Kannada devotional songs, lyrics, bhakti geethe and stotras.",
    url: "https://mudralu.netlify.app",
    siteName: "Bhajane",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};


// export const metadata: Metadata = {
//   title: {
//     default: 'ಭಕ್ತಿ ಗೀತೆಗಳು - Devotional Songs Collection | Mudralu Temple | in Karkala , Mudar',
//     template: '%s | Mudralu Temple'
//   },
//   description: 'Complete collection of Kannada devotional songs, bhajans, and spiritual lyrics. Traditional Hindu devotional music with lyrics for meditation and worship. | Moodbidri, Mangalore,Karkala, Dakshina Kannada (DK)',
//   keywords: [
//     'Bhajana mandali in karkala',
//     '20 members in team',
//     'kannada devotional songs',
//     'bhajans',
//     'spiritual songs',
//     'hindu devotional music',
//     'kannada lyrics',
//     'mudralu temple',
//     'devotional music',
//     'bhakti geethe',
//     'religious songs',
//     'temple songs',
//     'mudralu',
//     'Mudaru'
//   ],
//   authors: [{ name: 'Mudralu Temple', url: 'https://mudralu.netlify.app' }],
//   creator: 'Mudralu Temple',
//   publisher: 'Mudralu Temple',
//   category: 'Religion & Spirituality',
//   classification: 'Devotional Music',
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false
//   },
//   metadataBase: new URL('https://mudralu.netlify.app'),
//   alternates: {
//     canonical: '/',
//     languages: {
//       'kn-IN': '/kn',
//       'en-US': '/en'
//     }
//   },
//   openGraph: {
//     title: 'ಭಕ್ತಿ ಗೀತೆಗಳು - Devotional Songs Collection',
//     description: 'Complete collection of Kannada devotional songs, bhajans, and spiritual lyrics for meditation and worship.',
//     url: 'https://mudralu.netlify.app',
//     siteName: 'Mudralu Temple - Devotional Songs',
//     images: [
//       {
//         url: '/logo.jpg',
//         width: 1200,
//         height: 630,
//         alt: 'Mudralu Temple - Devotional Songs Collection',
//         type: 'image/jpeg'
//       }
//     ],
//     locale: 'kn_IN',
//     type: 'website',
//     countryName: 'India'
//   },
//   twitter: {
//     card: 'summary_large_image',
//     site: '@MudraluTemple',
//     creator: '@MudraluTemple',
//     title: 'ಭಕ್ತಿ ಗೀತೆಗಳು - Devotional Songs',
//     description: 'Complete collection of Kannada devotional songs and bhajans',
//     images: {
//       url: '/logo.jpg',
//       alt: 'Mudralu Temple Devotional Songs'
//     }
//   },
//   icons: {
//     icon: [
//       { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
//       { url: '/logo-png.png', sizes: '512x512', type: 'image/png' }
//     ],
//     apple: [
//       { url: '/logo-png.png', sizes: '180x180', type: 'image/png' }
//     ],
//     shortcut: '/favicon.ico'
//   },
//   manifest: '/manifest.json',
//   other: {
//     'msapplication-TileColor': '#f97316',
//     'theme-color': '#f97316',
//     'apple-mobile-web-app-capable': 'yes',
//     'apple-mobile-web-app-status-bar-style': 'default',
//     'mobile-web-app-capable': 'yes'
//   }
// }

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
        <SongsProvider>
          <Navbar />
          <main className='min-h-[80vh]'>{children}</main>
          <Footer />
        </SongsProvider>
      </body>
    </html>
  )
}
