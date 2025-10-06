import { useQuery } from "@tanstack/react-query";
import { Route } from "../routes/bills.all";
import { getBills } from "../api/bills";

export const useBillsQuery = () => {
  const { status, page } = Route.useSearch();

  const {
    data: billsData,
    isLoading,
    dataUpdatedAt,
    error,
  } = useQuery({
    queryKey: ["bills", page, status],
    queryFn: () =>
      getBills({
        page: page || 1,
        status: status || undefined,
      }),
    staleTime: 5 * 60 * 1000,
  });

  return { billsData, isLoading, dataUpdatedAt, error };
};
