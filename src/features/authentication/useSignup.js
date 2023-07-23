import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,

    onSuccess: async (user) => {
      await queryClient.setQueryData(["user"], user.user);

      toast.success("Account created successfully! Please log in.");
      navigate("/dashboard", { replace: true });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signup, isLoading };
}
