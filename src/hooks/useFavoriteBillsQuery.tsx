import { useQuery } from "@tanstack/react-query";
import { getFavoriteBills } from "../api/bills";
import { useFavoritesStore } from "../store/favorites";

export const useFavoriteBillsQuery = () => {
  const { favorites, favoriteVersion } = useFavoritesStore();

  const {
    data: billsData,
    isLoading,
    dataUpdatedAt,
    error,
    isError,
  } = useQuery({
    queryKey: ["bills-favorites", favoriteVersion],
    queryFn: () => getFavoriteBills(favorites),
    staleTime: 5 * 60 * 1000,
    enabled: favorites.length > 0,
  });

  return { billsData, isLoading, dataUpdatedAt, error, isError };
};
