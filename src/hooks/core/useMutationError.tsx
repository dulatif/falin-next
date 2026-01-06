import { AxiosError } from "axios";
import { ApiResponseError, TApiError } from "@/interfaces";
import useSnackbar from "./useSnackbar";

// Re-export for backward compatibility
export type TError = TApiError;

const useMutationError = () => {
  const openSnackbar = useSnackbar((state) => state.open);
  const onError = <TVariables, TContext = unknown>(
    err: TApiError,
    variables: TVariables,
    context: TContext,
    onError?: (
      err: TApiError,
      variables: TVariables,
      context: TContext,
    ) => void,
  ) => {
    console.error("‼️Mutation Error => ", err);
    if (onError) return onError(err, variables, context);

    // Check for ApiResponseError (from our interceptor)
    if ("statusCode" in err && "message" in err) {
      return openSnackbar({
        color: "error",
        message: (err as ApiResponseError).message,
      });
    }

    // Check for AxiosError
    if (
      err instanceof AxiosError ||
      ("name" in err && err.name === "AxiosError")
    ) {
      const axiosError = err as AxiosError;
      return openSnackbar({
        color: "error",
        message:
          (axiosError.response?.data as { message?: string })?.message ??
          axiosError.message,
      });
    }

    // Fallback for generic Error
    openSnackbar({
      color: "error",
      message: "message" in err ? err.message : "An unknown error occurred",
    });
  };
  return {
    onError,
  };
};

export default useMutationError;
