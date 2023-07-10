import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getJobs } from "../../services/apiJobs";
import { useSearchParams } from "react-router-dom";
export function useJobs() {
  // const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    data: { data: jobs, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["jobs", page],
    queryFn: () => getJobs({ page }),
  });

  return { jobs, isLoading, error, count };
}
