const API_BASE_URL = 'https://world.openfoodfacts.org';

function buildApiUrl(url: string): string {
    const normalizedBaseUrl = API_BASE_URL.replace(/\/+$/, '');
    const normalizedPath = url.replace(/^\/+/, '');

    return `${normalizedBaseUrl}/${normalizedPath}`;
}

export async function apiGet<T>(url: string): Promise<T> {
    const response = await fetch(buildApiUrl(url));

    if (!response.ok){
        throw new Error('Request faild');
    }
    else 
        return response.json();
};
