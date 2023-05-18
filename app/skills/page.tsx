'use client';
import Head from 'next/head';
import '../globals.css';
import { ListItemIconify, ListItemImage } from '@/components/ListItems';

export default function About(){
    return (
        <div className='space-y-4'>
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
                    <ListItemIconify iconId="logos:vim" text="vim" />
                    <ListItemIconify iconId="devicon:linux" text="Linux" />
                    <ListItemIconify iconId="logos:ubuntu" text="Ubuntu" />
                    <ListItemIconify iconId="vscode-icons:file-type-python" text="Python" />
                    <ListItemIconify iconId="devicon:vscode" text="VS Code" />
                </ul>
                <br/>
                <h2 className='text-2xl'>
                    Under development
                </h2>
                <ul className='text-lg'>
                    <ListItemIconify iconId="file-icons:vhdl" text="HDL"/>
                    <ListItemIconify iconId={["simple-icons:typescript", "vscode-icons:file-type-reactjs", "simple-icons:nextdotjs"]} text="TypeScript, React, and Next.js"/>
                </ul>
                <br/>
                <h2 className='text-2xl'>
                    Future topics
                </h2>
                <ul>
                    <ListItemIconify iconId="devicon:wasm" text="WebAssembly" />
                    <ListItemIconify iconId="mdi:language-rust" color="#fff" text="Rust" />
                    <ListItemImage text="Embedded C" alt="C Logo" src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"/>
                </ul>
            </section>
        </div>
    )
}