# Specification: falin-query

## # description
A factory-based wrapper for TanStack Query (React Query) designed to standardize data fetching, mutations, and list management in Falin-Next projects.

---

## # factories

### 1. `createQueryHook<T>(options)`
- **Standardization**:
    - Automatically unwraps `res.data` if using standardized envelopes.
    - Built-in error reporting via global snackbar.
    - Default `staleTime` and `cacheTime` configurations.

### 2. `createMutationHook<TData, TVariables>(options)`
- **Standardization**:
    - `successMessage`: Automatic success snackbar on completion.
    - `invalidateKeys`: List of `QueryKey`s to refresh automatically.
    - `onMutationError`: Automatic handling of 4xx/5xx errors through a centralized mapper.

### 3. `createInfiniteQueryHook<T>(options)`
- **Specialization**:
    - Standardized `getNextPageParam` logic (supports `page` or `cursor`).
    - Integrated with `TablePagination` types.
    - Helper for "Load More" vs "Infinite Scroll" logic.

---

## # utilities

### `OptimisticHelper`
- A utility to simplify manual cache updates.
- Usage inside `createMutationHook`:
  ```typescript
  optimistic: {
    update: (old, vars) => ({ ...old, status: vars.status }),
    rollback: true
  }
  ```

### `GlobalLoadingRegistry`
- A store that tracks all active "falin-query" requests.
- Exposes a `useIsAnyFetching()` hook for global progress bars (NProgress style).

---

## # design-principles
- **Zero-Boilerplate**: Hooks should require < 10 lines of configuration.
- **Type-Safe**: Complete generic propagation from API service to React component.
- **Consistency**: Success/Error UI responses must behave identically across the entire app.
