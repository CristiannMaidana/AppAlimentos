import { Product } from "../types/product";
import { mapNutriments } from "./nutriments.mapper";

export function mapProduct(raw: any): Product {
  return {
    code: raw.code,
    productName: raw.product_name,
    ecoscoreGrade: raw.ecoscore_grade,
    ingredientsText: raw.ingredients_text,
    novaGroup: raw.nova_group,
    nutriments: mapNutriments(raw.nutriments),
    nutriscoreGrade: raw.nutriscore_grade,
    nutriotionalDataPer: raw.nutrition_data_per,
  };
}
