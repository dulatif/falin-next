# Next.js MUI Boilerplate

A production-ready Enterprise boilerplate for Next.js 15, Material UI v6, and TypeScript.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Material UI v6 + SCSS Modules (Hybrid Approach)
- **State Management**: Zustand
- **Server State**: TanStack Query v5
- **Forms**: React Hook Form + Zod
- **Networking**: Axios with Interceptors
- **Testing**: Vitest + React Testing Library

## 📂 Project Structure

```
src/
├── api/          # API Service Layer (Stateless, Generic)
├── app/          # Next.js App Router Pages
├── config/       # Environment & Global Configs
├── constant/     # Application Constants
├── hooks/        # React Custom Hooks (Core vs Features)
├── interfaces/   # TypeScript Definitions (DTOs vs Entities)
├── providers/    # Global Context Providers
├── theme/        # Material UI Design System
├── ui/           # Atomic UI Components
└── utils/        # Pure Utility Functions
```

## 🏎️ Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 🏗️ Architectural Decisions

- **Single Source of Truth**: All types defined in `interfaces` and exported via barrel file.
- **Service Pattern**: API calls encapsulated in static service classes.
- **Query Key Factory**: Centralized management of React Query keys.
- **Theme System**: Custom palette, typography, and component overrides in `src/theme`.

## 📜 Documentation

Each directory contains a `README.md` explaining its specific rules and patterns.

- [API Rules](src/api/README.md)
- [UI Guidelines](src/ui/README.md)
- [Hooks Patterns](src/hooks/README.md)
