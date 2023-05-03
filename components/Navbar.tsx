"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NavLinkProps {
    label: string;
    href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ label, href }) => {
    const router = useRouter();
    const isActive = router.pathname === href;

    return (
        <div className="block py-3">
        <Link href={href} className={`nav__item ${
            isActive ? "active" : ""
        }`}>
            {label}
        </Link>
        </div>
    )
}

export default function Navbar() {
    return (
        <nav className="mb-3 h-3 border-gray-400 top-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink label="home" href="./" />
                <NavLink label="about" href="./about" />
                <NavLink label="blog" href="./blog" />
            </div>
        </nav>
    );
}