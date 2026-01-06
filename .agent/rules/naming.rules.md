# Naming Conventions

## 👑 Supremacy Clause
**This document is the Single Source of Truth for naming conventions.**
If any `README.md` or other rule file in `src/**` conflicts with this file, **this file takes precedence**.

## 🎯 Goal
Maintain consistency and readability across the codebase. Naming should be predictable and descriptive.

## 📂 Files & Directories

| Type | Convention | Example |
| :--- | :--- | :--- |
| **Components** | `PascalCase` | `EventItem.tsx`, `ModalDelete.tsx` |
| **Hooks** | `camelCase` (prefix `use`) | `useEventQuery.ts`, `useAuth.ts` |
| **Services** | `PascalCase` (suffix `Service`) | `EventService.ts`, `AuthService.ts` |
| **Interfaces/Types** | `kebab-case` | `user-profile.ts`, `event.ts` |
| **Utils/Helpers** | `kebab-case` | `format-date.ts`, `convert-to-form-data.ts` |
| **Constants** | `kebab-case` | `dashboard-menu.ts`, `query-keys.ts` |
| **Directories** | `kebab-case` | `components/`, `user-profile/` |
| **Next.js Pages** | `kebab-case` | `user-profile/page.tsx` |

## 💻 Code Identifiers

### Variables
- **Primitives**: `camelCase`
  - `const userName = "John";`
- **Booleans**: Prefix with `is`, `has`, `should`, `can`
  - `const isValid = true;`
  - `const hasPermission = false;`
- **Constants (Global)**: `SCREAMING_SNAKE_CASE`
  - `const MAX_UPLOAD_SIZE = 10;`

### Functions
- **General**: `camelCase` (Verb + Noun)
  - `getUser()`, `calculateTotal()`, `submitForm()`
- **Event Handlers**:
  - **Props**: `on[Event]` (e.g., `onSubmit`, `onChange`)
  - **Implementation**: `handle[Event]` (e.g., `handleSubmit`, `handleChange`)
  - **Async**: Optional `Async` suffix if ambiguous (e.g., `fetchDataAsync`)

### Types & Interfaces
- **Interfaces**: `PascalCase`. NO `I` prefix.
  - `interface UserProps { ... }`
- **Types**: `PascalCase`.
  - `type UserRole = "admin" | "guest";`
- **Props**: Suffix with `Props`
  - `interface ButtonProps { ... }`
- **DTOs**: `PascalCase` (e.g., `UpdateUserDto`) available in NestJS, but usually standard interface here.

### Classes (Services)
- **Class Name**: `PascalCase`
  - `class AuthService { ... }`
- **Methods**: `camelCase`
  - `static async login() { ... }`
- **Private Fields**: `camelCase` (or `_camelCase` if preferred, but standard checks usually enforcing checks)

## ⚛️ React Specific

- **Components**: `PascalCase`
- **Contexts**: `PascalCase` + `Context` (e.g., `ThemeContext`)
- **Providers**: `PascalCase` + `Provider` (e.g., `ThemeProvider`)
- **Custom Hooks**: `use` + `PascalCase` (e.g., `useWindowSize`)

## 🔗 Route Paths
- **URLs**: `kebab-case`
  - `/admin/user-profile`
  - `/dashboard/settings`

## 📝 Zod Schemas
- **Schema Helper**: `camelCase` + `Schema`
  - `const loginSchema = z.object(...)`
- **Inferred Type**: `PascalCase`
  - `type LoginValues = z.infer<typeof loginSchema>;`
