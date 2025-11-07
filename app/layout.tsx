import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { SongsProvider } from './context/SongsContext'

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
    <html lang='en'>
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
