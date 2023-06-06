'use client';
import Link from "next/link";
import React, { useState } from "react";
import { Icon } from '@iconify/react';
// import { useRouter } from "next/navigation";

interface NavLinkProps {
    label: string;
    href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ label, href }) => {
    // const router = useRouter();
    // const isActive = router.pathname === href;

    return (
        <div className="block py-3 rounded">
            <Link href={href}
                className="px-4 py-2 border-2 min-w-[48px] min-h-[48px] border-transparent hover:border-gray-400"
                >
                {label}
            </Link>
        </div>
    )
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="p-2 mb-3 justify-around">
            <div className="md:hidden">
                <button type="button" onClick={() => (setIsOpen(!isOpen))}>
                    <Icon icon="cil:hamburger-menu" fontSize={32} color="#fff" />
                </button>
            </div>
            <div className="hidden md:flex max-w-screen-xl flex-wrap items-center justify-between mx-auto p-4">
                <NavLink label="home" href="./" />
                <NavLink label="about" href="./about" />
                <NavLink label="what you're looking for" href="./skills" />
                <NavLink label="blog" href="./blog" />
                <NavLink label="contact" href="./contact" />
            </div>

            {isOpen && (
            <div>
                {/* <button type="button" onClick={() => setIsOpen(!isOpen)}>
                    <Icon icon="heroicons-solid:x" fontSize={32} className="h-6 w-6 text-white" color="#fff" />
                </button> */}
                <div className="md:hidden max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink label="home" href="./" />
                    <NavLink label="about" href="./about" />
                    <NavLink label="what you want here" href="./skills" />
                    <NavLink label="blog" href="./blog" />
                </div>
            </div>
            )}
        </nav>
    );
}