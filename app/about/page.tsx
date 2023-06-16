import Link from 'next/link';
import styles from './About.module.css';

export default function About(){
    return (
        <div className='container mx-auto px-5'>
            <h1 className={ `${styles.abouth1} ${styles.header_gradient} pb-5 text-2xl` }>Nice of you to pass by.</h1>
            <p className={ `${styles.aboutp}` }>
                I&apos;m an extremely motivated new grad in CS looking to work very hard to contribute to technical problems.
            </p><br/>
            <h3 className='text-xl mb-3'>
                Some quick facts about me:
            </h3>
            <ul className='leading-loose list-disc list-inside'>
                <li> I didn&apos;t know what I wanted to do while in college. Turns out my degree in CS was useful (!): I like coding. Yes, it took me about 4 years to realize it.</li>
                <li> I travelled, worked, and studied in 6 different countries. I&apos;ve worked with on projects ranging from transportation planning to VC research, and did it all with a diverse group of people from 50+ countries. I know how to work with international teams.</li>
                <li> I read nonfiction pretty widely, but currently I&apos;m focusing on operating systems and computer architecture textbooks</li>
                <li> Usually a tech optimist, when I&apos;m not nervously laughing on <a href='https://twitter.com/AISafetyMemes?s=20' className='underline hover:text-blue-300'>this page</a>.</li>
            </ul>
        </div>
    )
}