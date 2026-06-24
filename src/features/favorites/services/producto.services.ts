import { apiGet } from '@/lib/api/client';

const url = 'api/v2/product/';
const query = '?fields=product_name,nova_group,nutriscore_grade,ecoscore_grade,nutriments,selected_images,ingredients_text';

function builUrl(code: number): string {
  return `${url}${code}${query}`
};

export async function fetchProduct(code: number) {
  return apiGet<any>(builUrl(code));
}