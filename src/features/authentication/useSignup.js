import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,

    onSuccess: async (user) => {
      await queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard", { replace: true });
      toast.success(
        "Account created successfully! Please verify account in your email."
      );
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signup, isLoading };
}
