# Color System Quick Reference

## 🎨 Available Color Variables

### Neutral (Gray Scale)
```scss
$neutral-25  // Almost white
$neutral-50  // Very light gray
$neutral-100 // Light gray
$neutral-200 // Border gray
$neutral-300 // Border strong
$neutral-400 // Muted text
$neutral-500 // Secondary text
$neutral-600 // Subdued text
$neutral-700 // Primary text
$neutral-800 // Dark gray
$neutral-900 // Almost black
$neutral-950 // Darkest
```

### Primary (Cyan/Teal)
```scss
$primary-25   // Lightest teal
$primary-50   // Very light teal
$primary-100  // Light teal
$primary-200  // Soft teal
$primary-300  // Teal
$primary-400  // Medium teal
$primary-500  // Bright teal
$primary-600  // Primary brand color 🎨
$primary-700  // Dark teal
$primary-800  // Darker teal
$primary-900  // Darkest teal
```

### Secondary (Pink/Rose)
```scss
$secondary-25   // Lightest pink
$secondary-100  // Light pink
$secondary-300  // Soft pink
$secondary-500  // Medium pink
$secondary-600  // Primary secondary 🎨
$secondary-800  // Dark pink
$secondary-900  // Darkest pink
```

### Success (Green)
```scss
$success-25   // Lightest green
$success-100  // Light green
$success-300  // Soft green
$success-500  // Success green 🎨
$success-700  // Dark green
$success-900  // Darkest green
```

### Info (Blue)
```scss
$info-25   // Lightest blue
$info-100  // Light blue
$info-300  // Soft blue
$info-500  // Info blue 🎨
$info-700  // Dark blue
$info-900  // Darkest blue
```

### Warning (Yellow)
```scss
$warning-25   // Lightest yellow
$warning-100  // Light yellow
$warning-300  // Soft yellow
$warning-500  // Warning yellow 🎨
$warning-700  // Dark yellow
$warning-900  // Darkest yellow
```

### Danger/Error (Red)
```scss
$danger-25   // Lightest red
$danger-100  // Light red
$danger-300  // Soft red
$danger-500  // Error red 🎨
$danger-700  // Dark red
$danger-900  // Darkest red
```

---

## 💡 Common Patterns

### Backgrounds
```scss
.component {
  background: $neutral-50;      // Light bg
  background: $neutral-100;     // Secondary bg
  background: $primary-50;      // Tinted bg
}
```

### Text
```scss
.text {
  color: $neutral-700;          // Primary text
  color: $neutral-500;          // Secondary text
  color: $neutral-400;          // Muted text
}
```

### Borders
```scss
.bordered {
  border: 1px solid $neutral-200;    // Default border
  border: 1px solid $neutral-300;    // Strong border
  border: 1px solid $primary-600;    // Accent border
}
```

### States
```scss
.button {
  background: $primary-600;
  
  &:hover {
    background: $primary-700;
  }
  
  &:active {
    background: $primary-800;
  }
  
  &:disabled {
    background: $neutral-300;
    color: $neutral-500;
  }
}
```

---

## 🌓 Dark Mode Behavior

When dark mode activates (`data-theme="dark"`):

- `$neutral-*` colors **invert** (light becomes dark, dark becomes light)
- All other colors stay the **same** or get **slightly brighter**
- Your components **automatically adapt** if using variables

Example:
```scss
.card {
  background: $neutral-100;  // White in light, dark gray in dark
  color: $neutral-700;       // Dark gray in light, light gray in dark
}
```

---

## ✅ Best Practices

### ✅ DO:
```scss
// Use variables
background: $neutral-100;
color: $primary-600;
border: 1px solid $neutral-200;
```

### ❌ DON'T:
```scss
// Hardcode colors
background: #f2f4f7;
color: #49c3d0;
border: 1px solid #eaecf0;
```

---

## 🔍 Finding the Right Color

1. **Backgrounds**: Use `neutral-50`, `neutral-100`, or `neutral-25`
2. **Text**: Use `neutral-700` (primary), `neutral-500` (secondary), `neutral-400` (muted)
3. **Borders**: Use `neutral-200` (default), `neutral-300` (strong)
4. **Brand/Accent**: Use `primary-600`
5. **States**: 
   - Success → `success-500`
   - Warning → `warning-500`
   - Error → `danger-500`
   - Info → `info-500`

---

## 📝 Template

Copy this to start a new SCSS file:

```scss
@use "@/theme/scss/colors.scss" as *;
@use "@/theme/scss/spacing.scss" as *;
@use "@/theme/scss/typography.scss" as *;
@use "@/theme/scss/shadows.scss" as *;

.MyComponent {
  background: $neutral-50;
  color: $neutral-700;
  padding: $space-4;
  border: 1px solid $neutral-200;
  border-radius: 8px;
}
```
