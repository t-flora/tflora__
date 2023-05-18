import Image from 'next/image';

export default function Hero() {
    return (
        <div className='grid grid-cols-2 gap-x-6'>
            <div>
                <h1 className='text-2xl font-bold mb-2'>
                    Hi, I&apos;m Tiago
                </h1>
                <p>
                    I am a recent CS grad in engineering – be it software, data, or aircraft sales.
                </p>
            </div>
            <div className='flex justify-center'>
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