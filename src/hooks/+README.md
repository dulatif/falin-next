# Hooks Layer Structure

This directory contains React Custom Hooks.

## 📜 Rules & Patterns

### 1. File Structure Standard
Every hook file (`use[Domain].ts`) must have these 4 sections:
1.  **`# messages`**: UI strings for Snackbars/Toasts.
2.  **`# queries`**: Data fetching (`useQuery`).
3.  **`# mutations`**: Data modification (`useMutation`).
4.  **`# utils`** (optional): Internal helpers.

### 2. The Messages Object
Never hardcode strings in mutation blocks.
```typescript
// # messages
const MESSAGES = {
  CREATE_SUCCESS: "Item created successfully",
  DELETE_SUCCESS: "Item removed successfully",
};
```

### 3. Query Standards
- **Source of Truth**: Keys MUST come from `@/constant/queryKeys`.
- **Structure**: `queryKeys.domain.list(params)` or `queryKeys.domain.detail(id)`.
- **Safety**: Use `enabled: !!id` for detail queries.

```typescript
// # queries
export const useGetItemById = (id: number) => {
  return useQuery({
    queryKey: queryKeys.ITEMS.DETAIL(id),
    queryFn: () => ItemService.find(id),
    enabled: !!id,
  });
};
```

### 4. Mutation Standards
**Micro-Architecture**: Use the `createMutationHook` factory.
- **Factory**: `src/hooks/core/useMutationFactory.ts`.
- **Note**: It returns the HOOK itself, not a hook result.

```typescript
// # mutations
export const useCreateItemMutation = createMutationHook({
  mutationFn: ItemService.create,
  invalidateKeys: [queryKeys.ITEMS.LIST],
  successMessage: MESSAGES.CREATE_SUCCESS,
});
```

## 📂 Directory Map
- `core/`: Generic, reusable hooks (e.g., `useTranslation`, `useSnackbar`, `useTable`).
- `features/`: Domain-specific business logic (e.g., `useProductQuery`, `useUserMutation`).
