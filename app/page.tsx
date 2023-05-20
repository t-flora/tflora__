import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Hero from '@/components/Hero';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='container mx-auto px-5'>
      <Hero />
    </main>
  )
}
