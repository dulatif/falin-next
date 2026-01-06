# The Architecture Manifesto: 10 Commandments

This document defines the core philosophy that governs every line of code in this project. Breaking these rules is creating "Technical Debt".

---

## 1. The "Pure Logic" Rule
> **Motto**: "Indent less, understand more."

### Concept
Code should be flat. Deeply nested `if/else` blocks hide the "Happy Path" (the main logic flow) inside layers of conditions, forcing the developer to keep a stack of states in their head.

### Why?
Nested code is hard to read, hard to refactor, and prone to bugs when conditions change. Flat code makes the "Main Success Scenario" obvious.

### Evidence
*   **Bad**:
    ```typescript
    if (user) {
      if (isAdmin) {
        save();
      }
    }
    ```
*   **Good (Guard Clauses)**:
    ```typescript
    if (!user) return;
    if (!isAdmin) return;
    save(); // Distinct and obvious
    ```

---

## 2. The "Context Safety" Rule
> **Motto**: "No hidden state. No surprises."

### Concept
Functions and Components should be "Stateless" or "Pure" whenever possible. Avoid relying on global variables, implicit `this` contexts, or hidden side effects.

### Why?
Hidden state creates "Spooky Action at a Distance". Changing a variable in one file breaks a function in another file 10 folders away.

### Evidence
*   We avoid `var` or mutable global `let`.
*   We prefer passing dependencies (dependency injection) over importing global singletons inside functions.

---

## 3. The "Schema First" Rule
> **Motto**: "If it's not typed, it doesn't exist."

### Concept
Data structures (Interfaces, Zod Schemas) must be defined **before** writing the logic that uses them. The "Shape" of the data dictates the flow of the code.

### Why?
Writing logic for undefined data leads to "Field Guessing" (`user.name?` or `user.fullName?`). This causes 80% of runtime errors.

### Evidence
*   **Zod Schemas**: Used for Form Validation (`loginSchema`) and API Response validation.
*   **Strict Types**: We define `auth.interface.ts` before writing `AuthHooks.ts`.

---

## 4. The "Registry" Pattern
> **Motto**: "Magic strings are bugs waiting to happen."

### Concept
System-critical keys (Query Keys, Route Paths, API Endpoints, LocalStorage Keys) must be centralized in a "Registry" (Constant file) and never typed manually as strings.

### Why?
Typing `"GET_USER"` manually in 5 different files guarantees that one day you will type `"GET_USERS"` and spend 4 hours debugging why the cache didn't invalidate.

### Evidence
*   **Query Keys**: `src/constant/queryKeys.ts`
*   **Routes**: `src/constant/routes.ts`

---

## 5. The "Three-Layer Strictness" Rule
> **Motto**: "Know your place."

### Concept
Code is strictly divided into three layers of responsibility. A layer can only talk to the layer directly below it.

### Why?
Mixing responsibilities (e.g., calling `axios` directly inside a Button `onClick`) creates "Spaghetti Code". It makes the UI impossible to test without mocking the entire network stack.

### Evidence
*   **Level 1 (UI)**: `src/ui`. *Visuals only*. Never imports `axios`.
*   **Level 2 (Logic)**: `src/hooks`. *State & glue*. Imports API.
*   **Level 3 (Data)**: `src/api`. *Pure Transport*.

---

## 6. The "Single Point of Entry" Rule
> **Motto**: "Don't dig deep. Use the door."

### Concept
Modules should expose their public API via a root index file (Barrel File). Other parts of the app should import from the module root, not deep inside the folder structure.

### Why?
Deep imports (`src/components/Banner/impl/BannerItem`) couple the consumer to the internal structure of the producer. If we refactor `BannerItem`, the consumer breaks. Barrel files allow us to change internals without breaking externals.

### Evidence
*   **Good**: `import { BannerService } from "@/api/services";`
*   **Bad**: `import BannerService from "@/api/banner/BannerService";`

---

## 7. The "Factory Pattern" for Repetition
> **Motto**: "Write it once, use it everywhere."

### Concept
When specific logic patterns (like Mutating Data, Handling Errors, or Creating List Queries) repeat 3+ times, they must be abstracted into a Factory function.

### Why?
Copy-pasting boilerplate leads to "drift". If we fix a bug in error handling, we have to copy that fix to 50 files. Factories fix it in one place.

### Evidence
*   **`createMutationHook`**: All mutations in the app use this to standardise error toasts and cache invalidation.
*   **`queryKey` factories**: Centralized key generation.

---

## 8. The "Sectioned File" Structure
> **Motto**: "A place for everything."

### Concept
Every file, especially large ones, should follow a consistent ordering of sections, often marked by comments.

### Why?
When opening a 200-line file, developers shouldn't have to scan the whole thing to find the variable definitions. Consistency reduces cognitive load.

### Evidence
*   **Order**:
    1.  Imports
    2.  Types / Interfaces
    3.  Component / Function Definition
    4.  Hooks / Logic
    5.  Render / Return
*   **Comments**: Use `// #region` or `// --- Constants ---` to mark zones.

---

## 9. The "Explicit Dependencies" Rule
> **Motto**: "No Ghosts in the Machine."

### Concept
Functions and Hooks should explicitly declare what they need to work. Avoid closures that capture stale variables or relying on parent scope variables that might change.

### Why?
React's `useEffect` dependencies are the prime example. Missing a dependency leads to stale closures and bugs that are impossible to reproduce. Pass it in, or declare it in the dependency array.

### Evidence
*   We use ESLint `react-hooks/exhaustive-deps`.
*   We prefer arguments over closure capture in helper functions.

---

## 10. The "DTO vs. Entity" Rule
> **Motto**: "Input is not Output."

### Concept
Do not use the same type for "What I send to the server" (DTO) and "What the server sends to me" (Entity).

### Why?
*   **Forms (DTO)**: Have optional fields, string representations of numbers, and raw File objects.
*   **Entities**: Have mandatory IDs, formatted Dates, and URL strings.
Using one type for both leads to hacks like `id?: number` everywhere.

### Evidence
*   `CreateBannerFormValues` (DTO) vs `Banner` (Entity).
