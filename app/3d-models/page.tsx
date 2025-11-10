import { getAllModels } from "@/app/lib/models";
import ModelsGrid from "../components/ModelsGrid";

export type Model = {
    id: number,
    name: string,
    description: string,
    likes: number,
    image: string,
    category: string,
    dateAdded: string
};

export default async function ModelsPage() {
    const models: Model[] = await getAllModels();

    return (
        <ModelsGrid title="All 3D Models" models={models} />
    );
}
