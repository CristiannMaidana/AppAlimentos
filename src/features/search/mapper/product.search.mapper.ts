import { ProductSimply } from '../types/product.search';

export function mapProductSimply(raw: {
  code?: string;
  product_name?: string;
  brands?: string;
  nutriscore_grade?: string;
  ecoscore_grade?: string;
  image_url?: string;
}): ProductSimply {
  return {
    code: raw.code ?? '',
    productName: raw.product_name ?? 'Unknown product',
    brands: raw.brands ?? 'Unknown brand',
    nutriscoreGrade: raw.nutriscore_grade ?? null,
    ecoscoreGrade: raw.ecoscore_grade ?? null,
    imageUrl: raw.image_url ?? '',
  };
}

export function mapProductsSimply(
  rawProducts: {
    code?: string;
    product_name?: string;
    brands?: string;
    nutriscore_grade?: string;
    ecoscore_grade?: string;
    image_url?: string;
  }[]
): ProductSimply[] {
  return rawProducts
    .map(mapProductSimply)
    .filter((product) => product.code.length > 0 && product.productName.length > 0);
}
