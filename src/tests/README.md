# Test Infrastructure

This directory contains shared testing utilities, mocks, and setup files.

## Directory Structure

```
src/tests/
├── utils/
│   └── test-utils.tsx     # Custom render function with providers
├── mocks/
│   └── data.ts            # Mock data factories
└── README.md              # This file
```

## Usage

### Testing Components

Use the custom `renderWithProviders` function to render components with all necessary providers:

```tsx
import { renderWithProviders, screen } from "@/tests/utils/test-utils";
import { MyComponent } from "./MyComponent";

describe("MyComponent", () => {
  it("should render correctly", () => {
    renderWithProviders(<MyComponent />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
```

### Testing Hooks with TanStack Query

For components or hooks that use TanStack Query, create a test QueryClient:

```tsx
import { renderWithProviders, createTestQueryClient } from "@/tests/utils/test-utils";

const queryClient = createTestQueryClient();

renderWithProviders(<MyComponent />, { queryClient });
```

### Using Mock Data

Import mock data factories from `mocks/data.ts`:

```tsx
import { createMockUser, createMockBanner } from "@/tests/mocks/data";

const mockUser = createMockUser();
const mockBanners = Array.from({ length: 5 }, createMockBanner);
```

## Best Practices

1. **Isolation**: Each test should be independent and not rely on other tests
2. **Cleanup**: Tests automatically cleanup after each test (configured in `vitest.setup.ts`)
3. **Queries**: Use `screen.getByRole` over `getByTestId` for better accessibility
4. **Async**: Use `waitFor` and `findBy` queries for async operations
5. **User Events**: Use `userEvent` from testing library for realistic interactions

## Common Patterns

### Testing Form Components

```tsx
import { renderWithProviders, screen, userEvent } from "@/tests/utils/test-utils";

it("should handle form submission", async () => {
  const user = userEvent.setup();
  const onSubmit = vi.fn();
  
  renderWithProviders(<MyForm onSubmit={onSubmit} />);
  
  await user.type(screen.getByLabelText("Email"), "test@example.com");
  await user.click(screen.getByRole("button", { name: /submit/i }));
  
  expect(onSubmit).toHaveBeenCalledWith({ email: "test@example.com" });
});
```

### Testing Async Components

```tsx
import { renderWithProviders, screen, waitFor } from "@/tests/utils/test-utils";

it("should load and display data", async () => {
  renderWithProviders(<DataList />);
  
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  
  await waitFor(() => {
    expect(screen.getByText("Item 1")).toBeInTheDocument();
  });
});
```

### Mocking API Calls

```tsx
import { vi } from "vitest";

vi.mock("@/api/banner", () => ({
  getBanners: vi.fn().mockResolvedValue([createMockBanner()]),
}));
```
