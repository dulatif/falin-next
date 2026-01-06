# Architecture Enhancement TODO

> Branch: `fix-architecture`  
> Created: 2025-12-31  
> Priority: Refinements to improve maintainability and type safety

---

## 🔴 High Priority

### 1. [x] Fix Designer Sync Bug
**File**: `src/hooks/CertificateHooks.ts`  
**Line**: 162  
**Issue**: `useSyncCertificatesForDesignerMutation` incorrectly calls `syncForShop` instead of `syncForDesigner`

```typescript
// Current (BUG)
mutationFn: CertificateService.syncForShop,

// Fix
mutationFn: (body) => CertificateService.syncForDesigner(body.designerId!, body),
```

---

### 2. [x] Move JSX Out of Interface Files
**File**: `src/interfaces/certificate.tsx`  
**Issue**: Contains JSX (`<Chip />`) which forces `.tsx` extension on a type-only file

**Action**:
1. Create `src/constant/certificate.options.tsx`
2. Move these exports to the new file:
   - `CERTIFICATE_TYPE_OPTIONS`
   - `CERTIFICATE_FOR_TYPE_OPTIONS`
3. Rename `certificate.tsx` → `certificate.ts`
4. Update all imports

**Why**: Type files should be importable everywhere without React dependencies.

---

## 🟡 Medium Priority

### 3. [x] Type Error Handlers in Mutations
**Files**: All files in `src/hooks/*Hooks.ts`  
**Issue**: Error handlers use `any` type

```typescript
// Current
onError: (err: any, variables, context) =>

// Improved
import { TError } from './useMutationError';
onError: (err: TError, variables, context) =>
```

**Affected Hooks**:
- [x] `CertificateHooks.ts`
- [x] `BannerHooks.ts`
- [x] `EventHooks.ts`
- [x] `FacilityHooks.ts`
- [x] `FAQHooks.ts`
- [x] `ShopCategoryHooks.ts`
- [x] `ShopRegistrationHooks.ts`
- [x] `CustomerServiceHooks.ts`
- [x] `WithdrawalHooks.ts`

**Additional Changes Made**:
- Added `ApiResponseError` and `TApiError` to `src/interfaces/general.ts`
- Updated `MutationParams` to use `TApiError` instead of `Error`
- Updated `useMutationError.tsx` to import from `general.ts`
- Re-exported `ApiResponseError` from `src/api/index.ts` for backward compatibility

---

### 4. [x] Create Query Key Factory
**New File**: `src/constant/queryKeys.ts`

**Purpose**: Centralize query keys for type-safe invalidation and autocomplete

```typescript
export const queryKeys = {
  certificates: {
    all: ['certificates'] as const,
    lists: () => [...queryKeys.certificates.all, 'list'] as const,
    list: (params?: GetAllCertificatesParams) => 
      [...queryKeys.certificates.lists(), params] as const,
    details: () => [...queryKeys.certificates.all, 'detail'] as const,
    detail: (id: number) => [...queryKeys.certificates.details(), id] as const,
  },
  shops: {
    all: ['shops'] as const,
    detail: (id: number) => [...queryKeys.shops.all, id] as const,
  },
  banners: {
    all: ['banners'] as const,
    lists: () => [...queryKeys.banners.all, 'list'] as const,
    list: (params?: GetAllBannersParams) => 
      [...queryKeys.banners.lists(), params] as const,
  },
  // ... and all other entities
} as const;
```

**Updated hooks to use**:
```typescript
queryKey: queryKeys.certificates.list(params)
```

**Affected Hooks**:
- [x] `BannerHooks.ts`
- [x] `CertificateHooks.ts`
- [x] `CustomerServiceHooks.ts`
- [x] `EventHooks.ts`
- [x] `FacilityHooks.ts`
- [x] `FAQHooks.ts`
- [x] `ShopCategoryHooks.ts`
- [x] `ShopRegistrationHooks.ts`
- [x] `WithdrawalHooks.ts`

---

## 🟢 Low Priority

### 5. [x] Create Mutation Hook Factory
**New File**: `src/hooks/createMutationHook.ts`

**Purpose**: Reduce boilerplate in mutation hooks (~60% less code per hook)

