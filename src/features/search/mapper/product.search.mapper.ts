import { ProductoSimply } from "../types/product.search";

export function mapProductSimply (raw: any): ProductoSimply {
    return {
        code: raw.code,
        productName: raw.product_name,
        nutriscoreGrade: raw.nutriscore_grade,
        ecoscoreGrade: raw.ecoscore_grade,
        imageUrl: raw.image_url,
    };
}