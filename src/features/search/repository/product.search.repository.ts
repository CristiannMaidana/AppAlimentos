import { mapProductsSimply } from '../mapper/product.search.mapper';
import { searchProduct } from '../services/search.services';
import { ProductSimply } from '../types/product.search';

export async function getProductSimply(product: string, page = 1, pageSize = 10): Promise<ProductSimply[]> {
  const data = await searchProduct(product, page, pageSize);
  return mapProductsSimply(data.products ?? []);
}
