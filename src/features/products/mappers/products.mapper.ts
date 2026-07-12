import { Product } from "../types/product";
import { mapNutriments } from "./nutriments.mapper";

export function mapProduct(raw: any): Product {
  return {
    code: raw.code,
    brands: raw.brands,
    productName: raw.product_name,
    imageUrl: raw.image_url,
    ecoscoreGrade: raw.ecoscore_grade,
    ingredientsText: raw.ingredients_text,
    novaGroup: raw.nova_group,
    nutriments: mapNutriments(raw.nutriments),
    nutriscoreGrade: raw.nutriscore_grade,
    nutriotionalDataPer: raw.nutrition_data_per,
  };
}
