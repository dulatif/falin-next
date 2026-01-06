# Utils Layer Structure

This directory contains pure utility functions.

## 📜 Utility Standard
**Goal**: Reusable, Type-Safe, Pure Functions.

### 1. File Naming
- **CamelCase**: `convertToFormData.ts`, `getSummary.ts` (Single utility).
- **KebabCase**: `next-auth.ts`, `date-format.ts` (Grouped utilities).
- **Extension**: Always `.ts` (No JSX).

### 2. Categories
1.  **Data Transformation**: `convertToFormData`, `getSummary`.
2.  **Validation**: `isValidEmail`, `hasPermission`.
3.  **Formatting**: `formatCurrency`, `formatDate`.
4.  **Config**: `APP_URL`, `DEFAULT_PAGE_SIZE`.

### 3. Implementation Rules
1.  **Pure Functions**: No side effects. Same input = Same output.
2.  **Type Safety**: No `any`. Use generics for flexibility (`getNestedValue<T>`).
3.  **JSDoc Required**:
    ```typescript
    /**
     * Converts object to FormData.
     * @param payload - Source object
     * @returns FormData ready for upload
     */
    export const convertToFormData = (payload: object): FormData => { ... }
    ```
4.  **Error Handling**:
    - Invalid Input -> Early Return (`if (!data) return null`).
    - Critical Error -> Throw (`throw new Error("Missing Env")`).

## 📂 File Structure
- `[feature].ts`: Feature utilities.
- `[domain].ts`: Domain utilities (url, styles).
- `[helper].ts`: Helper utilities.
