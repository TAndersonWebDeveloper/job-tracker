import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getJobs } from "../../services/apiJobs";
import { useSearchParams } from "react-router-dom";
export function useJobs() {
  // const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  //Filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : {
          field: "status",
          value: filterValue,
          method: "eq",
        };

  //pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    data: { data: jobs, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["jobs", page, filter],
    queryFn: () => getJobs({ page, filter }),
  });
  return { jobs, isLoading, error, count };
}
