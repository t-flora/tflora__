import Link from 'next/link';

export default function About(){
    return (
        <div>
            <h1 className='pb-5 text-2xl'>Hi there.</h1>
            <p>
                Turns out I quite like coding. Here&apos;s the story:
            </p><br/>
            <p>
                - I didn&apos;t know what I wanted to do while in college. Turns out my degree in CS was useful (!): I like coding.
                - I travelled the world and I know how to work with international teams
                - I read widely, not super common with engineers
                - Fundamentally a tech optimist even if AI is scary
            </p>
        </div>
    )
}