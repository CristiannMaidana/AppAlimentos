import { apiGet } from '@/lib/api/client';

const url = 'api/v2/product/5449000205520?fields=product_name,nova_group,nutriscore_grade,ecoscore_grade,nutriments,selected_images,ingredients_text';

export async function fetchProducts() {
  return apiGet<any>(url);
}