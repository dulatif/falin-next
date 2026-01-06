# Laravel Sanctum Token Implementation

## Date: 2025-12-26

---

## Critical Discovery

**Backend uses Laravel Sanctum, NOT JWT!**

Laravel Sanctum tokens have format: `10|uWYnwUyHjlD782Sdj2RtQg5utD7UrRk9QByigKxO1b16d40c`

**Format breakdown:**

- `10` = Token ID (database primary key)
- `|` = Separator
- `uWYnw...` = Token hash (random string, 40+ characters)

**This is NOT a JWT!** JWTs have format: `header.payload.signature` (3 parts with dots)

---

## Changes Made

### **1. Replaced JWT Validation with Sanctum Validation** ✅

**File:** `src/utils/next-auth.ts`

**Removed:**

- `import { jwtDecode, JwtPayload } from "jwt-decode"`
- `isValidJwt()` function
- JWT-specific validation logic

**Added:**

- `isValidSanctumToken()` function
- Sanctum token format validation

**New Validation:**

```typescript
export const isValidSanctumToken = (token?: string): boolean => {
  // Check format: {id}|{hash}
  const parts = token.split("|");

  if (parts.length !== 2) {
    return false;
  }

  const [id, hash] = parts;

  // Validate ID is numeric
  if (!/^\d+$/.test(id)) {
    return false;
  }

  // Validate hash length (Sanctum uses 40+ char hashes)
  if (!hash || hash.length < 30) {
    return false;
  }

  return true;
};
```

---

### **2. Updated Server-Side Validation** ✅

**File:** `src/utils/next-auth.server.ts`

**Removed:**

- JWT decoding logic
- Expiration checking (Sanctum tokens don't have embedded expiration)

**Added:**

- Sanctum format validation
- Clear documentation about limitations

**Important Note:**
Real authentication validation happens when the token is used in API requests. The server-side check only validates **format**, not **validity**.

---

### **3. Updated All References** ✅

**Files changed:**

- ✅ `src/app/login/page.tsx` - Use `isValidSanctumToken`
- ✅ `src/app/page.tsx` - Use `isValidSanctumToken`
- ✅ `src/ui/sections/forms/LoginForm/LoginForm.tsx` - Already using `next-auth.ts`

---

## How Sanctum Tokens Work

### **Client-Side:**

```typescript
// 1. Login receives token from Laravel
const token = "10|uWYnwUyHjlD782Sdj2RtQg5utD7UrRk9QByigKxO1b16d40c";

// 2. Validate format
if (isValidSanctumToken(token)) {
  // 3. Store in localStorage + cookie
  localStorage.setItem("token", token);
  setCookie("token", token);
}

// 4. Use in API requests
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
```

### **Server-Side:**

```typescript
// 1. Check if token exists in cookie
const token = cookies().get("token")?.value;

// 2. Validate format only
if (isValidSanctumToken(token)) {
  // Allow access to page
  return <ProtectedPage />;
}

// 3. Real validation happens when API is called
// Laravel will verify the token against database
```

---

## Important Differences: JWT vs Sanctum

| Feature           | JWT                         | Laravel Sanctum         |
| ----------------- | --------------------------- | ----------------------- |
| Format            | `header.payload.signature`  | `{id}\|{hash}`          |
| Storage           | Stateless (no DB check)     | Stateful (stored in DB) |
| Validation        | Decode + verify signature   | Database lookup         |
| Expiration        | Embedded in token           | Database field          |
| Revocation        | Difficult (needs blacklist) | Easy (delete from DB)   |
| Server Validation | Possible (decode locally)   | Requires API call       |

---

## Authentication Flow with Sanctum

### **1. Login**

```
User → Laravel API → Returns Sanctum token
      ↓
Store in localStorage + cookie
      ↓
Redirect to dashboard
```

### **2. Protected Page Access**

```
Server layout checks cookie → Token exists & valid format?
      ↓ Yes
Render page → Components make API calls with token
      ↓
Laravel validates token in database
      ↓
Returns data if valid, 401 if invalid
```

### **3. Token Invalidation**

```
Option 1: Logout button → Call logout API → Laravel deletes token from DB
Option 2: Laravel expires token → Next API call returns 401 → Redirect to login
Option 3: User revokes token in Laravel admin → Token immediately invalid
```

---

## Testing with Sanctum

### ✅ **Test 1: Login Flow**

1. Clear browser storage
2. Login with credentials
3. Check console:
   ```
   🔐 Login: Received token: 10|uWYnwUyHjlD782Sdj...
   🔍 Auth: Sanctum token is valid ✅
   🔐 Login: Token validated successfully
   🔐 Login: Stored in localStorage
   🔐 Login: Stored in cookie
   ```
4. Should redirect to dashboard

---

### ✅ **Test 2: Token Format**

**Valid Sanctum Token:**

```
10|uWYnwUyHjlD782Sdj2RtQg5utD7UrRk9QByigKxO1b16d40c
```

**Invalid Tokens:**

```
❌ No separator: 10uWYnwUyHjlD782Sdj2RtQg5utD7UrRk9QByigKxO1b16d40c
❌ Multiple separators: 10|abc|def
❌ Non-numeric ID: abc|uWYnwUyHjlD782Sdj2RtQg5utD7UrRk9QByigKxO1b16d40c
❌ Short hash: 10|abc
```

---

### ✅ **Test 3: API Calls**

Check your API setup has:

```typescript
// In src/api/index.ts or similar
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Add token to all requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 errors (token invalid/expired)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token invalid, redirect to login
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
```

---

## Limitations & Considerations

### **Server-Side Validation:**

⚠️ **Cannot fully validate Sanctum tokens server-side without API call**

The server check only validates:

- ✅ Token exists
- ✅ Format is correct ({id}|{hash})
- ❌ **NOT** whether token is valid in database
- ❌ **NOT** whether token is expired

**Real validation happens when:**

- API requests are made with the token
- Laravel checks database and returns 401 if invalid

---

### **Security Implications:**

**This is acceptable because:**

1. Server-side check prevents obvious invalid tokens
2. Actual authentication checked by Laravel API
3. Invalid tokens will fail on first API call
4. User will be redirected to login via 401 handler

**Consider adding:**

- API call on server layout to verify token (slower but more secure)
- Or keep current approach (faster, slightly less secure for first render)

---

## Optional: Server-Side API Verification

If you need stronger server-side validation:

```typescript
// src/utils/next-auth.server.ts
export async function isAuthenticatedUserServer(): Promise<boolean> {
  const token = cookies().get("token")?.value;

  if (!token || !isValidSanctumToken(token)) {
    return false;
  }

  // Optional: Verify with Laravel API
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    );

    return response.ok;
  } catch {
    return false;
  }
}
```

**Trade-offs:**

- ✅ More secure (verifies token with database)
- ❌ Slower (API call on every page load)
- ❌ Requires network connection

---

## Files Modified

1. ✅ `src/utils/next-auth.ts` - Sanctum validation (client)
2. ✅ `src/utils/next-auth.server.ts` - Sanctum validation (server)
3. ✅ `src/app/login/page.tsx` - Use new validation
4. ✅ `src/app/page.tsx` - Use new validation
5. ✅ `src/ui/sections/forms/LoginForm/LoginForm.tsx` - Already correct

---

## Summary

**Before:** ❌ Trying to use JWT validation on Sanctum tokens
**After:** ✅ Proper Sanctum token validation

**Works with:**

- ✅ Laravel Sanctum API
- ✅ Token format: `{id}|{hash}`
- ✅ Database-backed authentication
- ✅ Easy token revocation

**Your authentication should now work perfectly!** 🎉🔒
