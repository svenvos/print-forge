import CategoriesNavbar from "@/app/components/CategoriesNavbar";

export default function ModelsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="mb-10 flex flex-col gap-5 relative sm:flex-row sm:gap-20 sm:my-10">
            <CategoriesNavbar />
            <div className="max-w-[1212px] mx-auto px-5 sm:px-0 sm:pr-10">
                {children}
            </div>
        </main>
    );
}
