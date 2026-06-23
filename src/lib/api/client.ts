export async function apiGet<T>(url: string): Promise<T> {
    const response = await fetch(url);

    if (!response.ok){
        throw new Error('Request faild');
    }
    else 
        return response.json();
};