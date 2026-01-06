# 📋 Beauty App Admin - Technical Debt & Improvement Roadmap

> Generated from Codebase Audit on 2025-12-29
> Reference: [Refactoring.Guru](https://refactoring.guru/)

---

## 📊 Current Metrics

| Dimension              | Score | Target |
| ---------------------- | ----- | ------ |
| Readability            | 8/10  | 9/10   |
| Maintainability        | 7/10  | 9/10   |
| Type Safety            | 8/10  | 9/10   |
| Architectural Integrity| 7/10  | 9/10   |

---

## 🏗️ Category 1: Architecture & Next.js Best Practices

### High Priority

- [x] **RSC-001**: Refactor data-fetching views to use React Server Components
  - Move initial data fetching from `useQuery` to Server Components
  - Wrap client islands with `<Suspense>` boundaries
  - Files: `CustomerServiceView.tsx`, `CertificateView.tsx`, `BannerView.tsx`, etc.
  - Pattern: **Partial Prerendering**

- [x] **RSC-002**: Implement streaming with `loading.tsx` conventions
  - Create `loading.tsx` files for each route in `/app/admin/*`
  - Use skeleton components for table and card layouts

- [x] **RSC-003**: Convert static/read-only components to Server Components
  - Audit components that don't use hooks (`useState`, `useEffect`)
  - Remove unnecessary `"use client"` directives
  - Candidates: `StatCard`, simple display components

### Medium Priority

- [x] **PERF-001**: Implement dynamic imports for heavy modals
  - Use `next/dynamic` with `{ ssr: false }` for modal components
  - Reduces initial JavaScript bundle size
  - Files: All `Modal*.tsx` in `/ui/sections/modals/`

- [x] **PERF-002**: Optimize Material UI bundle
  - Ensure tree-shaking is working (check import style)
  - Use path imports: `import Button from '@mui/material/Button'`
  - Add `modularizeImports` to `next.config.ts`

---

## 🧩 Category 2: State Management & Patterns

### High Priority

- [x] **STATE-001**: Consolidate modal state in Feature Views
  - Create `useModalManager` hook to replace 5-7 `useState` calls
  - Pattern: **State Reducer / State Machine**
  - Files: `CertificateView.tsx`, `CustomerServiceView.tsx`, `ShopCategoryView.tsx`
  - Example:
    ```typescript
    type ModalState = 
      | { type: 'closed' }
      | { type: 'add' }
      | { type: 'edit'; id: ID }
      | { type: 'delete'; id: ID };
    ```

- [ ] **STATE-002**: Replace `ID | null` with explicit modal state object
  - Remove need for separate `showModalEdit` boolean + `editId` number
  - Pattern: **Value Object**
  - Files: All Feature View components

### Medium Priority

- [ ] **STATE-003**: Create standardized `BaseModalProps` interface
  - Define shared interface for all modal components
  - Pattern: **Extract Parameter Object**
  - File: `src/interfaces/modal.ts` (new file)
  - ```typescript
    export interface BaseModalProps {
      open: boolean;
      onClose: () => void;
    }
    export interface EntityModalProps<T = ID> extends BaseModalProps {
      entityId: T;
    }
    ```

---

## 🔁 Category 3: Hook Patterns & DRY Principles

### High Priority

- [x] **HOOK-001**: Create mutation hook factory to eliminate boilerplate
  - Pattern: **Template Method / Factory Function**
  - File: `src/hooks/createMutationHook.ts` (new file)
  - Reduces ~50 lines of repeated code per mutation hook
  - Example:
    ```typescript
    export const useDeleteTicketMutation = createMutation({
      mutationFn: CustomerServiceService.delete,
      invalidateKey: ['customer-service'],
      successMessage: MESSAGES.DELETE_SUCCESS,
    });
    ```

- [x] **HOOK-002**: Remove `any` type in mutation error handlers
  - Replace `(err: any, variables, context)` with proper error interface
  - Use `ApiResponseError` from `src/api/index.ts`
  - Files: All files in `src/hooks/*.ts`

### Medium Priority

- [x] **HOOK-003**: Absorb `useServiceHooks` into mutation factory
  - Current hook is a "Middle Man" smell
  - Should be internal implementation detail of `createMutationHook`
  - File: `src/hooks/useServiceHooks.ts`

---

## 📝 Category 4: Type Safety & Interfaces

### High Priority

- [x] **TYPE-001**: Normalize API response types
  - `GetAllTicketsResponse = Ticket[] | PaginationResponse<Ticket>` forces runtime checks
  - Always return `PaginationResponse<T>` shape from API layer
  - Pattern: **Normalized Return Type**
  - Files: `src/interfaces/customer-service.ts`, `src/api/customer-service.ts`

- [x] **TYPE-002**: Fix Zod schema enum usage
  - Current: `z.enum(Object.values(CertificateType))`
  - This returns `string[]`, not the enum type
  - Fix: `z.nativeEnum(CertificateType)`
  - Files: `src/interfaces/certificate.tsx`, `src/interfaces/shop.ts`

### Medium Priority

- [x] **TYPE-003**: Rename `.tsx` interface files to `.ts`
  - `certificate.tsx` contains JSX but is an interface file
  - Move JSX (Chip components) to a separate constants file
  - Pattern: **Separation of Concerns**

---

## 🏷️ Category 5: Naming & Readability

### Medium Priority

- [ ] **NAME-001**: Fix tautological service naming
  - `CustomerServiceService` → `TicketService` or `CustomerSupportService`
  - File: `src/api/customer-service.ts`

- [ ] **NAME-002**: Extract hardcoded localization strings
  - Move strings like `"행위"`, `"표시하다"` from `useTable.tsx` to constants
  - Create `src/constant/localization.ts`
  - Pattern: **Extract Constant**

- [ ] **NAME-003**: Standardize function naming in components
  - `on*` → Event triggers (from props)
  - `handle*` → Local event handlers
  - Audit and rename inconsistent usages

### Low Priority

- [ ] **NAME-004**: Add `Async` suffix to promise-returning auth functions
  - `login()` → `loginAsync()` (returns Promise)
  - File: `src/utils/auth.ts`

---

## ⚠️ Category 6: Error Handling & UX

### High Priority

- [ ] **ERR-001**: Add error state handling in Feature Views
  - Currently only checking `isPending`, not `isError`
  - Render `<ErrorScreen />` when query fails
  - Files: All Feature View components

- [ ] **ERR-002**: Implement React Error Boundary for data sections
  - Wrap data-dependent sections with Error Boundary
  - File: `src/ui/layouts/ErrorBoundary/` (already exists, verify usage)

### Medium Priority

- [ ] **ERR-003**: Add retry functionality to failed queries
  - Show "Retry" button on error state
  - Use `query.refetch()` on click

---

## 🎨 Category 7: UI Components & Performance

### High Priority

- [ ] **UI-001**: Implement upload progress bar for file inputs
  - Use Axios `onUploadProgress` callback
  - Add progress state to `InputFile` component
  - Files: `src/ui/elements/InputFile/`

- [ ] **UI-002**: Memoize expensive table columns
  - Wrap `useTicketColumns` return with `useMemo`
  - Prevent re-creation on every render
  - Files: All `use*Columns.tsx` in table sections

### Medium Priority

- [ ] **UI-003**: Debug MUI Modal performance issues
  - Use `keepMounted={false}` to unmount modal content when closed
  - Lazy load modal content with `React.lazy()`

- [ ] **UI-004**: Prevent inline functions in JSX
  - Move `onClick={() => ...}` handlers to named functions
  - Follows existing RFC rule in codebase

---

## 📂 Category 8: Code Organization

### Medium Priority

- [ ] **ORG-001**: Sort interface properties consistently
  - Order: primitives → objects → functions
  - Order within group: shortest → longest
  - Apply to all files in `src/interfaces/`

- [ ] **ORG-002**: Categorize handler functions by prefix
  - Group `on*` handlers together
  - Group `handle*` functions together
  - Add section comments: `// # event handlers`

- [ ] **ORG-003**: Implement "Repeater" pattern for list rendering
  - Already have `Repeater` component
  - Document pattern in `.agent/workflows/` or `*-rules.md`
  - Ensure consistent usage across all list views

---

## 🔧 Category 9: DevOps & Tooling

### Low Priority

- [ ] **DX-001**: Add VS Code snippets for standard patterns
  - Create `.vscode/snippets.code-snippets`
  - Add snippets: `thook` (hook file), `tmutation` (mutation hook), `tmodal` (modal component)

- [ ] **DX-002**: Add ESLint rule for consistent imports
  - Enforce MUI path imports for tree-shaking
  - Warn on `import { X } from '@mui/material'`

---

## ✅ Checklist Summary

| Priority | Category                    | Open | Total |
| -------- | --------------------------- | ---- | ----- |
| 🔴 High  | Architecture (RSC)          | 3    | 3     |
| 🔴 High  | State Management            | 2    | 2     |
| 🔴 High  | Hook Patterns               | 2    | 2     |
| 🔴 High  | Type Safety                 | 2    | 2     |
| 🔴 High  | Error Handling              | 2    | 2     |
| 🔴 High  | UI Performance              | 2    | 2     |
| 🟡 Med   | Various                     | 12   | 12    |
| 🟢 Low   | Naming / DevOps             | 3    | 3     |
| **Total**|                             | **28**| **28**|

---

## 📚 References

- [Refactoring.Guru - Code Smells](https://refactoring.guru/refactoring/smells)
- [Refactoring.Guru - Design Patterns](https://refactoring.guru/design-patterns)
- [Next.js Docs - Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [React Docs - Suspense](https://react.dev/reference/react/Suspense)
- [TanStack Query - SSR](https://tanstack.com/query/latest/docs/react/guides/ssr)
