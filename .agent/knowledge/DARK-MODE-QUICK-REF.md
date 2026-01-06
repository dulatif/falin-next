# Dark Mode Quick Reference Card

## 🚀 Quick Start Template

### For TSX Components:
```tsx
import { useTheme } from "@mui/material/styles";
import { getColors } from "@/theme/ts/colors";
import React from "react";

const MyComponent = () => {
  const theme = useTheme();
  const colors = getColors(theme.palette.mode);

  const styles = React.useMemo(() => ({
    root: {
      backgroundColor: colors.neutral[25],
      border: `1px solid ${colors.neutral[100]}`,
    },
  }), [colors]);

  return <Box sx={styles.root}>Content</Box>;
};
```

### For SCSS Modules:
```scss
@use "@/theme/scss/colors.scss" as *;

.Root {
  background-color: $neutral-25;
  border: 1px solid $neutral-100;
}
```

---

## ❌ Common Mistakes

| ❌ WRONG | ✅ CORRECT |
|----------|------------|
| `import { neutral } from "@/theme/ts/colors"` | `import { getColors } from "@/theme/ts/colors"` |
| `bgcolor: neutral[50]` | `bgcolor: colors.neutral[50]` |
| `bgcolor: "#fff"` | `bgcolor: colors.neutral[25]` |
| `const styles = { ... }` | `const styles = React.useMemo(() => ({ ... }), [colors])` |
| `.root { bg: #f9fafb; }` | `.root { bg: $neutral-50; }` |

---

## 🎨 Color Shades Guide

```
25-50   → Backgrounds, subtle fills
100-200 → Borders, dividers
300-400 → Disabled, placeholders
500-600 → Primary actions, icons
700-900 → Text, strong emphasis
```

---

## ✅ Checklist for New Components

- [ ] Import `useTheme` and `getColors`
- [ ] Call `getColors(theme.palette.mode)`
- [ ] Use `colors.X[Y]` (never static imports)
- [ ] Wrap styles in `React.useMemo`
- [ ] Add `[colors]` to dependency array
- [ ] For SCSS: `@use "@/theme/scss/colors.scss"`
- [ ] Test in light AND dark mode

---

## 🔧 Available Colors

```typescript
colors.neutral[X]    // Gray scale
colors.primary[X]    // Brand color (Teal)
colors.secondary[X]  // Accent (Pink)
colors.success[X]    // Green
colors.info[X]       // Blue
colors.warning[X]    // Yellow
colors.danger[X]     // Red
colors.error[X]      // Alias for danger
```

---

## 📋 Component Structure

```tsx
const MyComponent = () => {
  const theme = useTheme();
  const colors = getColors(theme.palette.mode);

  // # states
  // # conditions
  // # functions
  // # view templates
  // # styles (with useMemo!)
  
  return (/* JSX */);
};
```

---

**See `DARK-MODE-IMPLEMENTATION.md` for full guide**
