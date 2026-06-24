import { mapProduct } from "../mappers/products.mapper";
import { fetchProduct } from "../services/producto.services";
import { Product } from "../types/product";

export async function getProduct(code:number): Promise<Product>{
    const data = await fetchProduct(code);
    return mapProduct(data.product);
}
 