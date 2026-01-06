// /hooks/useServiceHooks.ts (or useQueryTools.ts)
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import useMutationError, { TError } from "./useMutationError"; // Assuming the path is correct
import useSnackbar, { TOpenSnackbarParams } from "./useSnackbar"; // Assuming the path is correct

interface ServiceHooks {
  queryClient: QueryClient;
  openSnackbar: (params: TOpenSnackbarParams) => void;
  onMutationError: <TVariables, TContext = unknown>(
    err: TError,
    variables: TVariables,
    context: TContext,
    onError?: (err: TError, variables: TVariables, context: TContext) => void,
  ) => void;
}

/**
 * Custom hook to consolidate common application utilities and React Query client.
 * This should be used at the top level of other custom hooks or components.
 */
export const useServiceHooks = (): ServiceHooks => {
  const queryClient = useQueryClient();
  const openSnackbar = useSnackbar((state) => state.open);
  const { onError: onMutationError } = useMutationError();

  return {
    queryClient,
    openSnackbar,
    onMutationError,
  };
};

// export default useServiceHooks; // You can use named export if you prefer
