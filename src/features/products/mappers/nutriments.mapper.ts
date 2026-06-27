import { Nutriments } from "../types/nutriments";

export function mapNutriments(raw: any): Nutriments {
    return {
        carbohydrates: raw.carbohydrates,
        carbohydratesUnit: raw.carbohydrates_unit,
        energy: raw.energy,
        energyKcal: raw['energy-kcal'],
        energyKcal_unit: raw['energy-kcal_unit'],
        energyKj: raw['energy-kj'],
        energyKjUnit: raw['energy-kj_unit'],
        fat: raw.fat,
        fatUnit: raw.fat_unit,
        proteins: raw.proteins,
        proteinsUnit: raw.proteins_unit,
        salt: raw.salt,
        saltUnit: raw.salt_unit,
    }
}
