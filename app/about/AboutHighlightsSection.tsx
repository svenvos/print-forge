import Image from "next/image";
import AboutHighlight from "./AboutHighlight";

export default function AboutHighlightsSection() {
    return (
        <section className="my-5 p-5 flex flex-col gap-12 border-y border-gray-300 sm:p-10 sm:flex-row sm:justify-center">
            <AboutHighlight>
                <div className="flex gap-[0.375rem]">
                    <Image
                        src="/stack.png"
                        width={40}
                        height={32}
                        alt="Stack icon"
                    />
                    <h2 className="text-[1.75rem]">100K+ Models</h2>
                </div>
                <p className="text-xl">Access our vast library of community-created 3D models, from practical tools to artistic creations.</p>
            </AboutHighlight>
            <div className="border-r mx-10"></div>
            <AboutHighlight>
                <div className="flex gap-[0.375rem]">
                    <Image
                        src="/community.png"
                        width={40}
                        height={32}
                        alt="Community icon"
                    />
                    <h2 className="text-[1.75rem]">Active Community</h2>
                </div>
                <p className="text-xl">Join thousands of makers who share tips, provide feedback, and collaborate on projects.</p>
            </AboutHighlight>
            <div className="border-r mx-10"></div>
            <AboutHighlight className="mb-5">
                <div className="flex gap-[0.375rem]">
                    <Image
                        src="/free-icon.png"
                        width={40}
                        height={32}
                        alt="Free to use icon"
                    />
                    <h2 className="text-[1.75rem]">Free to Use</h2>
                </div>
                <p className="text-xl">Most models are free to download, with optional premium features for power users.</p>
            </AboutHighlight>
        </section>
    );
}
