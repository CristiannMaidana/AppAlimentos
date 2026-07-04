import { apiGet } from '@/lib/api/client';

const query = 'cgi/search.pl?search_terms=';
const parameters =
  '&search_simple=1&action=process&json=1&fields=code,product_name,brands,image_url,nutriscore_grade,ecoscore_grade';
const defaultPageSize = 10;

function buildUrl(product: string, page: number, pageSize: number): string {
  return `${query}${encodeURIComponent(product.trim())}${parameters}&page=${page}&page_size=${pageSize}`;
}

export async function searchProduct(product: string, page = 1, pageSize = defaultPageSize): Promise<{
  products?: {
    code?: string;
    product_name?: string;
    brands?: string;
    nutriscore_grade?: string;
    ecoscore_grade?: string;
    image_url?: string;
  }[];
}> {
  return apiGet<{
    products?: {
      code?: string;
      product_name?: string;
      brands?: string;
      nutriscore_grade?: string;
      ecoscore_grade?: string;
      image_url?: string;
    }[];
  }>(buildUrl(product, page, pageSize));
}
