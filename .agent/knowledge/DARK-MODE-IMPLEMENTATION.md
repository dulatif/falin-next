# Dark Mode Implementation Guide

## 🎯 Overview

This document provides comprehensive guidelines for implementing and maintaining dark mode throughout the application. Following these rules will ensure consistent dark mode behavior and prevent bugs.

---

## 📐 Architecture

### **Three-Layer Color System**

The application uses a **hybrid approach** with three interconnected layers:

```
┌─────────────────────────────────────────┐
│  1. CSS Custom Properties (globals.css) │  ← Runtime switching
├─────────────────────────────────────────┤
│  2. SCSS Variables (colors.scss)        │  ← Developer convenience
├─────────────────────────────────────────┤
│  3. TypeScript getColors() (colors.ts)  │  ← React/MUI components
└─────────────────────────────────────────┘
```

### **Why This Architecture?**

1. **CSS Custom Properties** - Enable runtime theme switching without reloading
2. **SCSS Variables** - Provide developer convenience and type safety in styles
3. **TypeScript getColors()** - MUI's `createTheme` doesn't support CSS variables

---

## 🚫 **CRITICAL RULES - NEVER BREAK THESE**

### **Rule #1: NEVER Import Static Colors in Components**

❌ **WRONG:**
```tsx
import { neutral, primary } from "@/theme/ts/colors";

const MyComponent = () => {
  return <Box sx={{ bgcolor: neutral[50] }}>...</Box>;
};
```

✅ **CORRECT:**
```tsx
import { useTheme } from "@mui/material/styles";
import { getColors } from "@/theme/ts/colors";

const MyComponent = () => {
  const theme = useTheme();
  const colors = getColors(theme.palette.mode);
  
  return <Box sx={{ bgcolor: colors.neutral[50] }}>...</Box>;
};
```

### **Rule #2: NEVER Use Hardcoded Hex Colors**

❌ **WRONG:**
```tsx
<Box sx={{ bgcolor: "#f9fafb" }}>...</Box>
<Typography color="#344054">...</Typography>
```

✅ **CORRECT:**
```tsx
// In TSX components
const colors = getColors(theme.palette.mode);
<Box sx={{ bgcolor: colors.neutral[50] }}>...</Box>

// In SCSS files
.element {
  background: $neutral-50;  // Maps to CSS variable
}
```

### **Rule #3: NEVER Create Inline Styles Without Theme Awareness**

❌ **WRONG:**
```tsx
const styles = {
  card: {
    backgroundColor: "#fff",
    border: "1px solid #eaecf0",
  }
};
```

✅ **CORRECT:**
```tsx
const theme = useTheme();
const colors = getColors(theme.palette.mode);

const styles = React.useMemo(() => ({
  card: {
    backgroundColor: colors.neutral[25],
    border: `1px solid ${colors.neutral[100]}`,
  }
}), [colors]);
```

---

## 📋 **Implementation Patterns**

### **Pattern 1: React Component with Inline Styles**

```tsx
import { useTheme } from "@mui/material/styles";
import { getColors } from "@/theme/ts/colors";
import React from "react";

const MyComponent = () => {
  const theme = useTheme();
  const colors = getColors(theme.palette.mode);

  // # styles (memoized for performance)
  const stylesInt = React.useMemo(() => ({
    container: {
      backgroundColor: colors.neutral[25],
      border: `1px solid ${colors.neutral[100]}`,
    },
    text: {
      color: colors.neutral[700],
    },
  }), [colors]);  // ← Recreates only when colors change

  return (
    <Box sx={stylesInt.container}>
      <Typography sx={stylesInt.text}>Content</Typography>
    </Box>
  );
};
```

### **Pattern 2: SCSS Module Component**

**Component TSX:**
```tsx
import styles from "./MyComponent.module.scss";

const MyComponent = () => {
  return (
    <div className={styles.Container}>
      <p className={styles.Text}>Content</p>
    </div>
  );
};
```

**Component SCSS:**
```scss
@use "@/theme/scss/colors.scss" as *;

.Container {
  background-color: $neutral-25;  // ← Automatically dark mode aware
  border: 1px solid $neutral-100;
}

.Text {
  color: $neutral-700;
}
```

### **Pattern 3: Utility Function with Colors Parameter**

**getStyles.ts:**
```typescript
type ColorPalette = {
  neutral: Record<number, string>;
  primary: Record<number, string>;
  // ... other color families
};

export function getStyles(
  // ... other parameters
  colors: ColorPalette,  // ← Accept colors as parameter
) {
  return {
    root: {
      backgroundColor: colors.neutral[25],
      border: `1px solid ${colors.neutral[300]}`,
    },
  };
}
```

