import Form from "next/form";
import { getModels } from "@/app/lib/models";
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

type ModelsPageProps = {
    searchParams: {
        q?: string
    }
};

export default async function ModelsPage({ searchParams }: ModelsPageProps) {
    const models: Model[] = await getModels();
    const { q } = await searchParams;

    const filteredModels: Model[] = q
    ? models.filter((model: Model) => 
        model.name.toLowerCase().includes(q.toLowerCase()) ||
        model.description.toLowerCase().includes(q.toLowerCase()
    ))
    : models;

    return (
        <>
            <Form action="/3d-models" className="flex flex-col mb-8">
                <input
                    className="px-4 py-2 w-full border border-[#606060] rounded-full sm:w-[300px] sm:self-end"
                    type="text"
                    name="q"
                    placeholder="Search for a model..."
                    autoComplete="off"
                    defaultValue={q}
                    aria-label="Search for specific models."
                />
            </Form>
            <ModelsGrid title="All 3D Models" models={filteredModels} />
        </>
    );
}
