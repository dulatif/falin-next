# UI Layer Structure

This directory contains all visual components.

## 📜 React Component Standard
**Goal**: Unified mental model, Zero-Cognitive Load, Predictable Data Flow.

### 1. External Definitions (Outside Component)
- **`# styles internal`**: `SxProps` or `CSSProperties`. Name: `stylesInt`.
- **`# constants`**: Defaults/Config. Name: `SCREAMING_SNAKE_CASE`.

```tsx
"use client";
// # styles internal
const stylesInt = { root: { p: 3 }, card: { borderRadius: 2 } };

const Component = (props: Props) => {
  // # state (Local UI state only. No API data)
  const [isOpen, setIsOpen] = useState(false);

  // # queries (Server State gateway)
  const { data, isLoading } = useDataQuery();
  const mutation = useUpdateMutation();

  // # computes (Transformation Layer. All logic here)
  const isPending = data?.status === "pending";
  const formattedPrice = new Intl.NumberFormat().format(data?.price || 0);

  // # effects (Sync logic only)
  useEffect(() => { /* sync */ }, [data]);

  // # functions (User Actions)
  const onSave = () => mutation.mutate();

  // # view-templates (Complex UI structures)
  const listRepeater = useRepeater({ items: data?.items });

  return (
    <Box sx={stylesInt.root}>
      {/* ---------- Loading Screen ---------- */}
      <Render in={isLoading}><Skeleton /></Render>

      {/* ---------- Main Content ---------- */}
      <Card sx={stylesInt.card}>
        <Typography>{formattedPrice}</Typography>
        <Button onClick={onSave}>Save</Button>
      </Card>

      {/* ---------- Modals / Overlays ---------- */}
      <Render in={isOpen}><Modal /></Render>
    </Box>
  );
};
```

### 2. Standard Sections
- **`# state`**: Local memory (`useState`, `useForm`).
- **`# queries`**: API calls. Must be above computes.
- **`# computes`**: Derived logic (`useMemo`, filtering, formatting). **No logic in JSX**.
- **`# effects`**: Sync with external systems.
- **`# functions`**: Event handlers (`onAction`, `handleAction`).
- **`# view-templates`**: UI config hooks (Repeater, Table).

### 3. Rendering Rules
- **Conditional**: Use `<Render in={condition}>` instead of `&&`.
- **Lists**: ALWAYS use `<Repeater>` component.
    - **Why**: Handles empty states, loading, and render prop pattern consistently.
    - **File Structure**: `src/ui/components/[Resource]Repeater/` must contain 3 files:
        1.  `[Resource]Item.tsx`: **Presentational**. Renders a single item. Props = Data + Action Callbacks.
        2.  `[Resource]Item.renderers.tsx`: **Logic/Config**. Exports `use[Resource]Repeater`.
        3.  `index.ts`: Exports `use[Resource]Repeater` and `[Resource]Item`.
    
    - **Implementation Guide**:
      
      **1. The Item Component (`[Resource]Item.tsx`)**
      ```tsx
      // Pure UI. No queries. No complex logic.
      interface ItemProps extends Event {
        onEdit: (id: number) => void;
        onDelete: (id: number) => void;
        isDeleting?: boolean;
      }
      export const EventItem = ({ id, title, onEdit, onDelete }: ItemProps) => (
        <Card>
           <Typography>{title}</Typography>
           <Button onClick={() => onEdit(id)}>Edit</Button>
        </Card>
      );
      ```

      **2. The Renderer Hook (`[Resource]Item.renderers.tsx`)**
      ```tsx
      // Connects Data -> UI. Handles Empty States.
      interface RendererOptions {
        data: Event[] | undefined;
        onEdit: (id: ID) => void;
        onDelete: (id: ID) => void;
        onDetail: (id: ID) => void;
        deletingId?: ID;
      }
      
      export const useEventRepeater = ({ data, onEdit, onDelete, onDetail, deletingId }: RendererOptions) => {
        return useRepeater<Event>({
          items: data,
          empty: (
            <Grid size={12}>
              <EmptyState
                title="No events found"
                description="There are no events. Add one to get started."
              />
            </Grid>
          ),
          render: (event) => (
            <Grid size={{ xs: 12, lg: 12 }} key={event.id}>
              <EventItem
                {...event}
                onEdit={() => onEdit(event.id)}
                onDelete={() => onDelete(event.id)}
                onDetail={() => onDetail(event.id)}
                isDeleting={deletingId === event.id}
              />
            </Grid>
          ),
        });
      };
      ```

      **3. Usage in View (`EventView.tsx`)**
      ```tsx
      // 1. Init Hook
      const eventRepeater = useEventRepeater({ 
        data: query.data, 
        onEdit: (id) => router.push(`/events/${id}/edit`),
        onDelete: (id) => deleteMutation.mutate(id),
        onDetail: (id) => router.push(`/events/${id}`),
        deletingId: state.deletingId
      });
      
      // 2. Render
      return <Repeater {...eventRepeater} />;
      ```
- **Zones**: Split return into `Loading Screen`, `Main Content`, `Modals`.

## 📂 File Structure
- `elements/`: Atoms (Button, Input, Repeater).
- `components/`: Molecules (Card, Modal). MUST follow sub-folder per component.
- `features/`: **High-Level Domain Containers**.
    - **Role**: Groups related UI and logic for a specific feature (e.g., `features/dashboard`).
    - **Relationship**: It does **NOT** replace `sections` or `views`. It consumes them to build a full feature context.
- `sections/`: **Organisms** (Page Sections).
    - `form/`: Zod forms.
    - `modal/`: Feature-specific modals.
    - `tabs/`: Tab panels.
    - `view/`: Sub-views.
- `layouts/`: Templates.
- `views/`: Page Logic + View Assembly.

