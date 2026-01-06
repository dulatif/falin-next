/**
 * Mutation Hook Factory
 *
 * This module provides a factory function to create mutation hooks
 * with consistent patterns for success messages, cache invalidation,
 * and error handling.
 *
 * @example
 * // Simple usage
 * export const useCreateFAQMutation = createMutationHook({
 *   mutationFn: FAQService.create,
 *   successMessage: "FAQ created successfully",
 *   invalidateKeys: [queryKeys.faqs.lists()],
 * });
 *
 * // With dynamic invalidation
 * export const useSyncCertificatesForShopMutation = createMutationHook({
 *   mutationFn: CertificateService.syncForShop,
 *   successMessage: "Certificates synced successfully",
 *   getInvalidateKeys: (data, variables) => [
 *     queryKeys.shops.detail(variables.shopId!),
 *   ],
 * });
 *
 * // Upload without invalidation
 * export const useUploadIconMutation = createMutationHook({
 *   mutationFn: FacilityService.uploadIcon,
 *   successMessage: "Icon uploaded successfully",
 * });
 */

import { QueryKey, useMutation } from "@tanstack/react-query";
import { MutationParams, TApiError } from "@/interfaces";
import { useServiceHooks } from "./useServiceHooks";

// # types
interface CreateMutationHookOptions<TData, TVariables> {
  /** The async function that performs the mutation */
  mutationFn: (variables: TVariables) => Promise<TData>;
  /** Success message to show in snackbar */
  successMessage: string;
  /** Static query keys to invalidate on success */
  invalidateKeys?: readonly QueryKey[];
  /** Dynamic query keys based on mutation result */
  getInvalidateKeys?: (data: TData, variables: TVariables) => QueryKey[];
  /** Whether to show success snackbar (default: true) */
  showSuccessSnackbar?: boolean;
}

// # factory
/**
 * Creates a mutation hook with standardized success/error handling.
 *
 * @param options - Configuration for the mutation hook
 * @returns A custom hook that wraps useMutation with consistent patterns
 */
export function createMutationHook<TData, TVariables>(
  options: CreateMutationHookOptions<TData, TVariables>,
) {
  const {
    mutationFn,
    successMessage,
    invalidateKeys = [],
    getInvalidateKeys,
    showSuccessSnackbar = true,
  } = options;

  return (props?: MutationParams<TData, TVariables>) => {
    const { queryClient, openSnackbar, onMutationError } = useServiceHooks();
    const { onSuccess, onError } = props || {};

    return useMutation({
      mutationFn,
      onSuccess: (data, variables, context) => {
        // Static invalidation
        for (const key of invalidateKeys) {
          queryClient.invalidateQueries({ queryKey: key as QueryKey });
        }

        // Dynamic invalidation
        if (getInvalidateKeys) {
          const dynamicKeys = getInvalidateKeys(data, variables);
          for (const key of dynamicKeys) {
            queryClient.invalidateQueries({ queryKey: key });
          }
        }

        // Success feedback
        if (showSuccessSnackbar) {
          openSnackbar({ color: "success", message: successMessage });
        }

        // User callback
        onSuccess?.(data, variables, context);
      },
      onError: (err: TApiError, variables, context) =>
        onMutationError(err, variables, context, onError),
    });
  };
}
