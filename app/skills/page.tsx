'use client';
import Head from 'next/head';
import '../globals.css';
import { useState } from 'react';
import ProjectGrid from '@/components/skills/ProjectCards/ProjectGrid';
import Pitch from '@/components/skills/Pitch';
import { projects } from '@/data/projects';
// import TOC from '@/components/TableOfContents';

export default function Skills() {
    const [selectedComponent, setSelectedComponent] = useState<"pitch" | "projects">("pitch")

    return (
        <div>
            <div className='flex'>
                <button
                    className={ `flex-1 ${selectedComponent === "projects" ? 'bg-blue-500': 'bg-gray-200'}` }
                    onClick={() => setSelectedComponent("projects")}>
                        projects
                </button>
                <button
                    className={ `flex-1 ${selectedComponent === "pitch" ? 'bg-blue-500': 'bg-gray-200'}` }
                    onClick={() => setSelectedComponent("pitch")}>
                        pitch
                </button>
            </div>
            {selectedComponent === "projects" && <ProjectGrid projects={projects}/>}
            {selectedComponent === "pitch" && <Pitch />}
        </div>
    )
}