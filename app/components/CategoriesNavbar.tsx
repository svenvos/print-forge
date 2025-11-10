import { getAllCategories } from "@/app/lib/categories";
import Link from "next/link";
import type { Category } from "@/app/lib/categories";
import type { JSX } from "react";

export default function CategoriesNavbar() {
    const categories: Category[] = getAllCategories();
    const categoryElements: JSX.Element[] = categories.map((category: Category): JSX.Element => {
        return (
            <li key={category.slug}>
                <Link href={`/3d-models/categories/${category.slug}`}>{category.displayName}</Link>
            </li>
        );
    });

    return (
        <nav className="px-5 sm:px-0 sm:pl-10">
            <ul className="flex gap-4 text-[#606060] font-medium text-sm overflow-scroll text-nowrap uppercase tracking-wider sm:flex-col">
                <li>
                    <Link href="/3d-models">All</Link>
                </li>
                {categoryElements}
            </ul>
        </nav>
    );
}
