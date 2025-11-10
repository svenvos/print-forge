import { getModelById } from "@/app/lib/models";
import type { Model } from "../page";
import Link from "next/link";
import Image from "next/image";
import Pill from "@/app/components/Pill";
import aboutImage from "@/public/about-image.png";
import heart from "@/public/heart.svg";

export default async function ModelSpecificPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const model: Model = await getModelById(id);

    return (
        <main>
            <div className="flex justify-center p-5 md:hidden">
                <Link href="/3d-models" className="uppercase font-semibold text-sm text-[#606060]">Back to overview</Link>
            </div>
            <div className="max-w-[362px] mx-auto my-10 px-5 flex flex-col md:max-w-[1192px] md:flex-row md:gap-10 md:items-center">
                <Image
                    src={aboutImage}
                    width={662}
                    height={662}
                    alt={model.description}
                    className="rounded-xs"
                />
                <div className="py-5">
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-1">
                            <Image
                                src={heart}
                                width={32}
                                height={32}
                                alt="Heart icon"
                            />
                            <p className="text-2xl text-[#606060]">{model.likes}</p>
                        </div>
                        <h2 className="text-[2rem]">{model.name}</h2>
                        <Pill>{model.category}</Pill>
                        <p className="text-2xl grow">{model.description}</p>
                        <p className="mt-10">Added on: {model.dateAdded}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
