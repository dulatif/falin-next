# Interfaces Layer Structure

This directory contains TypeScript definitions and Zod schemas.

## 📜 Interface Standard
**Goal**: Single Source of Truth, Type Safety via Zod.

### 1. File Structure (Sections)
Every file (`[feature].ts`) must follow this order:
1.  **Imports**: Zod, General Types.
2.  **`# enums / types`**: Enums, Literals.
3.  **`# entity interfaces`**: Backend Response Shape.
4.  **`# params`**: Request/Response Types.
5.  **`# schemas & form values`**: Zod Schemas + Inferred Types.
6.  **`# mutation params`**: React Query Types.

### 2. Standard Pattern
```typescript
import { z } from "zod";
import { ID, MutationParams, PaginationParams } from "./general";

// # enums
export enum ShopStatus { ACTIVE = "active", INACTIVE = "inactive" }

// # entity interfaces (Backend Shape)
export interface Shop {
  id: number;
  name: string;
  status: ShopStatus;
}

// # params
export interface GetAllShopsParams extends PaginationParams { status?: ShopStatus; }
export type GetAllShopsResponse = Shop[];

// # schemas & form values (Zod + Inference)
// 1. Create
export const createShopSchema = z.object({
  name: z.string().min(1),
  status: z.nativeEnum(ShopStatus),
});
export type CreateShopFormValues = z.infer<typeof createShopSchema>;
export interface CreateShopResponse extends Shop {}
export const SHOP_FORM_DEFAULTS: CreateShopFormValues = { name: "", status: ShopStatus.ACTIVE };

// 2. Update (Use union for ID)
export const updateShopSchema = z.object({
  id: z.union([z.string(), z.number()]),
  ...createShopSchema.shape,
});

// # mutation params (For React Query)
export interface CreateShopMutationParams 
  extends MutationParams<CreateShopResponse, CreateShopFormValues> {}
```

### 3. Critical Rules
1.  **Zod First**: Define schema -> Infer type (`z.infer`). Never manual `interface FormValues`.
2.  **Naming**:
    - Schemas: `create[Entity]Schema` (camelCase)
    - Types: `Create[Entity]FormValues` (PascalCase)
    - Defaults: `[ENTITY]_FORM_DEFAULTS` (SCREAMING_SNAKE)
3.  **Mutation Params**: ALWAYS extend `MutationParams<Res, Var>`.
4.  **Nulls**: Backend entities use `Type | null`. Forms use `optional()`.

## 📂 File Structure
- `general.ts`: Shared types (ID, Pagination, MutationParams).
- `[feature].ts`: Feature-specific types (e.g., `product.ts`).
