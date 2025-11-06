import AboutHero from "./AboutHero";
import AboutHighlightsSection from "./AboutHighlightsSection";
import AboutVision from "./AboutVision";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="flex flex-col gap-5">
            <AboutHero />
            <AboutHighlightsSection />
            <AboutVision />
            <Image 
                src="/watermark.png"
                width={140}
                height={135}
                alt="Watermark"
                className="hidden sm:block sm:mx-auto my-25"
            />
        </main>
    );
}
