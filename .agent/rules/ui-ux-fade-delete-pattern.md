# UI-UX Pattern: Fade-to-Delete

## 🎯 Objective
Provide a smooth, non-jarring user experience when deleting items from a list. Instead of the item instantly vanishing (causing layout shifts), it should "fade out" or become non-interactive while the server request is processing, then vanish only after confirmation.

## 🛠️ Implementation Guide

### 1. The `useRepeater` Hook
Use the `useRepeater` hook to manage the list rendering. It should accept a `list` of items and a `render` function.

### 2. The `Fade` Component
Wrap your list item (e.g., `TableRow` or `Card`) in a `Fade` component (from MUI or custom).

### 3. Usage Steps
1.  **State Tracking**: Track the `deletingId` in your View component.
2.  **Opacity Change**: When `onDelete` is triggered (mutation starts), set the row's opacity to `0.5` and `pointer-events` to `none`.
3.  **Animation**: Use the `Fade` transition to handle the exit animation.
4.  **Optimistic UI**: The item stays visible (but faded) until the API returns success.

### 4. Code Example

```tsx
// In your View component
const { mutate, isPending } = useDeleteMutation();
const [deletingId, setDeletingId] = useState<ID>(null);

const handleDelete = (id: ID) => {
  setDeletingId(id);
  mutate(id, {
    onSettled: () => setDeletingId(null), // Clean up
  });
};

// In your Renderer
<Repeater
  items={data}
  render={(item) => (
    <Fade in={deletingId !== item.id} timeout={500}>
      <Box sx={{ opacity: deletingId === item.id ? 0.5 : 1 }}>
        <ItemCard {...item} onDelete={() => handleDelete(item.id)} />
      </Box>
    </Fade>
  )}
/>
```

## ✅ Benefits
- **Perceived Performance**: User sees immediate feedback (fade).
- **Graceful Failure**: If delete fails, opacity can return to 1.
- **Visual Continuity**: No sudden layout jumps until the action is finalized.
