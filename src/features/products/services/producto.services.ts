import { apiGet } from '@/lib/api/client';

const url = 'api/v2/product';
const query = '?fields=code,product_name,nova_group,nutriscore_grade,ecoscore_grade,nutriments,image_url,selected_images,ingredients_text,nutrition_data_per,brands';

function buildUrl(code: string): string {
  return `${url}/${code}${query}`;
}

export async function fetchProduct(code: string): Promise<any> {
  return apiGet<any>(buildUrl(code));
}
