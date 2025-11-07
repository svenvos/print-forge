import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="flex flex-col gap-5 px-5 sm:px-10 sm:flex-row sm:gap-25 sm:items-center sm:justify-center">
            <Image
                src="/about-image.png"
                width={627}
                height={627}
                alt="The about image"
            />
            <div className="max-w-[600px] flex flex-col gap-5">
                <p className="text-sm font-medium uppercase tracking-wider sm:text-xl">About printforge</p>
                <h1 className="text-[2.5rem] leading-12 sm:text-[3.5rem] sm:leading-18">Empowering makers worldwide</h1>
                <p className="text-2xl sm:text-[1.75rem]">Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and professional designers to share and discover amazing STL files for 3D printing.</p>
                <p className="text-2xl sm:text-[1.75rem]">Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring their ideas to life through 3D printing.</p>
            </div>
        </section>
    );
}
