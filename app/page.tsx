import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
    return (
        <main>
            <section className="my-10 px-5 flex flex-col sm:flex-row sm:items-center sm:gap-25 sm:px-10">
                <div className="mb-10 max-w-[600px]">
                    <p className="hidden mb-5 uppercase font-medium tracking-wider sm:block">Your go-to platform for 3D printing files</p>
                    <h1 className="mb-5 font-bold text-[2.5rem] sm:text-[3.5rem]">Discover what's possible with 3D printing</h1>
                    <p className="mb-10 text-2xl sm:text-[1.75rem] sm:mb-18">Join our community of creators and explore a vast library of user-submitted models.</p>
                    <Link
                        href="/models"
                        className={`p-3 uppercase text-xl font-bold border-2 border-black sm:font-semibold`}
                    >Browse models</Link>
                </div>
                <Image
                    src="/hero-image.png"
                    alt="Hero image of PrintForge"
                    width={627}
                    height={627}
                />
            </section>
        </main>
    );
}
