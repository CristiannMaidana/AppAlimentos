import { useEffect, useState } from 'react';
import { getProduct } from '../repository/products.repository';
import { Product } from '../types/product';

export function useProduct() {
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function loadProduct() {
    try {
      setLoading(true);
      setError(null);
      const data = await getProduct(5449000205520);
      setProduct(data);
    } catch {
      setError('Error loading product');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProduct();
  }, []);

  return {
    product,
    loading,
    error,
    reload: loadProduct,
  };
}

export const useProducts = useProduct;
