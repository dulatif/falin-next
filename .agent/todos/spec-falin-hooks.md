# Specification: @falin/hooks

## # description
A comprehensive "Headless" toolkit for Next.js/React applications. This library consolidates data-fetching logic, UI state management, and utility functions into a single, high-performance package.

---

## # modules

### 1. Data Orchestration (`/data`)
Standardizes how the application interacts with external APIs and manages server state.
- **`createMutationHook`**: Factory for `useMutation` with automatic snackbars and cache invalidation.
- **`useMutationError`**: Centralized error mapping (Axios -> UI).
- **`useServiceHooks`**: Coordination hook for `QueryClient` and Feedback systems.
- **`createQueryHook`**: (Planned) Simple wrapper for unwrapping API data.

### 2. UI State Management (`/ui`)
Pure logic hooks for managing common frontend patterns without being tied to a specific UI framework.
- **`useModalManager`**: High-level state for Add/Edit/Delete/Detail modal flows with entity ID tracking.
- **`useSnackbar`**: Global feedback state (designed to be used with Zustand or similar).

### 3. Utility Suite (`/utils`)
Standardized helpers used by the hooks and components.
- **`convertToFormData`**: Advanced tool for converting nested objects to `FormData`, handling files and JSON strings automatically.

---

## # technical-details

### Dependencies
- `tanstack/react-query` (Peer dependency)
- `axios` (Peer dependency)
- `zustand` (Internal/Optional)

### Design Goals
- **Framework Agnostic**: The hooks manage logic, not JSX. This makes the library compatible with MUI, Tailwind, or Shadcn.
- **Tree-Shakeable**: Exports must be modular to ensure users only bundle what they use.
- **Zero-Context-Loss**: Strict TypeScript propagation from the API response types to the hook consumers.

---

## # future-roadmap
- **Migration to TanStack Table**: Replacing `useTable` (MUI) with a headless `useTanStackTable` wrapper to allow full UI flexibility.
- **PWA Helpers**: Hooks for offline state and sync tracking.
