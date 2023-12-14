import { useQuery } from "@tanstack/react-query";
import { getAllColleges } from "../services/collegeService";

export function useGetCollegesFetcher(paramUrl: string) {
  const { data, isRefetching, refetch, isLoading } = useQuery({
    queryKey: ["collegesFetcher"],
    queryFn: () => getAllColleges(paramUrl),
  });

  return {
    data,
    isRefetching,
    refetch,
    isLoading,
  };
}
