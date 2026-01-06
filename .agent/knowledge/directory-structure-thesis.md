# Architecture & Directory Structure Analysis

## The "Layered Core, Atomic UI" Hybrid

Our architecture is a pragmatic composition of three major design philosophies: **Layered Architecture** (Foundation), **Atomic Design** (UI), and **Vertical Slices** (Features).

### 1. The Atomic UI Layer (`src/ui`)
We implement a customized version of **Atomic Design**, adapting the standard nomenclature (Atoms, Molecules, Organisms) to meaningful developer terms (`elements`, `components`, `sections`).

| Atomic Term | Our Directory | Description | Example |
| :--- | :--- | :--- | :--- |
| **Atoms** | `src/ui/elements` | The smallest building blocks. Cannot be broken down further. Pure presentation. | `Checkbox`, `Radio`, `InputDate`, `Render` |
| **Molecules** | `src/ui/components` | Groups of atoms functioning together as a unit. Often reusable form controls or display cards. | `InputGroup` (Input + Label + Error), `StatCard`, `BannerItem` |
| **Organisms** | `src/ui/sections` | Complex UI regions composed of molecules and atoms. Represents a distinct feature area. | `forms/AddBannerForm`, `tables/UserTable`, `modals/ShopDetailModal` |
| **Templates** | `src/ui/layouts` | Page-level scaffolding and grid structures. | `DashboardLayout`, `AuthLayout`, `Modal` (Wrapper) |
| **Pages** | `src/app/*` (Next.js) | Specific instances where routing meets the template. | `app/admin/banners/page.tsx` |

### 2. The Layered Core (`src/*`)
Beneath the Atomic UI lies the "Backend of the Frontend", structured hierarchically.

```text
src/
├── api/                   <-- [Data Layer] Pure HTTP methods.
├── interfaces/            <-- [Model Layer] Global TypeScript definitions.
├── hooks/                 <-- [Logic Layer]
│   ├── core/              (Global utilities like useDebounce)
│   └── features/          (Shared domain logic like useAuth)
```

### 3. The "Hybrid" Directory Structure

```text
src/
├── api/                      <-- Layered Foundation
├── interfaces/               <-- Layered Foundation
├── hooks/                    <-- Layered Foundation
└── ui/                       <-- Atomic Design Implementation
    ├── elements/             (Atoms)
    │   └── Checkbox/
    ├── components/           (Molecules)
    │   └── InputGroup/
    ├── sections/             (Organisms / Vertical Slices)
    │   ├── forms/
    │   │   ├── AddBannerForm/
    │   │   │   ├── AddBannerForm.tsx       (View)
    │   │   │   └── AddBannerForm.hooks.ts  (Logic)
    │   │   └── ...
    │   ├── tables/
    │   └── modals/
    └── layouts/              (Templates)
```

### 4. Comparison: Our Architecture vs. Others

#### A. vs. Traditional Layered (MVC-style)
*   **Traditional**: Views in `src/components`, Controllers in `src/hooks`, Models in `src/types`.
*   **Problem**: Adding a "Banner Form" feature requires hopping between 4 disjointed folders.
*   **Our Advantage**: We group the Feature View (`AddBannerForm.tsx`) and Feature Logic (`AddBannerForm.hooks.ts`) directly in `src/ui/sections`.
*   **Our Trade-off**: We accept some coupling to the global `api` layer to gain type safety and SDK-like usage.

#### B. vs. Pure Vertical Slice (Feature-Sliced Design)
*   **Pure FSD**: Every slice (e.g., `feature/banner`) has its *own* `api`, `model`, `ui`, and `lib` folders. Nothing is shared unless explicitly moved to "Shared".
*   **Problem**: Massive duplication of API helpers and Types (Type Drift). High cognitive load to enforce strict boundaries.
*   **Our Advantage**: We centralize the "Stable" parts (API, Types) to keep them DRY and easy to maintain, while "Slicing" only the volatile parts (UI & View Logic).
*   **Our Trade-off**: Stronger coupling between modules than strict FSD.

#### C. vs. "Screaming Architecture" (Clean Arch)
*   **Clean Arch**: Strict concentric layers (Entities -> Use Cases -> Adapters -> Frameworks).
*   **Problem**: Excessive boilerplate. React components become wrapped in multiple adapters just to fetch data.
*   **Our Advantage**: We use a pragmatic 3-layer flow (`API -> Hook -> UI`), which is 80% effective with 20% of the code. We rely on React Query as our state manager rather than complex Flux/Redux patterns.

### 5. Why This Combination?

#### A. Atomic Design for Reusability
By strictly separating `elements` (Atoms) and `components` (Molecules), we ensure that our Design System is consistent. A `Checkbox` looks the same everywhere because every feature imports the same Atom.

#### B. Vertical Slices for Maintainability
While Atoms and Molecules are global, **Organisms** (`sections`) are often feature-specific. We treat `sections/forms` as "Vertical Slices" where we co-locate the logic (`.hooks.ts`) with the view (`.tsx`). This gives us the best of both worlds:
*   **Global Consistency**: via Atoms/Molecules.
*   **Local Focus**: via Section-specific Logic.

### 6. Architectural Rules
1.  **Dependencies**: `sections` can import `components` and `elements`. `components` can import `elements`. `elements` can import NOTHING (except third-party libs).
2.  **State**: `elements` should be stateless (controlled components). `components` can have local UI state. `sections` manage business logic state (via hooks).
3.  **Purity**: `elements` and `components` should ideally be "dumb" (presentational), accepting data via props. `sections` are "smart" (connected), creating the context for the dumb components.
