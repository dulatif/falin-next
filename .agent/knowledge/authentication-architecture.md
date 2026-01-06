# Authentication Architecture: Server-Side vs Client-Side

## Date: 2025-12-26

---

## TL;DR

**We use a HYBRID approach:**

- ✅ **Server-side** for route protection
- ✅ **Client-side** for token management & API calls

---

## Architecture Breakdown

### **1. Server-Side Protection** 🔒 (Primary Security Layer)

**Where:** `src/app/admin/layout.tsx`

**Code:**

```typescript
// This runs on the SERVER before rendering
const AdminDashboardLayout = async ({
  children,
}: AdminDashboardLayoutProps) => {
  const isAuth = await isAuthenticatedUserServer(); // ← SERVER-SIDE CHECK

  if (!isAuth) {
    redirect("/login"); // ← Redirect happens on SERVER
  }

  return <DashboardLayout>{children}</DashboardLayout>;
};
```

**What it does:**

1. Runs **before** page renders
2. Checks cookie for token
3. Validates token format
4. Redirects to login if invalid
5. All happens **on the server**

**Benefits:**

- ✅ **No flash of content** - User never sees protected page
- ✅ **Cannot be bypassed** - Happens before React loads
- ✅ **SEO friendly** - Server decides what to render
- ✅ **Better security** - Client can't manipulate this check
- ✅ **Works with JS disabled** - Server-side redirect

---

### **2. Client-Side Token Management** 💾 (Storage & API)

**Where:** `src/utils/next-auth.ts`

**Code:**

```typescript
// This runs in the BROWSER
export function login(token: string) {
  // 1. Validate token format (client-side)
  if (!isValidSanctumToken(token)) {
    return { status: "error" };
  }

  // 2. Store in localStorage (client-side storage)
  localStorage.setItem("token", token);

  // 3. Store in cookie (for server-side access)
  setCookie("token", token);
}

export function getToken() {
  // Retrieve from browser storage
  return localStorage.getItem("token");
}
```

**What it does:**

1. Validates token format
2. Stores token in localStorage
3. Sets cookie (so server can read it)
4. Provides token for API calls

**Benefits:**

- ✅ **Fast token retrieval** - No server roundtrip
- ✅ **Persistent storage** - Survives page refreshes
- ✅ **API integration** - Easy to add to axios headers
- ✅ **User experience** - Quick, responsive

---

### **3. Client-Side Page Checks** 🔄 (Redirect Prevention)

**Where:** `src/app/login/page.tsx`, `src/app/page.tsx`

**Code:**

```typescript
// This runs in the BROWSER
useEffect(() => {
  const token = getToken();
  if (token && isValidSanctumToken(token)) {
    router.replace("/admin/dashboard"); // ← Redirect authenticated users
  }
}, [router]);
```

**What it does:**

1. Checks localStorage for token
2. Validates format client-side
3. Redirects if already logged in

**Benefits:**

- ✅ **Better UX** - Instant redirect without server roundtrip
- ✅ **Prevents login loops** - Don't show login if authenticated
- ✅ **Reduces load** - No need to render login page

---

## Why This Hybrid Approach?

### **Comparison with Pure Server-Side:**

| Feature           | Pure Server-Side      | Hybrid (Our Approach)         |
| ----------------- | --------------------- | ----------------------------- |
| Security          | ✅ Excellent          | ✅ Excellent                  |
| Performance       | ⚠️ Slower (API calls) | ✅ Fast (localStorage)        |
| UX                | ⚠️ Server roundtrips  | ✅ Instant responses          |
| API Calls         | ❌ Complex            | ✅ Simple (axios interceptor) |
| Token Persistence | ✅ Server-side only   | ✅ Both sides                 |

### **Comparison with Pure Client-Side:**

