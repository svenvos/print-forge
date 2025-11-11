import { getDisplayNameFromSlug } from "@/app/lib/categories";
import { getModels } from "@/app/lib/models";
import ModelsGrid from "@/app/components/ModelsGrid";

type CategoryPageProps = {
    params: Promise<{
            slug: string
        }>
};

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { slug } = await params;
    const displayName = getDisplayNameFromSlug(slug);
    const models = await getModels({ category: slug });
    const categoryModels = models.filter(model => {
        return model.category === slug;
    });
    
    return (
        <ModelsGrid title={displayName} models={categoryModels} />
    );
}