```typescript
export function createMutationHook<TData, TVariables>(
  options: {
    mutationFn: (variables: TVariables) => Promise<TData>;
    successMessage: string;
    invalidateKeys?: QueryKey[];
    getInvalidateKeys?: (data, variables) => QueryKey[];
  }
) { ... }
```

**Usage Example**:
```typescript
// Self-documenting with named parameters
export const useCreateFAQMutation = createMutationHook({
  mutationFn: FAQService.create,
  successMessage: MESSAGES.CREATE_SUCCESS,
  invalidateKeys: [queryKeys.faqs.lists()],
});

// With dynamic invalidation
export const useSyncCertificatesForShopMutation = createMutationHook({
  mutationFn: CertificateService.syncForShop,
  successMessage: MESSAGES.SYNC_SHOP_SUCCESS,
  getInvalidateKeys: (_data, variables) => [
    queryKeys.shops.detail(variables.shopId!),
  ],
});

// Upload without cache invalidation
export const useUploadIconMutation = createMutationHook({
  mutationFn: FacilityService.uploadIcon,
  successMessage: MESSAGES.UPLOAD_SUCCESS,
});
```

**Affected Hooks**:
- [x] `BannerHooks.ts`
- [x] `CertificateHooks.ts`
- [x] `CustomerServiceHooks.ts`
- [x] `EventHooks.ts`
- [x] `FacilityHooks.ts`
- [x] `FAQHooks.ts`
- [x] `ShopCategoryHooks.ts`
- [x] `ShopRegistrationHooks.ts`
- [x] `WithdrawalHooks.ts`

---

### 6. [x] Namespace API Service Exports
**New File**: `src/api/services.ts`

```typescript
// Named exports from auth (not a class)
export * as AuthService from './auth';

// Class-based service exports
export { default as BannerService } from './banner';
export { default as CertificateService } from './certificate';
export { default as CustomerServiceService } from './customer-service';
export { default as EventService } from './event';
export { default as FacilityService } from './facility';
export { default as FAQService } from './faq';
export { default as ShopCategoryService } from './shop-category';
export { default as ShopRegistrationService } from './shop-registration';
export { default as WithdrawalService } from './withdrawal';
```

**Usage**:
```typescript
import { CertificateService, BannerService } from '@/api/services';
```

**Affected Hooks**:
- [x] `BannerHooks.ts`
- [x] `CertificateHooks.ts`
- [x] `CustomerServiceHooks.ts`
- [x] `EventHooks.ts`
- [x] `FacilityHooks.ts`
- [x] `FAQHooks.ts`
- [x] `ShopCategoryHooks.ts`
```typescript
// Current (BUG)
mutationFn: CertificateService.syncForShop,

// Fix
mutationFn: (body) => CertificateService.syncForDesigner(body.designerId!, body),
```

---

### 2. [x] Move JSX Out of Interface Files
**File**: `src/interfaces/certificate.tsx`  
**Issue**: Contains JSX (`<Chip />`) which forces `.tsx` extension on a type-only file

**Action**:
1. Create `src/constant/certificate.options.tsx`
2. Move these exports to the new file:
   - `CERTIFICATE_TYPE_OPTIONS`
   - `CERTIFICATE_FOR_TYPE_OPTIONS`
3. Rename `certificate.tsx` → `certificate.ts`
4. Update all imports

**Why**: Type files should be importable everywhere without React dependencies.

---

## 🟡 Medium Priority

### 3. [x] Type Error Handlers in Mutations
**Files**: All files in `src/hooks/*Hooks.ts`  
**Issue**: Error handlers use `any` type

```typescript
// Current
onError: (err: any, variables, context) =>

// Improved
import { TError } from './useMutationError';
onError: (err: TError, variables, context) =>
```

**Affected Hooks**:
- [x] `CertificateHooks.ts`
- [x] `BannerHooks.ts`
- [x] `EventHooks.ts`
- [x] `FacilityHooks.ts`
- [x] `FAQHooks.ts`
- [x] `ShopCategoryHooks.ts`
- [x] `ShopRegistrationHooks.ts`
- [x] `CustomerServiceHooks.ts`
- [x] `WithdrawalHooks.ts`

