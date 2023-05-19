import Hero from '@/components/Hero';
import GlobeScene from '@/components/ThreeJS/GlobeScene';

export default function Home() {
  return (
    <main className='container mx-auto px-5'>
      <Hero />
      <GlobeScene />
    </main>
  )
}
