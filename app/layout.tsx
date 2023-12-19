import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chase Myers',
  description: 'A professional software engineer, and a gatherer of many hobbies.',
  creator: 'Chase Myers',
  icons: {
    icon: 'https://chasem.dev/preview.png'
  },
  openGraph: {
    images: 'https://chasem.dev/preview.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <head>
        <title>Chase Myers</title>
        <link rel="icon" href="/favicon.ico" />
      </head> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
