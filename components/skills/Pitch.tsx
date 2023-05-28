'use client';
import Head from 'next/head';
import '@/app/globals.css';
import { ListItemIconify, ListItemImage } from '@/components/ListItems';
// import TOC from '@/components/TableOfContents';
const title = "tflora-skills" // metadata will require getting rid of the icons from Iconify so that this component can be SSR

export default function Pitch(){
    return (
        <div className='container mx-auto px-5 space-y-4'>
            <Head>
                <title>{title}</title>
            </Head>
            <h1 className='pb-5 text-3xl'>So, you want to hire a new engineer.</h1>
            <p>
                And you want someone who can do more than write basic prompts for the latest LLM to solve mundane coding tasks.<br/>
                In this page I&apos;ll make my case to you that I can fulfill your requirements. My greatest asset, it must be warned, is my motivation to learn.
            </p>
            <div className="p-6 rounded-md">
                <h2 className="text-2xl font-bold mb-4">
                    Table of contents
                </h2>
                <ul>
                    <li>
                        <a href={`#soft-skills`} className="text-lg hover:underline">Behaviors that save time, money, and improve outcomes</a>
                        <ul className='ml-5'>
                            <li>
                                <a href='#no-bs' className='text-md hover:underline'>No BS</a>
                            </li>
                            <li>
                                <a href='#interruptions' className='text-md hover:underline'>Interruptions are the devil</a>
                            </li>
                            <li>
                                <a href='#tools-roi' className='text-md hover:underline'>Tools should have a clear positive ROI estimate</a>
                            </li>
                            <li>
                                <a href='#feedback' className='text-md hover:underline'>Feedback should be as open as possible</a>
                            </li>
                        </ul>
                        <a href='#hard-skills' className='text-lg hover:underline'>Hard skills that will get your requirements built in time and on budget</a>
                    </li>
                </ul>
            </div>
            {/* <TOC
                headings={[
                    {id: 'soft-skills', title: 'Behaviors that save time, money, and improve outcomes'},
                    {id: 'hard-skills', title: 'Hard skills that will get your requirements built in time and on budget'},
                ]}
            /> */}
            <br/>
            <section id='soft-skills' className='space-y-4'>
                <h1 className='text-3xl'>
                    Behaviors that will save you labor time and improve outcomes
                </h1>
                <div id='no-bs'>
                    <h2 className='text-2xl'>
                        No BS.
                    </h2>
                    <p>
                        It is easy to tell busywork from real work. The distinction should be clear, but too often isn&apos;t. 
                    </p>
                </div>
                <div id='interruptions'>
                    <h2 className='text-2xl'>
                        Interruptions are the devil
                    </h2>
                    <p>
                        Interruptions are ruinous for people who depend on deep focus. I seek to keep collaboration time as concentrated as possible each day to leave room for the &quot;action&quot; in action items. 
                    </p>
                </div>
                <div id='tools-roi'>
                    <h2 className='text-2xl'>
                        Tooling should have at least estimates of ROI
                    </h2>
                    <p>
                        This one is hard. Everyone is drawn to new, shiny, promising tools that could help your workflow. <br/>
                        But if setup time and maintenance or running costs are higher than the tool is bringing back, it should simply be cut.
                    </p>
                </div>
                <div id='feedback'>
                    <h2 className='text-2xl'>
                        Feedback should be as open as possible
                    </h2>
                    <p>
                        Constructive feedback and the free flow of concerns and praise within the company are required components for quality to improve, for problems to be addressed, and for merit to be recognized.<br/>
                        Constant comments are not necessarily productive or effective, but openness and a high enough frequency are.
                    </p>
                </div>
            </section>
            <section id='hard-skills'>
                <h1 className='text-3xl'>
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
                    {/* <ListItemImage text="Embedded C" alt="C Logo" src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"/> */}
                </ul>
            </section>
        </div>
    )
}