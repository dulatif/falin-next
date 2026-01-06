# App Directory Structure (Next.js App Router)

This directory follows the Next.js App Router conventions.

## 📜 Rules

1. **Folder Routing**: Folders define routes.
2. **Server Components**: Pages (`page.tsx`) are Server Components by default.
3. **Client Boundaries**: Use `"use client"` directive when interactivity is needed.

## 📂 File Structure

- `page.tsx`: Home page.
- `admin/`: Admin dashboard routes.
- `(auth)/`: Auth routes (grouped).
- `layout.tsx`: Root layout.
