import { useCallback, useEffect, useState } from 'react';
import { getProduct } from '../repository/products.repository';
import { Product } from '../types/product';

export function useProduct(code?: string) {
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(Boolean(code));
  const [error, setError] = useState<string | null>(null);

  const loadProduct = useCallback(async (productCode = code) => {
    if (!productCode) {
      setProduct(undefined);
      setLoading(false);
      setError(null);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await getProduct(productCode);
      setProduct(data);
    } catch {
      setError('Error loading product');
    } finally {
      setLoading(false);
    }
  }, [code]);

  useEffect(() => {
    void loadProduct(code);
  }, [code, loadProduct]);

  return {
    product,
    loading,
    error,
    reload: () => loadProduct(code),
  };
}

export const useProducts = useProduct;
