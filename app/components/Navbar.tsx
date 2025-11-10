"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import mobileLogo from "@/public/mobile-logo.svg";
import desktopLogo from "@/public/desktop-logo.svg";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="bg-white px-5 py-2 flex justify-between items-center sticky top-0 shadow z-1">
            <Link href="/">
                <Image
                    src={mobileLogo}
                    width={40}
                    height={40}
                    alt="PrintForge logo mobile"
                    className="sm:hidden"
                />
                <Image
                    src={desktopLogo}
                    width={240}
                    height={61}
                    alt="PrintForge logo desktop"
                    className="hidden sm:block"
                />
            </Link>
            <nav>
                <ul className="flex items-center gap-5 text-gray-600 font-semibold">
                    <NavLink href="/3d-models" isActive={pathname.includes("/3d-models")}>3D models</NavLink>
                    <NavLink href="/about" isActive={pathname === "/about"}>About</NavLink>
                </ul>
            </nav>
        </header>
    );
}
