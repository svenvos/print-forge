import type { Model } from "../3d-models/page";
import Image from "next/image";
import Link from "next/link";
import Pill from "./Pill";
import heart from "@/public/heart.svg";
import aboutImage from "@/public/about-image.png";

export default function ModelCard({ model }: { model: Model }) {
    return (
        <Link href={`/3d-models/${model.id}`} className="max-w-[362px] block group rounded-[10px] hover:shadow-[0_5px_12px_rgba(0,0,0,0.1)] hover:-translate-y-[3px] transition-all">
            <div className="overflow-hidden transition-shadow rounded-[10px] bg-white shadow-md hover:shadow-lg">
                <Image
                    src={aboutImage}
                    alt={model.description}
                    width={362}
                    height={362}
                    className="rounded-t-[10px]"
                />
                <div className="p-4 flex flex-col flex-1 gap-3 border-x border-b border-gray-accent rounded-b-[10px]">
                    <div className="flex justify-between mb-2 min-h-[3.5rem]">
                        <h2 id={`model-${model.id}-title`} className="text-xl font-semibold text-gray-800 line-clamp-2">
                            {model.name}
                        </h2>
                    </div>
                    <p className="text-gray-800 text-sm line-clamp-2 min-h-[2.5rem] leading-[1.25rem]">
                        {model.description}
                    </p>
                    <Pill>{model.category}</Pill>
                    <div className="flex items-center gap-1">
                        <Image
                            src={heart}
                            alt="Heart icon"
                            width={21}
                            height={18}
                            className="text-gray-accent"
                        />
                        <p className="text-[#606060]">{model.likes}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
