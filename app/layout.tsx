import type { Metadata } from 'next';

import './globals.css'
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'TrekEZ | Home',
  description: 'Travel UI/UX App for Camping',
}

export default function RootLayout({
  children,
}: {  
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>

       <link rel="icon" type="image/png" href="https://www.vhv.rs/dpng/d/23-239765_travel-agency-logo-no-background-hd-png-download.png"></link>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"/>
      </head>
      <body>
        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}
