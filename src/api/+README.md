# API Layer Structure

This directory contains the API service definitions.

## 📜 Service Class Standard

### 1. File Structure & Imports
```typescript
import { Banner, CreateBannerFormValues } from "@/interfaces/banner";
import { DeleteDataResponse, ID } from "@/interfaces/general";
import { convertToFormData } from "@/utils/convertToFormData";
import api from "./index";

/**
 * Service to handle Banner-related API calls.
 * Sectioned by: Basic CRUD, Asset Management.
 */
class BannerService {
  private static readonly PATH = "/banner";

  // # basic crud
  static async getAll(params?: GetAllBannersParams) { ... }
  
  // # asset management
  static async uploadImage(body: { image: File | null }) { ... }
}
export default BannerService;
```

### 2. Standard Methods (CRUD)
- `getAll(params?)`: Use `api.get<Response>(PATH, { params })`.
- `find(id)`: Use `${PATH}/${id}`.
- `create(body)`: Use `api.post<Response>(PATH, body)`.
- `update({ id, ...body })`: Destructure ID. Use `api.put<Response>(`${PATH}/${id}`, body)`.
- `delete(id)`: Use `api.delete<DeleteDataResponse>(`${PATH}/${id}`)`.

### 3. Specialized Sections
**`# asset management` (File Uploads)**
- **Rule**: ALWAYS use `convertToFormData` and `multipart/form-data`.
```typescript
static async uploadThumbnail(body: { thumbnail: File | null }) {
  const formData = convertToFormData(body, ["thumbnail"]);
  return await api.post<Response>(`${this.PATH}/upload`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
}
```

**`# admin actions` (Approve/Reject)**
- **Pattern**: Action endpoints usually POST.
```typescript
static async makeActive(id: number) {
  return await api.post<Response>(`${this.PATH}/${id}/active`);
}
```

### 4. Implementation Rules
1.  **Stateless**: All methods `static async`. Class is namespace only.
2.  **Type Safety**: Always use generic return types `<T>`. Never `any`.
3.  **Error Handling**: NO `try/catch`. Let Axios interceptors handle it.
4.  **Naming**: `find` (single), `getAll` (list), `create`, `update`, `delete`.
5.  **Paths**: `private static readonly PATH`. No trailing slash.

## 📂 File Structure
- `index.ts`: Axios instance + Interceptors.
- `auth.ts`: Auth service (special case).
- `[entity].ts`: Domain services (User, Product).
- `[entity]-[context].ts`: Scoped services (ShopRegistration).
