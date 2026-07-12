import { useQuery } from 'convex/react';

import { api } from '../../../../convex/_generated/api';

export function useFavorites() {
  const favorites = useQuery(api.favorites.listFavorites);

  return {
    favorites: favorites ?? [],
    loading: favorites === undefined,
  };
}
