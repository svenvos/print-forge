import type { Model } from "../3d-models/page";
import type { JSX } from "react";
import ModelCard from "./ModelCard";

type ModelsGridProps = {
    title: string,
    models: Model[]
};

export default function ModelsGrid({ title, models }: ModelsGridProps) {
    const modelElements: JSX.Element[] = models.map(model => {
        return (
            <ModelCard key={model.id} model={model} />
        );
    });

    return (
        <div>
            <h1 className="text-[2rem] mb-8 hidden sm:block">{title}</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {modelElements}
            </div>
        </div>
    );
}
