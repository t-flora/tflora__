import Head from 'next/head';
import Link from 'next/link';
import '../globals.css';

export default function About(){
    return (
        <div>
            <Head>
                <title>tflora-skills</title>
            </Head>
            <h1 className='pb-5 text-2xl'>Hi there.</h1>
            <section id='soft-skills'>
                <h1>
                    Behaviors that will save you money
                </h1>
                <p>
                    Turns out I quite like coding. Here&apos;s the story:
                </p><br/>
            </section>
            <section id='hard-skills'>
                <h1>
                    Skills that will get your requirements built in time and on budget
                </h1>
                <h2>
                    Well-developed
                </h2>
                <ul>
                    <li>
                        vim
                    </li>
                    <li>
                        Linux
                    </li>
                    <li>
                        TypeScript, React, and Next.js
                    </li>
                    <li>
                        Python
                    </li>
                    <li>
                        VSCode
                    </li>
                </ul>
            </section>
        </div>
    )
}