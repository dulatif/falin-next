# The "Component-Hook" Pattern

## The Core Concept
This project implements a strict separation of **UI (View)** and **Logic (Controller)** using a pattern we call **"Component-Hooks"**.

**File Naming Convention:**
*   View: `[ComponentName].tsx`
*   Logic: `[ComponentName].hooks.ts`

## The Problem with Traditional React
Standard React components often become "God Components" mixing:
1.  **State Logic**: `useState`, `useEffect`.
2.  **API Logic**: `useQuery`, `useMutation`.
3.  **UI Logic**: Rendering HTML, styling, `className`.
4.  **Event Handlers**: `onClick`, `onSubmit`.

This violates the **Single Responsibility Principle**. The UI component "knows" too much about *how* data is fetched, rather than just *what* to display.

## The Solution: The Hook-View Split

### 1. The Logic File (`.hooks.ts`)
This file acts as the **Controller**. It is responsible for:
*   Initializing Form State (react-hook-form).
*   Calling APIs (TanStack Query).
*   Handling user interactions (Handlers).
*   Formatting data for the view.

**It returns pure data and functions.** It does NOT return JSX.

```typescript
// AddBannerForm.hooks.ts
export const useAddBannerForm = ({ onSuccess }) => {
  const form = useForm(...);
  const mutation = useMutation(...);

  const onSubmit = (data) => mutation.mutate(data);

  return {
    register: form.register,
    errors: form.formState.errors,
    onSubmit,
    isLoading: mutation.isPending
  };
};
```

### 2. The View File (`.tsx`)
This file acts as the **View**. It is responsible for:
*   Layout and Structure.
*   Styling (CSS/MUI).
*   Binding data to elements.

**It contains almost NO logic.** It basically just "consumes" the hook.

```tsx
// AddBannerForm.tsx
const AddBannerForm = (props) => {
  // One line to rule them all
  const { register, errors, onSubmit, isLoading } = useAddBannerForm(props);

  return (
    <form onSubmit={onSubmit}>
      <Input {...register("name")} />
      {/* ... */}
    </form>
  );
};
```

## Why `.hooks.ts` and not `use[Name].ts` ?
We explicitly renamed our files from `useAddBannerForm.ts` to `AddBannerForm.hooks.ts` for **Developer Experience (DX)**.

| Naming | File Finder Result (`Cmd+P "AddBanner"`) | Result |
| :--- | :--- | :--- |
| **Standard** | `AddBannerForm.tsx`<br>`useAddBannerForm.ts` | **Bad**. Sort order separates them. |
| **Our Pattern** | `AddBannerForm.hooks.ts`<br>`AddBannerForm.tsx` | **Perfect**. They sit next to each other. |

## Benefits
1.  **Testability**: You can unit test the `.hooks.ts` file without rendering the component (using `renderHook`).
2.  **Readability**: The `.tsx` file becomes a clean declarative description of the UI.
3.  **Refactoring**: Changing the UI library (e.g., MUI to Tailwind) doesn't touch the logic. Changing the Form library (e.g., Hook Form to Formik) doesn't touch the UI.
