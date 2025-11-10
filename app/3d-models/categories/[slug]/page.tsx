import { getDisplayNameFromSlug } from "@/app/lib/categories";
import { getAllModels } from "@/app/lib/models";
import ModelsGrid from "@/app/components/ModelsGrid";

type CategoryPageProps = {
    params: Promise<{
            slug: string
        }>
};

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { slug } = await params;
    const categoryName = getDisplayNameFromSlug(slug);
    const models = await getAllModels();
    const categoryModels = models.filter(model => {
        return model.category === slug;
    });
    
    return (
        <ModelsGrid title={categoryName} models={categoryModels} />
    );
}