**Additional Changes Made**:
- Added `ApiResponseError` and `TApiError` to `src/interfaces/general.ts`
- Updated `MutationParams` to use `TApiError` instead of `Error`
- Updated `useMutationError.tsx` to import from `general.ts`
- Re-exported `ApiResponseError` from `src/api/index.ts` for backward compatibility

---

### 4. [x] Create Query Key Factory
**New File**: `src/constant/queryKeys.ts`

**Purpose**: Centralize query keys for type-safe invalidation and autocomplete

```typescript
export const queryKeys = {
  certificates: {
    all: ['certificates'] as const,
    lists: () => [...queryKeys.certificates.all, 'list'] as const,
    list: (params?: GetAllCertificatesParams) => 
      [...queryKeys.certificates.lists(), params] as const,
    details: () => [...queryKeys.certificates.all, 'detail'] as const,
    detail: (id: number) => [...queryKeys.certificates.details(), id] as const,
  },
  shops: {
    all: ['shops'] as const,
    detail: (id: number) => [...queryKeys.shops.all, id] as const,
  },
  banners: {
    all: ['banners'] as const,
    lists: () => [...queryKeys.banners.all, 'list'] as const,
    list: (params?: GetAllBannersParams) => 
      [...queryKeys.banners.lists(), params] as const,
  },
  // ... and all other entities
} as const;
```

**Updated hooks to use**:
```typescript
queryKey: queryKeys.certificates.list(params)
```

**Affected Hooks**:
- [x] `BannerHooks.ts`
- [x] `CertificateHooks.ts`
- [x] `CustomerServiceHooks.ts`
- [x] `EventHooks.ts`
- [x] `FacilityHooks.ts`
- [x] `FAQHooks.ts`
- [x] `ShopCategoryHooks.ts`
- [x] `ShopRegistrationHooks.ts`
- [x] `WithdrawalHooks.ts`

---

## 🟢 Low Priority

### 5. [x] Create Mutation Hook Factory
**New File**: `src/hooks/createMutationHook.ts`

**Purpose**: Reduce boilerplate in mutation hooks (~60% less code per hook)

```typescript
export function createMutationHook<TData, TVariables>(
  options: {
    mutationFn: (variables: TVariables) => Promise<TData>;
    successMessage: string;
    invalidateKeys?: QueryKey[];
    getInvalidateKeys?: (data, variables) => QueryKey[];
  }
) { ... }
```

**Usage Example**:
```typescript
// Self-documenting with named parameters
export const useCreateFAQMutation = createMutationHook({
  mutationFn: FAQService.create,
  successMessage: MESSAGES.CREATE_SUCCESS,
  invalidateKeys: [queryKeys.faqs.lists()],
});

// With dynamic invalidation
export const useSyncCertificatesForShopMutation = createMutationHook({
  mutationFn: CertificateService.syncForShop,
  successMessage: MESSAGES.SYNC_SHOP_SUCCESS,
  getInvalidateKeys: (_data, variables) => [
    queryKeys.shops.detail(variables.shopId!),
  ],
});

// Upload without cache invalidation
export const useUploadIconMutation = createMutationHook({
  mutationFn: FacilityService.uploadIcon,
  successMessage: MESSAGES.UPLOAD_SUCCESS,
});
```

**Affected Hooks**:
- [x] `BannerHooks.ts`
- [x] `CertificateHooks.ts`
- [x] `CustomerServiceHooks.ts`
- [x] `EventHooks.ts`
- [x] `FacilityHooks.ts`
- [x] `FAQHooks.ts`
- [x] `ShopCategoryHooks.ts`
- [x] `ShopRegistrationHooks.ts`
- [x] `WithdrawalHooks.ts`

---

### 6. [x] Namespace API Service Exports
**New File**: `src/api/services.ts`

```typescript
// Named exports from auth (not a class)
export * as AuthService from './auth';

// Class-based service exports
export { default as BannerService } from './banner';
export { default as CertificateService } from './certificate';
export { default as CustomerServiceService } from './customer-service';
export { default as EventService } from './event';
export { default as FacilityService } from './facility';
export { default as FAQService } from './faq';
export { default as ShopCategoryService } from './shop-category';
export { default as ShopRegistrationService } from './shop-registration';
export { default as WithdrawalService } from './withdrawal';
```

