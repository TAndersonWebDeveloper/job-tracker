import { useQuery } from "@tanstack/react-query";
import { getJob } from "../../services/apiJobs";
import { useParams } from "react-router-dom";

export function useJob() {
  const { jobId } = useParams();

  const {
    isLoading,
    error,
    data: job,
  } = useQuery({
    queryKey: ["job", jobId],
    queryFn: () => getJob(jobId),
  });

  return { job, isLoading, error };
}
