import { useEffect, useRef, useState } from 'react';

import { getProductSimply } from '../repository/product.search.repository';
import { ProductSimply } from '../types/product.search';

export function useSearchProducts(initialSearch = '') {
  const [textInput, setTextInput] = useState('');
  const [products, setProducts] = useState<ProductSimply[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const requestIdRef = useRef(0);

  useEffect(() => {
    const normalizedSearch = initialSearch.trim();

    setTextInput((currentValue) =>
      currentValue === normalizedSearch ? currentValue : normalizedSearch
    );
  }, [initialSearch]);

  useEffect(() => {
    const searchValue = textInput.trim();

    if (searchValue.length === 0) {
      setProducts([]);
      setLoading(false);
      setError(null);
      return;
    }

    const currentRequestId = requestIdRef.current + 1;
    requestIdRef.current = currentRequestId;

    const timeoutId = setTimeout(async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await getProductSimply(searchValue);

        if (requestIdRef.current === currentRequestId) {
          setProducts(result);
        }
      } catch {
        if (requestIdRef.current === currentRequestId) {
          setProducts([]);
          setError('Error loading products');
        }
      } finally {
        if (requestIdRef.current === currentRequestId) {
          setLoading(false);
        }
      }
    }, 350);

    return () => clearTimeout(timeoutId);
  }, [textInput]);

  return {
    textInput,
    setTextInput,
    products,
    loading,
    error,
  };
}