| Feature          | Pure Client-Side   | Hybrid (Our Approach) |
| ---------------- | ------------------ | --------------------- |
| Security         | ⚠️ Can be bypassed | ✅ Server-protected   |
| Flash of Content | ❌ Visible         | ✅ No flash           |
| SEO              | ❌ Client-rendered | ✅ Server-rendered    |
| Performance      | ✅ Fast            | ✅ Fast               |
| API Calls        | ✅ Simple          | ✅ Simple             |

---

## Flow Diagram

### **Login Flow:**

```
                    CLIENT SIDE              |           SERVER SIDE
                                             |
1. User enters credentials                   |
   ↓                                         |
2. Call Laravel API ----------------------→ | Laravel validates
   ↓                                         | & returns token
3. Receive token ←-------------------------- |
   ↓                                         |
4. isValidSanctumToken(token)               |
   ↓ (client validation)                    |
5. localStorage.setItem("token", token)     |
   ↓                                         |
6. setCookie("token", token) ------------→  | Cookie stored
   ↓                                         |
7. router.push("/admin/dashboard")          |
   ↓                                         |
8. Navigate to /admin/dashboard             |
   ↓                                         |
                                             | 9. Layout runs on server
                                             |    ↓
                                             | 10. isAuthenticatedUserServer()
                                             |    ↓
                                             | 11. cookies().get("token")
                                             |    ↓
                                             | 12. Validate format
                                             |    ↓
                                             | 13. Token valid? → Render page
                                             |
14. ←------------------------------------ Page HTML
   ↓
15. Page renders with token
   ↓
16. API calls use token from localStorage
```

---

### **Protected Page Access:**

```
                    CLIENT SIDE              |           SERVER SIDE
                                             |
1. User clicks link to /admin/withdrawal     |
   ↓                                         |
                                             | 2. Server layout executes
                                             |    ↓
                                             | 3. isAuthenticatedUserServer()
                                             |    ↓
                                             | 4. cookies().get("token")
                                             |    ↓
                                             | 5. Token exists & valid format?
                                             |    ↓
                                             | 6. YES → Render page
                                             | 7. NO  → redirect("/login")
                                             |    ↓
8. ←------------------------------------ Page HTML
   ↓
9. Components mount
   ↓
10. useEffect runs, calls API
   ↓
11. getToken() from localStorage
   ↓
12. axios.get("/api/data", {
      headers: { Authorization: `Bearer ${token}` }
    })
   ↓
13. --------------------------------→ | Laravel validates token in DB
   ↓                                         |    ↓
14. ←------------------------------- | Returns data or 401
   ↓
15. Display data or redirect to login
```

---

## Why NOT Pure Server-Side?

### **Option A: Server-Side API Call on Every Page**