**Using the utility:**
```tsx
const theme = useTheme();
const colors = getColors(theme.palette.mode);

const styles = getStyles(disabled, onDropZone, colors);  // ← Pass colors
```

### **Pattern 4: MUI Theme Component Styles**

**components.ts:**
```typescript
import { getColors } from "./colors";

export const createComponents = (mode: "light" | "dark"): Components => {
  const colors = getColors(mode);  // ← Get mode-aware colors

  return {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: colors.primary[600],
          color: colors.neutral[50],
          "&:hover": {
            backgroundColor: colors.primary[700],
          },
        },
      },
    },
  };
};
```

---

## 🎨 **Color Palette Reference**

### **Available Color Families**
```typescript
const colors = getColors(mode);

// Neutral (grayscale)
colors.neutral[25]   // Lightest (dark mode: darkest)
colors.neutral[950]  // Darkest (dark mode: lightest)

// Brand Colors
colors.primary[X]    // Teal/Cyan
colors.secondary[X]  // Pink/Rose

// Semantic Colors
colors.success[X]    // Green
colors.info[X]       // Blue
colors.warning[X]    // Yellow/Orange
colors.danger[X]     // Red
colors.error[X]      // Alias for danger
```

### **Common Shades**
- **25-50**: Backgrounds, subtle fills
- **100-200**: Borders, dividers
- **300-400**: Disabled states, placeholders
- **500-600**: Primary actions, icons
- **700-900**: Text, strong emphasis

---

## ✅ **Component Structure Convention**

All components should follow this structure:

```tsx
import { useTheme } from "@mui/material/styles";
import { getColors } from "@/theme/ts/colors";
import React from "react";

const MyComponent = (props) => {
  const theme = useTheme();
  const colors = getColors(theme.palette.mode);

  // # states
  const [value, setValue] = React.useState("");

  // # conditions
  const isActive = value.length > 0;

  // # functions
  const handleChange = () => { ... };

  // # view templates
  const icon = isActive ? <CheckIcon /> : <CloseIcon />;

  // # styles (MUST use useMemo for performance)
  const stylesInt = React.useMemo(() => ({
    root: { backgroundColor: colors.neutral[25] },
    // ... other styles
  }), [colors]);  // ← Recreates only when theme changes

  return (/* JSX */);
};
```

---

## 🔧 **MUI Theme Integration**

### **theme.ts Structure**

```typescript
import { createTheme } from "@mui/material";
import { createComponents } from "./ts/components";
import { lightPalette, darkPalette } from "./ts/palettes";
import { typography } from "./ts/typography";

export const createAppTheme = (mode: "light" | "dark") => {
  return createTheme({
    palette: mode === "light" ? lightPalette : darkPalette,
    typography,
    components: createComponents(mode),  // ← Pass mode to factory
  });
};
```

### **Why Factory Functions?**

MUI's `createTheme` is called **only once per mode change**. To make component styles mode-aware:

1. ✅ Use `createComponents(mode)` factory function
2. ✅ Pass `mode` parameter to helper functions
3. ✅ Use `getColors(mode)` inside

---

## 🐛 **Common Pitfalls & Solutions**

### **Pitfall #1: Static Styles Object**

❌ **WRONG:**
```tsx
const styles = {
  card: { backgroundColor: neutral[50] }  // ← Static, won't change
};
```

✅ **FIX:**
```tsx
const styles = React.useMemo(() => ({
  card: { backgroundColor: colors.neutral[50] }
}), [colors]);
```

### **Pitfall #2: Forgetting useMemo**

❌ **WRONG:**
```tsx
const MyComponent = () => {
  const colors = getColors(theme.palette.mode);
  const styles = {  // ← Recreated on EVERY render
    root: { bg: colors.neutral[50] }
  };
};
```

✅ **FIX:**
```tsx
const styles = React.useMemo(() => ({
  root: { bg: colors.neutral[50] }
}), [colors]);  // ← Recreated only when colors change
```

### **Pitfall #3: Missing SCSS Imports**

❌ **WRONG:**
```scss
.Container {
  background: $neutral-50;  // ← Undefined variable error!
}
```

✅ **FIX:**
```scss
@use "@/theme/scss/colors.scss" as *;  // ← Import first!

.Container {
  background: $neutral-50;
}
```

### **Pitfall #4: Using `#fff` or `#000`**

❌ **WRONG:**
```tsx
<Box sx={{ bgcolor: "#fff" }}>...</Box>  // ← Always white
```

✅ **FIX:**
```tsx
<Box sx={{ bgcolor: colors.neutral[25] }}>...</Box>  // ← Adapts to theme
```

---

## 📦 **File-Specific Guidelines**

### **For `*.tsx` Components:**

