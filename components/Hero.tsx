"use client";
import Image from 'next/image';
import { ListItemIconify } from '@/components/ListItems';

export default function Hero() {
    return (
        <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-x-6'>
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
            <div className='flex items-center'>
                <a href='https://github.com/t-flora'>
                <ListItemIconify iconId="fa6-brands:github" />
                </a>
            </div>
        </div>
    )
}