# UX Pattern: Optimistic "Fade-to-Delete" State

This guide documents the implementation of a smooth "Fade-to-Delete" user experience for list items. This pattern ensures that when a user deletes an item, it visually signals deletion immediately and maintains that state until the item is physically removed from the DOM, preventing "flicker" where an item returns to full opacity during background refetches.

## The Goal
1. **Immediate Feedback**: When confirmed, the item immediately fades out (e.g., 0.5 opacity).
2. **Interaction Lock**: The item becomes non-interactive (`pointer-events: none`).
3. **Persist Until Gone**: The "faded" state persists through the API success and data refetching lifecycle. The item should never "pop back in" before disappearing.

## Implementation Steps

### 1. Parent Query Component (The View)
Do not rely solely on `mutation.isPending` to derive the deleting state, because `isPending` becomes `false` *before* the data refetch completes, causing the item to re-render fully visible for a split second.

**Instead, use a local state that persists through the refetch.**

```tsx
// CertificateView.tsx
const CertificateView = () => {
    // 1. Add local state to track the specific ID being deleted
    const [deletingId, setDeletingId] = useState<ID>(null);
    
    // ... setup modalManager ...

    const deleteMutation = useDeleteCertificateMutation({
        onSuccess: (_, variables) => {
            // 2. Set deletingId HERE to trigger the fade animation
            // This ensures the user sees the success state (modal closes) 
            // then the item fades out while the list refetches.
            setDeletingId(variables); 
            modalManager.closeModal("delete");
            certificates.refetch(); 
        },
        onError: () => {
            setDeletingId(null);
        }
    });

    const onDelete = () => {
        const id = modalManager.getEntityId("delete");
        if (id) {
            // 3. Just mutate. Do not set visual state yet.
            deleteMutation.mutate(id);
        }
    };
    
    // ...
}
```

### 2. The Renderer Hook (Repeater)
Pass the specific boolean flag to the child component.

```tsx
// CertificateItem.renderers.tsx
interface RendererOptions {
    // ...
    deletingId?: ID;
}

export const useCertificateRepeater = ({ deletingId, ...props }: RendererOptions) => 
    useRepeater({
        // ...
        render: (item) => (
            <CertificateItem 
                {...item}
                // 6. Check if this specific item is the one being deleted
                isDeleting={deletingId === item.id} 
            />
        )
    });
```

### 3. The Child Component (The Item)
Receive the `isDeleting` prop and apply visual styles using `Fade`.

```tsx
// CertificateItem.tsx
import { Fade } from "@mui/material";

interface UIProps {
    // ...
    isDeleting?: boolean;
}

const CertificateItem = ({ isDeleting, ...props }: UIProps) => {
    return (
        <Fade in={!isDeleting} timeout={1000}>
           <Card
               sx={{
                   // pointerEvents logic is still useful to block clicks during exit animation
                   pointerEvents: isDeleting ? "none" : "auto", 
               }}
           >
               {/* ... content ... */}
           </Card>
        </Fade>
    )
}
```

## Why this works
*   **Trigger**: User clicks confirm -> Mutation starts (Modal shows loading).
*   **Mutation Success**: API returns success. `onSuccess` fires.
*   **Animation Start**: `setDeletingId(id)` is called. Item begins `Fade` (1 -> 0 opacity). Modal closes.
*   **Refetching**: `certificates.refetch()` is called. The list data is "stale" but still present during the network request latency. The item is still mounted, allowing the Fade animation to play.
*   **Completion**: New data arrives. Item unmounts.

