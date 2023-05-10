import Image from 'next/image';

export default function Hero() {
    return (
        <div className='grid grid-cols-2 gap-4'>
            <div>
                <h1 className='text-2xl font-bold mb-2'>
                    Hi, I&apos;m Tiago
                </h1>
                <p>
                    I&apos;m a full-stack developer specializing in TypeScript and Next.js
                </p>
            </div>
            <div>
                <Image
                    className='rounded-full'
                    src='/profile-picture.webp'
                    alt='Profile picture'
                    width={200}
                    height={200}
                />
            </div>
        </div>
    )
}