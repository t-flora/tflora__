import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'tflora',
  description: 'personal website under development like its owner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen container mx-auto px-5">
        <Navbar />
        <div className='mx-auto max-w-4xl justify-center flex-grow'>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
