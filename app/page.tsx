import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Hero from '@/components/Hero';
import { ListItemIconify } from '@/components/ListItems';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='container mx-auto px-5'>
      <Hero />
    </main>
  )
}
