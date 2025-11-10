import Image from "next/image";
import Link from "next/link";
import mobileLogo from "@/public/mobile-logo.svg";
import desktopLogo from "@/public/desktop-logo.svg";

export default function Navbar() {
    return (
        <header className="bg-white px-5 py-2 flex justify-between items-center sticky top-0 shadow z-9999">
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
                <ul className="flex items-center gap-5 text-gray-600">
                    <li>
                        <Link href="/3d-models" className="uppercase text-sm font-semibold tracking-wider">3D models</Link>
                    </li>
                    <li>
                        <Link href="/about" className="uppercase text-sm font-semibold tracking-wider">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
