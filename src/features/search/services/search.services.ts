import { apiGet } from "@/lib/api/client";

const query='cgi/search.pl?search_terms='
const parameters='&search_simple=1&action=process&json=1&fields=code,product_name,brands,image_url,nutriscore_grade,ecoscore_grade'

function buildUrl(product: string): string {
    return `${query}${product}${parameters}`;
}

export async function searchProduct (product: string): Promise <any> {
    return apiGet<any>(buildUrl(product));
}