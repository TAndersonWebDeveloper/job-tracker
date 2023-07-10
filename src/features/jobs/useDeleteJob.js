import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteJob as deleteJobApi } from "../../services/apiJobs";
import { toast } from "react-hot-toast";

export const useDeleteJob = () => {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteJob } = useMutation({
    mutationFn: (id) => deleteJobApi(id),
    onSuccess: async () => {
      queryClient.invalidateQueries(["jobs"]);
      toast.success("Job deleted successfully");
    },
  });

  return { deleteJob, isDeleting };
};
