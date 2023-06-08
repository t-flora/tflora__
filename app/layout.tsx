import './globals.css'
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
      <body className="flex flex-col min-h-screen mx-auto px-5">
        <Navbar />
        <main className='pt-16 mx-auto max-w-4xl justify-center flex-grow'>
            {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
