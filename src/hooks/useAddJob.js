import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { addJob as addJobApi } from "../services/apiJobs";
import { toast } from "react-hot-toast";
import { getCurrentUser } from "../services/apiAuth";

export const useAddJob = () => {
  const queryClient = useQueryClient();

  const { mutate: addJob, isLoading } = useMutation({
    mutationFn: addJobApi,
    onSuccess: async () => {
      toast.success("Job added successfully");
      queryClient.invalidateQueries(["jobs"]);
    },
    onError: () => {
      toast.error("Job could not be added");
    },
  });

  return { addJob, isLoading };
};
