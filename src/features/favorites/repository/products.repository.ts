import { mapProduct } from "../mappers/products.mapper";
import { fetchProduct } from "../services/producto.services";
import { Product } from "../types/product";

export async function getProduct(code:number): Promise<Product>{
    const data = await fetchProduct(5449000205520); // Prueba de un producto: Sprite
    return data.map(mapProduct);
}