**Usage**:
```typescript
import { CertificateService, BannerService } from '@/api/services';
```

**Affected Hooks**:
- [x] `BannerHooks.ts`
- [x] `CertificateHooks.ts`
- [x] `CustomerServiceHooks.ts`
- [x] `EventHooks.ts`
- [x] `FacilityHooks.ts`
- [x] `FAQHooks.ts`
- [x] `ShopCategoryHooks.ts`
- [x] `ShopRegistrationHooks.ts`
- [x] `WithdrawalHooks.ts`

---



### 7. [x] Namespace Interface Exports
**New File**: `src/interfaces/index.ts`

```typescript
// General types (base types used across the app)
export * from './general';

// Auth types
export * from './auth';

// Entity-specific types
export * from './banner';
export * from './certificate';
export * from './customer-service';
export * from './event';
export * from './facility';
export * from './faq';
export * from './shop';
export * from './withdrawal';

// Schemas (form validations)
export * from './schemas';
```

**Usage**:
```typescript
// Before: Multiple imports from different paths
import { Banner, CreateBannerFormValues } from '@/interfaces/banner';
import { ID, MutationParams } from '@/interfaces/general';

// After: Single import source
import { Banner, CreateBannerFormValues, ID, MutationParams } from '@/interfaces';
```

---

## Notes

- All original architecture enhancement tasks are complete
- Additional namespace exports implemented for better DX
- Consider creating a PR after completing all items


### 8. [x] Restructure Hooks Folder
**Structure**: Split into src/hooks/core (infrastructure) and src/hooks/features (domain logic)
**Namespace**: Created src/hooks/index.ts for cleaner imports
**Renaming**: Renamed *Hooks.ts to use*.ts (e.g., useBanner.ts)

---

### 9. [x] Refactor Forms with Separate Logic Hooks
**Objective**: Separate UI and Business Logic in form components for better maintainability and testing.
**Strategy**: "Component-Hook" Pattern (`[Name].tsx` + `[Name].hooks.ts`)

**Actions Taken**:
1. Extracted state, mutations, and handlers from `[FormName].tsx` into `[FormName].hooks.ts`.
2. Renamed hook files from `use[FormName].ts` to `[FormName].hooks.ts` for better file-finder proximity (e.g., searching "AddBanner" shows both files).
3. Updated barrel file `src/ui/sections/forms/index.ts` to export all hooks.

**Refactored Forms**:
- [x] `AddBannerForm` / `EditBannerForm`
- [x] `AddCertificateForm` / `EditCertificateForm`
- [x] `AcceptCertificateForm` / `RejectCertificateForm`
- [x] `AddEventForm` / `EditEventForm`
- [x] `AddFacilityForm` / `EditFacilityForm`
- [x] `AddShopCategoryForm` / `EditShopCategoryForm`
- [x] `CreateFAQForm` / `EditFAQForm`
- [x] `AcceptWithdrawalForm` / `RejectWithdrawalForm`
- [x] `RejectShopRegistrationForm`
- [x] `LoginForm`

---

## 📊 Progress Tracker

| # | Task | Priority | Status |
|---|------|----------|--------|
| 1 | Fix Designer Sync Bug | 🔴 High | ✅ DONE |
| 2 | Move JSX from Interfaces | 🔴 High | ✅ DONE |
| 3 | Type Error Handlers in Mutations | 🟡 Medium | ✅ DONE |
| 4 | Create Query Key Factory | 🟡 Medium | ✅ DONE |
| 5 | Create Mutation Hook Factory | 🟢 Low | ✅ DONE |
| 6 | Namespace API Service Exports | 🟢 Low | ✅ DONE |
| 7 | Namespace Interface Exports | 🟢 Low | ✅ DONE |
| 8 | Restructure Hooks Folder | 🟢 Low | ✅ DONE |
| 9 | Refactor Forms with Hooks | 🟡 Medium | ✅ DONE |
```
