'use client';
import Head from 'next/head';
import '../globals.css';
import { Icon } from '@iconify/react';
import { type } from 'os';

type IconItem = {
    iconId: string | string[],
    text: string,
    color?: string,
}

const ListItem = ( { iconId, text, color }: IconItem ) => {

    const ListIcons = () => {
        if (typeof iconId === "string") {
            return <Icon icon={iconId} fontSize={64} color={color ?? ""} />
        } else {
            <ul>
                {iconId.map((icon) => {
                    return (
                        <Icon icon={icon} fontSize={64} color={color ?? ""} />
                    );
                })}
            </ul>
        }
    }

    return ( 
    <li className="flex items-center">
    <div className="w-1/2">
        <ListIcons />
    </div>
    <div className="w-1/2">
      <span>{text}</span>
    </div>
  </li>
)};

export default function About(){
    return (
        <div>
            <Head>
                <title>tflora-skills</title>
            </Head>
            <h1 className='pb-5 text-3xl'>You want to hire a new engineer.</h1>
            <p>
                And you want someone who can do more than write basic prompts for the latest LLM to solve mundane coding tasks.
            </p>
            <br/>
            <section id='soft-skills'>
                <h1 className='text-3xl'>
                    Behaviors that will save you labor time and improve outcomes
                </h1>
                <ul>
                    <li>
                        No BS.
                    </li>
                </ul>
            </section>
            <section id='hard-skills'>
                <h1>
                    Hard skills that will get your requirements built in time and on budget
                </h1>
                <br/>
                <h2 className='text-2xl'>
                    Solid
                </h2>
                <ul className='text-lg'>
                    <ListItem iconId="logos:vim" text="vim" />
                    <ListItem iconId="devicon:linux" text="Linux" />
                    <ListItem iconId="logos:ubuntu" text="Ubuntu" />
                    <ListItem iconId="vscode-icons:file-type-python" text="Python" />
                    <ListItem iconId="devicon:vscode" text="VS Code" />
                </ul>
                <br/>
                <h2 className='text-2xl'>
                    Under development
                </h2>
                <ul>
                    <li>
                        <Icon icon="file-icons:vhdl" color='#ffff' fontSize={64}/>
                        HDL
                    </li>
                    <li>
                        <Icon icon="simple-icons:typescript" color='#3178c6' fontSize={64}/>
                        <Icon icon="vscode-icons:file-type-reactjs" fontSize={64}/>
                        <Icon icon="simple-icons:nextdotjs" color="#ffff" fontSize={64}/>
                        TypeScript, React, and Next.js
                    </li>
                    <li>
                        asm
                    </li>
                    <li>
                        Operating systems
                    </li>
                </ul>
                <br/>
                <h2 className='text-2xl'>
                    Future topics
                </h2>
                <ul>
                    <li>Rust</li>
                    <li>C</li>
                    <li>Embedded systems</li>
                    <li>Firmware development</li>
                </ul>
            </section>
        </div>
    )
}