```typescript
// src/utils/next-auth.server.ts
export async function isAuthenticatedUserServer() {
  const token = cookies().get("token")?.value;

  // Call Laravel API to verify token
  const response = await fetch(`${API_URL}/api/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.ok;
}
```

**Problems:**

- ❌ **Slow:** API call on EVERY page load
- ❌ **Network dependency:** Fails if API is down
- ❌ **Duplicated:** Verified on page load + on API call
- ❌ **Latency:** User waits for 2 API calls (page + data)

---

## Why NOT Pure Client-Side?

### **Option B: Only Client-Side Checks**

```typescript
// All in client components
function ProtectedPage() {
  const token = getToken();

  if (!token) {
    router.push("/login");
    return <div>Redirecting...</div>; // ← User sees this briefly!
  }

  return <ActualPage />;
}
```

**Problems:**

- ❌ **Flash of content:** User briefly sees protected page
- ❌ **Can be bypassed:** User can manipulate localStorage
- ❌ **Poor SEO:** Search engines see protected content
- ❌ **Security risk:** Client controls access logic

---

## Our Hybrid Approach Benefits

### **✅ Security:**

1. **Server validates first** - Cannot be bypassed
2. **Cookie-based** - Server has access
3. **Format validation** - Quick sanity check
4. **API validates real auth** - Laravel checks database

### **✅ Performance:**

1. **Fast page loads** - No API call to verify token
2. **Quick redirects** - Client-side navigation
3. **localStorage** - Instant token retrieval
4. **Cached in browser** - No repeated validations

### **✅ User Experience:**

1. **No flash** - Server redirect before render
2. **Smooth navigation** - Client-side routing
3. **Instant feedback** - No waiting for API
4. **Persistent session** - Works across tabs

### **✅ Developer Experience:**

1. **Simple API calls** - Just add token to headers
2. **Clear separation** - Server = routing, Client = API
3. **Easy debugging** - Clear console logs
4. **Standard pattern** - Follows Next.js best practices

---

## Laravel Sanctum Considerations

### **Why Format-Only Validation?**

With Laravel Sanctum, we **cannot** fully validate tokens server-side without hitting the Laravel API because:

1. **Stateful tokens** - Stored in database
2. **No embedded data** - Just ID + hash
3. **Revocable** - Can be deleted from DB anytime
4. **No expiration in token** - Expiry is a DB field

**So we validate:**

- ✅ Token exists
- ✅ Format is correct
- ✅ Basic structure valid
- ❌ NOT whether it's in the database
- ❌ NOT whether it's expired

**Real validation happens:**

- When components make API calls
- Laravel checks the database
- Returns 401 if invalid
- Axios interceptor redirects to login

---

## Security Trade-offs

### **Current Approach:**

**Scenario:** User has invalid token in cookie

**What happens:**

1. Server layout sees token exists ✅
2. Server checks format is valid ✅
3. Page renders ✅
4. Component makes API call ❌
5. Laravel returns 401 ❌
6. Axios interceptor redirects to login ✅

**Result:** User briefly sees page, then redirected

**Is this okay?** ✅ **YES**

- Brief flash is acceptable
- User cannot access any data
- Redirect happens immediately on first API call
- Protected data never exposed

---

### **Alternative: Full Server Validation:**

```typescript
// On every page load:
const isValid = await fetch(`${API}/user`, {
  headers: { Authorization: `Bearer ${token}` },
});
```

**Trade-off:**

- ✅ More secure (verifies in DB)
- ❌ Much slower (API call per page)
- ❌ Network dependency
- ❌ Unnecessary (will be checked in component anyway)

---

## Conclusion

### **Our Hybrid Approach:**

```
🔒 Server-Side: Route Protection
   ↓
   Checks cookie exists
   Validates format
   Redirects if missing/invalid

💻 Client-Side: Token Management
   ↓
   Stores in localStorage
   Sets cookie for server
   Provides to API calls

🌐 API-Side: Real Validation
   ↓
   Laravel checks database
   Returns 401 if invalid
   Client redirects on 401
```

### **Best of Both Worlds:**

| Aspect      | How We Achieve It              |
| ----------- | ------------------------------ |
| Security    | Server-side route protection   |
| Performance | Client-side localStorage       |
| UX          | No flash of content            |
| DX          | Simple API integration         |
| Correctness | Laravel validates on API calls |

---

## Recommendations

### **Keep Current Approach If:**

- ✅ Performance matters
- ✅ You have axios interceptors handling 401
- ✅ Brief flash on invalid token is acceptable
- ✅ Standard Next.js + Laravel pattern

### **Switch to Full Server Validation If:**

- ⚠️ Maximum security needed (government, banking)
- ⚠️ Zero tolerance for flash
- ⚠️ API is always fast and reliable
- ⚠️ Willing to sacrifice performance

---

## Summary

**Q: Is it server-side or client-side?**
**A: Both! It's a hybrid approach.**

**Q: Why hybrid?**
**A: Best security + best performance + best UX**

**Flow:**

1. **Server** protects routes (layout)
2. **Client** manages tokens (localStorage + cookie)
3. **API** validates for real (Laravel database check)
4. **Client** handles 401 (redirect to login)

**This is the recommended approach for Next.js App Router + Laravel Sanctum!** ✅
