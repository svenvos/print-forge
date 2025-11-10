"use client";

import { getAllCategories } from "@/app/lib/categories";
import NavLink from "./NavLink";
import type { Category } from "@/app/lib/categories";
import type { JSX } from "react";
import { usePathname } from "next/navigation";

export default function CategoriesNavbar() {
    const pathname = usePathname();
    const categories: Category[] = getAllCategories();
    const categoryElements: JSX.Element[] = categories.map((category: Category): JSX.Element => {
        return (
            <NavLink key={category.slug} href={`/3d-models/categories/${category.slug}`} isActive={pathname === `/3d-models/categories/${category.slug}`}>{category.displayName}</NavLink>
        );
    });

    return (
        <nav className="bg-white sticky top-0 p-5 z-10 sm:p-0 sm:pl-10 sm:z-0">
            <ul className="flex gap-4 text-[#606060] font-medium overflow-x-auto text-nowrap sm:flex-col">
                <NavLink href="/3d-models" isActive={pathname === "/3d-models"}>All</NavLink>
                {categoryElements}
            </ul>
            <div className="absolute top-0 right-0 w-12 h-full pointer-events-none bg-gradient-to-l from-white to-transparent md:hidden" />
        </nav>
    );
}
