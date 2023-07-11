import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateJob } from "../../services/apiJobs";
import { toast } from "react-hot-toast";

export function useEditJob() {
  const queryClient = useQueryClient();

  const {
    mutate: editJob,
    isLoading,
    error,
  } = useMutation({
    mutationFn: ({ newJob, id }) => updateJob(newJob, id),

    onSuccess: () => {
      queryClient.invalidateQueries("jobs");
      toast.success("Job updated successfully");
    },
  });

  return { editJob, isLoading, error };
}
