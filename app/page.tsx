import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1 className='text-3xl font-bold font-mono p-3'>Hello, I&apos;m Tiago</h1>
    </main>
  )
}
