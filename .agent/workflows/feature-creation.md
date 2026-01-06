---
description: Standard workflow for implementing a new feature in the React Admin dashboard
---

# Feature Creation Implementation Workflow

1.  **Plan**:
    -   Define key requirements and acceptance criteria.
    -   Identify necessary API endpoints (create if missing).
    -   Identify UI components needed (reuse `src/ui/sections` where possible).

2.  **Schema First**:
    -   Define/Update Interface in `src/interfaces/[domain].ts`.
    -   Define Zod Validation Schema in `src/interfaces/schemas.ts` or specific domain file.

3.  **Service Layer**:
    -   Create/Update `src/api/[domain].ts` adhering to `src/api/+README.md`.
    -   Ensure return types are generic (`api.get<T>`).

4.  **Hooks Layer**:
    -   Create `src/hooks/features/use[Domain].ts`.
    -   Implement `# queries` and `# mutations` using `useServiceHooks`.
    -   Define `# messages` for feedbacks.

5.  **UI Implementation**:
    -   Create View Component: `src/ui/views/[Domain]View.tsx`.
    -   Create sub-components (Modals, Forms) in `src/ui/sections`.
    -   Ensure no direct API calls in UI; use the Hook.

6.  **Route Registration**:
    -   Update `src/app/admin/.../page.tsx`.
    -   Add to Sidebar/Navigation if needed.

7.  **Verify**:
    -   Check "Zero-Context-Loss" rules.
    -   Verify Toast messages on success/error.
