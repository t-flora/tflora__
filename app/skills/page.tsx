'use client';
import Head from 'next/head';
import '../globals.css';
import { ListItemIconify } from '@/components/ListItems';
// import TOC from '@/components/TableOfContents';
const title = "tflora-skills" // metadata will require getting rid of the icons from Iconify so that this component can be SSR

export default function About(){
    return (
        <div className='container mx-auto px-5 space-y-4'>
            <Head>
                <title>{title}</title>
            </Head>
            <h1 className='pb-5 text-3xl'>So, you want to hire a new engineer.</h1>
            <p>
                I have dabbled in programming at all layers of computer science: from Hardware Description Languages to AI.<br/>
                In this page I&apos;ll make my case to you that I can fulfill your requirements. My greatest asset, it must be warned, is my motivation to learn.
            </p>
            <div className="p-6 rounded-md">
                <h2 className="text-2xl font-bold mb-4">
                    Table of contents
                </h2>
                <ul>
                    <li>
                        <a href={`#soft-skills`} className="text-lg hover:underline">Behaviors I believe save time, money, and improve outcomes</a>
                        <ul className='ml-5'>
                            <li>
                                <a href='#no-bs' className='text-md hover:underline'>Minimize BS</a>
                            </li>
                            <li>
                                <a href='#interruptions' className='text-md hover:underline'>Interruptions are usually the devil</a>
                            </li>
                            <li>
                                <a href='#think-econ' className='text-md hover:underline'>Think like an economist/statistician</a>
                            </li>
                            <li>
                                <a href='#feedback' className='text-md hover:underline'>Feedback should be as open as possible</a>
                            </li>
                        </ul>
                        <a href='#hard-skills' className='text-lg hover:underline'>Hard skills that will help get your requirements built in time and on budget</a>
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
                <div id='think-economist'>
                    <h2 className='text-2xl'>
                        Think like an economist/statistician
                    </h2>
                    <p>
                        Thinking about projects, tools, and everyday design decisions in terms of tradeoffs, expected values, and opportunity costs improves decision-making.<br/>
                        Decisions are not only made by managers, but every individual contributor asking for advice or help or embarking on a new project will make many technical decisions they fully own. Being aware of these concepts is useful far beyond business school.
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
                    Hard skills that will help get your requirements built in time and on budget
                </h1>
                <br/>
                <h2 className='text-2xl mb-3'>
                    Stuff I have worked with for over a year
                </h2>
                <div className="flex flex-wrap -m-2 ">
                    <ListItemIconify iconId="logos:vim" text="vim" />
                    <ListItemIconify iconId="devicon:linux" text="Linux" />
                    <ListItemIconify iconId="logos:ubuntu" text="Ubuntu" />
                    <ListItemIconify iconId="vscode-icons:file-type-python" text="Python" />
                    <ListItemIconify iconId="devicon:vscode" text="VS Code" />
                </div>
                <br/>
                <h2 className='text-2xl mb-3'>
                    Things I&apos;ve worked with for the past year
                </h2>
                <div className="flex flex-wrap -m-2 ">
                    <ListItemIconify iconId="file-icons:vhdl" text="HDL"/>
                    <ListItemIconify iconId="devicon:c" text="C, for anyone on a screen-reader"/>
                    <ListItemIconify iconId={["simple-icons:typescript", "vscode-icons:file-type-reactjs", "simple-icons:nextdotjs"]} text="TypeScript, React, and Next.js"/>
                </div>
                <br/>
                <h2 className='text-2xl mb-3'>
                    Things I&apos;m dying to learn
                </h2>
                <div className="flex flex-wrap -m-2 ">
                    <ListItemIconify iconId="devicon:wasm" text="WebAssembly" />
                    <ListItemIconify iconId="mdi:language-rust" color="#fff" text="Rust" />
                    <ListItemIconify iconId="eos-icons:hardware-circuit" color="#fff" text="FPGA" />
                    <ListItemIconify iconId="logos:arduino" color="#fff" text="Arduino" fontSize={48}/>
                </div>
                <h2 className='text-2xl p-2'>
                    Other things that don&apos;t have a good icon for them:
                </h2>
                <ul className='list-inside list-disc mb-3'>
                    <li>Operating systems: very early days, but scheduling is a wonderful problem to lose hair over</li>
                    <li>Assembly languages: only played with a <a href="https://github.com/t-flora/the_hack_computer">toy assembly language so far as part of ECS</a>, but it&apos;s great fun</li>
                </ul>
            </section>
        </div>
    )
}