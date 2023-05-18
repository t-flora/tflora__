import Link from 'next/link';

export default function About(){
    return (
        <div className='container mx-auto px-5'>
            <h1 className='pb-5 text-2xl'>Hi there.</h1>
            <p>
                I&apos;m an extremely motivated new grad in CS looking to apply my software skills to your problems.
            </p><br/>
            <h3 className='text-xl'>
                Some fun facts:
            </h3>
            <p>
                - I didn&apos;t know what I wanted to do while in college. Turns out my degree in CS was useful (!): I like coding. Yes, it took me about 4 years to realize it.<br/>
                - I travelled the world and I know how to work with international teams<br/>
                - I read widely, not super common with engineers<br/>
                - Fundamentally a tech optimist even if AI is scary<br/>
            </p>
        </div>
    )
}