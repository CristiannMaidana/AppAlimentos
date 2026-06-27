import { mapProductsSimply } from '../mapper/product.search.mapper';
import { searchProduct } from '../services/search.services';
import { ProductSimply } from '../types/product.search';

export async function getProductSimply(product: string): Promise<ProductSimply[]> {
  const data = await searchProduct(product);
  return mapProductsSimply(data.products ?? []);
}
