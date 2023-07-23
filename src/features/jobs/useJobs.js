import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getJobs } from "../../services/apiJobs";
import { useSearchParams } from "react-router-dom";
import { getCurrentUser } from "../../services/apiAuth";
export function useJobs() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  //Get by userId

  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => getCurrentUser(),
  });

  //Search
  const searchValue = searchParams.get("search");
  const search = !searchValue
    ? null
    : {
        fields: ["job_title", "company", "location", "status"],
        value: searchValue,
        method: "textSearch",
      };

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
    queryKey: ["jobs", page, filter, search],
    queryFn: () => getJobs({ page, filter, search, user }),
  });

  const rejectedJobs = jobs?.filter((job) => job.status === "rejected");
  const interviewJobs = jobs?.filter((job) => job.status === "interviewing");
  const activeApplications = jobs?.filter((job) => job.status != "rejected");

  return {
    jobs,
    isLoading,
    error,
    count,
    rejectedJobs,
    interviewJobs,
    activeApplications,
  };
}
