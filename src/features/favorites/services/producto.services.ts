import { apiGet } from '@/lib/api/client';

const url = 'api/v2/product';
const query = '?fields=code,product_name,nova_group,nutriscore_grade,ecoscore_grade,nutriments,selected_images,ingredients_text,nutrition_data_per';

function buildUrl(code: number): string {
  return `${url}/${code}${query}`;
}

export async function fetchProduct(code: number): Promise<any> {
  return apiGet<any>(buildUrl(code));
}
