import modelsData from "@/app/data/models.json";
import { Model } from "../3d-models/page";

export async function getAllModels() {
    return modelsData;
}

export async function getModelById(id: string | number): Promise<Model> {
    const foundModel = modelsData.find((model: Model) => model.id.toString() === id.toString());

    if (!foundModel) {
        throw new Error(`Model with id ${id} not found`);
    }

    return foundModel;
}
