import { useEffect, useRef, useState } from 'react';

import { getProductSimply } from '../repository/product.search.repository';
import { ProductSimply } from '../types/product.search';

const PAGE_SIZE = 10;

export function useSearchProducts(initialSearch = '') {
  const [textInput, setTextInput] = useState('');
  const [products, setProducts] = useState<ProductSimply[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const requestIdRef = useRef(0);
  const pageRef = useRef(1);

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
      setLoadingMore(false);
      setHasMore(false);
      setError(null);
      pageRef.current = 1;
      return;
    }

    const currentRequestId = requestIdRef.current + 1;
    requestIdRef.current = currentRequestId;

    const timeoutId = setTimeout(async () => {
      try {
        setLoading(true);
        setLoadingMore(false);
        setError(null);
        pageRef.current = 1;
        const result = await getProductSimply(searchValue, 1, PAGE_SIZE);

        if (requestIdRef.current === currentRequestId) {
          setProducts(result);
          setHasMore(result.length === PAGE_SIZE);
        }
      } catch {
        if (requestIdRef.current === currentRequestId) {
          setProducts([]);
          setHasMore(false);
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

  async function loadMore() {
    const searchValue = textInput.trim();

    if (searchValue.length === 0 || loading || loadingMore || !hasMore) {
      return;
    }

    const currentRequestId = requestIdRef.current;
    const nextPage = pageRef.current + 1;

    try {
      setLoadingMore(true);
      const result = await getProductSimply(searchValue, nextPage, PAGE_SIZE);

      if (requestIdRef.current !== currentRequestId) {
        return;
      }

      setProducts((currentProducts) => [...currentProducts, ...result]);
      pageRef.current = nextPage;
      setHasMore(result.length === PAGE_SIZE);
    } catch {
      if (requestIdRef.current === currentRequestId) {
        setError('Error loading products');
      }
    } finally {
      if (requestIdRef.current === currentRequestId) {
        setLoadingMore(false);
      }
    }
  }

  return {
    textInput,
    setTextInput,
    products,
    loading,
    loadingMore,
    hasMore,
    loadMore,
    error,
  };
}
