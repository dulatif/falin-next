# Getting Started

Welcome to the Next.js MUI Boilerplate! Follow this guide to set up your development environment.

## 📋 Prerequisites

-   Node.js v18+ (LTS recommended)
-   npm or yarn or pnpm
-   Git

## 🛠️ Installation

1.  **Clone the repository**
    ```bash
    git clone <repo-url>
    cd <project-name>
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    - Copy `.env.example` to `.env`.
    - Update variable values.
    ```bash
    cp .env.example .env
    ```

## 🚀 Running the App

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧪 Testing

This project uses Vitest.

```bash
# Run unit tests
npm run test

# Run type check
npm run type-check

# Run linting
npm run lint
```

## 🧩 Adding a New Feature

1.  **Define Interface**: Add types in `src/interfaces`.
2.  **Create API Service**: Add `src/api/[feature].ts`.
3.  **Create Hooks**: Add `src/hooks/features/[feature]/use[Feature].ts`.
4.  **Create UI**: Add components in `src/ui/features/[feature]`.
5.  **Add Page**: Create route in `src/app/admin/[feature]/page.tsx`.

## 📦 Deployment

The project is optimized for Vercel but can be deployed anywhere Next.js runs.

```bash
npm run build
npm start
```
