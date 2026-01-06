/**
 * Centralized Query Key Factory
 *
 * This module provides type-safe query keys for React Query.
 * Using a factory pattern ensures consistency across the codebase
 * and enables better autocomplete support.
 */

// # query keys
export const queryKeys = {
  // Example keys
  examples: {
    all: ["examples"] as const,
    lists: () => [...queryKeys.examples.all, "list"] as const,
    list: (params?: any) => [...queryKeys.examples.lists(), params] as const,
    details: () => [...queryKeys.examples.all, "detail"] as const,
    detail: (id: string | number) =>
      [...queryKeys.examples.details(), id] as const,
  },
} as const;

// Export type for external use
export type QueryKeys = typeof queryKeys;
