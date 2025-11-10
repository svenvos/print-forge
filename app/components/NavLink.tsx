import Link from "next/link";
import type { ReactNode } from "react";

type NavLinkProps = {
    href: string,
    children: ReactNode,
    isActive?: boolean
};

export default function NavLink({ href, children, isActive }: NavLinkProps) {
    return (
        <li>
            <Link href={href} className={`text-sm uppercase tracking-wider transition-colors hover:text-orange-accent ${isActive ? "text-orange-accent" : ""}`}>{children}</Link>
        </li>
    );
}
