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
        <Link href={href} className={`nav__item ${
            isActive ? "active" : ""
        }`}>
            {label}
        </Link>
    )
}

export default function Navbar() {
    return (
        <div>
            <NavLink label="home" href="./" />
            <NavLink label="about" href="./about" />
            <NavLink label="blog" href="./blog" />
        </div>
    );
}