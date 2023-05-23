import Link from "next/link";
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
                className="px-4 py-2 border-2 border-transparent hover:border-gray-400"
                // className={`nav__item ${
                //     isActive ? "active" : ""
                //     }`}
            >
                {label}
            </Link>
        </div>
    )
}

export default function Navbar() {
    return (
        <nav className="p-2 mb-3 justify-around">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink label="home" href="./" />
                <NavLink label="about" href="./about" />
                <NavLink label="what you want here" href="./skills" />
                <NavLink label="blog" href="./blog" />
                <NavLink label="contact" href="./contact" />
            </div>
        </nav>
    );
}