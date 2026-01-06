# Architecture Overview

This project follows a strict, layered architecture designed for scalability, maintainability, and testing.

## 🏗️ High-Level Layers

1.  **UI Layer (`src/ui`)**: Pure visual components and page assemblies.
    -   **Atoms/Molecules**: `ui/elements` and `ui/components`.
    -   **Organisms**: `ui/sections`.
    -   **Templates**: `ui/layouts`.
    -   **Pages**: `ui/views` (Connected components).
    -   *Rule*: UI components should be generic where possible. Business logic belongs in hooks.

2.  **App Layer (`src/app`)**: Next.js App Router entry points.
    -   Handles routing and metadata.
    -   Uses `"use client"` sparingly (mostly leaf nodes).
    -   Delegates rendering to `ui/views`.

3.  **Hooks Layer (`src/hooks`)**: The glue between UI and API.
    -   **Core Hooks**: `hooks/core` (e.g., `useTable`, `useSidebar`).
    -   **Feature Hooks**: `hooks/features` (e.g., `useUserQuery`).
    -   *Rule*: All side effects (API calls, router pushes) happen here.

4.  **API Layer (`src/api`)**: Stateless data fetching.
    -   Standardized with a generic Service pattern (`api-rules.md`).
    -   Returns typed promises.
    -   *Rule*: No React dependency.

5.  **Domain Layer (`src/interfaces`)**: Type definitions.
    -   Separates DTOs (Input) from Entities (Output).
    -   Single Source of Truth for schemas.

## 🔄 Data Flow

1.  **User Interaction** (Click Button) -> **UI Component**
2.  **UI Component** calls **Custom Hook** (e.g., `useCreateUser`)
3.  **Custom Hook** calls **API Service** (e.g., `UserService.create`)
4.  **API Service** makes HTTP request via **Axios Instance**
5.  **Server** responds
6.  **React Query** updates cache and triggers re-render
7.  **UI** reflects new state

## 🎨 Theme System

-   **Hybrid Approach**: Uses both `scss modules` for layout/utilities and `MUI Theme` for component overrides.
-   **Dark Mode**: Fully supported via explicit color tokens in `src/theme`.

## 🛡️ Authentication

-   **Pattern**: Server-side cookie check + Client-side localStorage context.
-   **Middleware**: Protects `/admin` routes.
