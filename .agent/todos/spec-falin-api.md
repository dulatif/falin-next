# Specification: falin-api

## # description
A declarative, decorator-based API layer for Axios in Next.js/React projects. Designed to move logic from components to services using internal metadata and reflection.

---

## # core-decorators

### 1. Class: `@ApiService(path: string)`
- **Purpose**: Defines the base URL segment for all methods in the class.
- **Behavior**: Stores the path in class metadata.

### 2. Method: HTTP Verbs
- `@Get(path?: string)`
- `@Post(path?: string)`
- `@Put(path?: string)`
- `@Patch(path?: string)`
- `@Delete(path?: string)`

### 3. Argument: Parameter Mapping
- `@Param(name: string)`: Explicitly maps an argument to a path variable (e.g., `:id`).
- `@Body()`: Explicitly marks an argument as the request payload.
- `@Query()`: Explicitly marks an argument as query parameters.

### 4. Special: Multipart & Headers
- `@Multipart(fileKeys: string[])`: Automatically converts the payload to `FormData` using a nested-object-safe utility.
- `@Headers(record: Record<string, string>)`: Injects specific headers for that endpoint.

---

## # advanced-features

### `@Transform<T, R>(mapper: (data: T) => R)`
- **Feature**: Intercepts the response data and passes it through a transformer function before returning it to the caller.
- **Goal**: Convert raw DTOs into Domain Entities.

### `@Mock(data: any, delay?: number)`
- **Feature**: If `process.env.NEXT_PUBLIC_API_MOCK` is true, skips the network request and returns the provided data after a delay.
- **Goal**: Enable frontend development before backend implementation is ready.

---

## # technical-requirements
- Uses `reflect-metadata` for parameter index tracking.
- Fully compatible with `AxiosInstance`.
- Support for absolute paths starting with `~` to bypass `@ApiService` base path.
