import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getJobs } from "../../services/apiJobs";

export function useJobs() {
  const queryClient = useQueryClient();
  const {
    data: jobs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: getJobs,
  });

  return { jobs, isLoading, error };
}