1. ✅ Import `useTheme` from `@mui/material/styles`
2. ✅ Import `getColors` from `@/theme/ts/colors`
3. ✅ Call `getColors(theme.palette.mode)` in component
4. ✅ Wrap styles in `React.useMemo` with `[colors]` dependency
5. ✅ Place styles in `# styles` section (after view templates)

### **For `*.module.scss` Files:**

1. ✅ Add `@use "@/theme/scss/colors.scss" as *;` at top
2. ✅ Use SCSS variables: `$neutral-50`, `$primary-600`, etc.
3. ❌ NEVER use hardcoded hex values
4. ✅ Variables automatically map to CSS custom properties

### **For Utility Functions:**

1. ✅ Accept `colors` as a parameter
2. ✅ Define `ColorPalette` type if needed
3. ✅ Caller passes `getColors(mode)` result

### **For MUI Theme Files:**

1. ✅ Use factory functions that accept `mode` parameter
2. ✅ Call `getColors(mode)` inside factory
3. ✅ Pass mode to all helper functions

---

## 🧪 **Testing Dark Mode**

### **Manual Testing Checklist:**

- [ ] Toggle theme switch in UI
- [ ] Check all color families (neutral, primary, success, etc.)
- [ ] Verify borders, backgrounds, and text colors
- [ ] Test hover states and active states
- [ ] Check form inputs (normal, focused, error states)
- [ ] Verify chips, alerts, and badges
- [ ] Test tables (headers, rows, hover)
- [ ] Check modals and tooltips

### **Automated Testing:**

```tsx
import { renderWithTheme } from "@/test-utils";

it("renders correctly in dark mode", () => {
  const { container } = renderWithTheme(<MyComponent />, { mode: "dark" });
  // Assert dark mode styles
});
```

---

## 📝 **Quick Reference Checklist**

When adding a new component:

- [ ] Import `useTheme` and `getColors`
- [ ] Call `getColors(theme.palette.mode)`
- [ ] Use `colors.X[Y]` instead of static imports
- [ ] Wrap styles in `React.useMemo` with `[colors]` dependency
- [ ] For SCSS: Import `@use "@/theme/scss/colors.scss"`
- [ ] Test in both light and dark modes
- [ ] Check performance (no unnecessary re-renders)

---

## 🎓 **Examples**

### **Complete Component Example**

```tsx
"use client";
import { Box, Card, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { getColors } from "@/theme/ts/colors";

interface ProductCardProps {
  title: string;
  price: number;
  isActive: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, isActive }) => {
  const theme = useTheme();
  const colors = getColors(theme.palette.mode);

  // # styles
  const stylesInt = React.useMemo(() => ({
    card: {
      backgroundColor: colors.neutral[25],
      border: `1px solid ${colors.neutral[100]}`,
      borderRadius: "8px",
      padding: "16px",
    },
    title: {
      color: colors.neutral[900],
      fontWeight: 600,
    },
    price: {
      color: isActive ? colors.success[600] : colors.neutral[500],
    },
  }), [colors, isActive]);

  return (
    <Card sx={stylesInt.card}>
      <Typography sx={stylesInt.title}>{title}</Typography>
      <Typography sx={stylesInt.price}>${price}</Typography>
    </Card>
  );
};

export default ProductCard;
```

---

## 🔄 **Migration Guide**

When updating existing components:

1. **Find static color imports:**
   ```tsx
   import { neutral, primary } from "@/theme/ts/colors";
   ```

2. **Replace with getColors:**
   ```tsx
   import { useTheme } from "@mui/material/styles";
   import { getColors } from "@/theme/ts/colors";
   
   const theme = useTheme();
   const colors = getColors(theme.palette.mode);
   ```

3. **Update all color references:**
   ```tsx
   // Before: neutral[50]
   // After:  colors.neutral[50]
   ```

4. **Add useMemo to styles:**
   ```tsx
   const styles = React.useMemo(() => ({
     // ... styles using colors
   }), [colors]);
   ```

---

## 🎯 **Summary**

### **Do's:**
- ✅ Use `getColors(theme.palette.mode)` in components
- ✅ Wrap styles in `React.useMemo`
- ✅ Use SCSS variables in `.module.scss` files
- ✅ Test both light and dark modes
- ✅ Follow the component structure convention

### **Don'ts:**
- ❌ Import static colors (`neutral`, `primary`, etc.)
- ❌ Use hardcoded hex values (`#fff`, `#000`)
- ❌ Create styles without `useMemo`
- ❌ Forget SCSS imports
- ❌ Skip dark mode testing

---

## 📞 **Questions?**

If you encounter issues:
1. Check this guide first
2. Review existing dark mode components as examples
3. Verify your imports and structure
4. Test in both light and dark modes

**Last Updated:** 2026-01-04
**Version:** 1.0.0
