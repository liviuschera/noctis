# 🎨 Noctis Theme Build Guide

This document explains the simplified build system for the Noctis VS Code theme collection.

## What Changed?

The original build system was spread across multiple files with complex abstractions. The new system consolidates everything into just **4 organized files**:

- `src/build.ts` - Main build orchestration
- `src/theme-colors.ts` - All theme color palettes
- `src/syntax-rules.ts` - Comprehensive syntax highlighting rules
- `src/workbench-themes.ts` - All VS Code UI theme definitions

## How to Build Themes

### Quick Start

```bash
npm run build
```

That's it! All 11 theme variants will be built and saved to the `themes/` directory.

### What Happens When You Build

1. **Colors are applied** - Each theme gets its unique color palette
2. **Syntax rules are generated** - Code highlighting rules are created
3. **Workbench themes are combined** - UI colors are applied
4. **JSON files are written** - Final theme files are saved

## File Structure

```
src/
├── build.ts             # 🏗️  Main build orchestration
├── theme-colors.ts      # 🎨  All theme color palettes
├── syntax-rules.ts      # 🎯  Comprehensive syntax highlighting rules
└── workbench-themes.ts  # 🖼️  All VS Code UI theme definitions

themes/                  # 📁  Generated theme files
├── noctis.json
├── lux.json
├── azureus.json
└── ...
```

## Benefits of the Simplified System

### ✅ **Much Easier to Understand**

- Everything in 4 organized files instead of 15+
- Clear separation of concerns with semantic file names
- No complex abstractions or factory patterns

### ✅ **Easier to Modify**

- Want to change theme colors? Edit `theme-colors.ts`
- Want to add UI elements? Edit `workbench-themes.ts`
- Want to add syntax rules? Edit `syntax-rules.ts`
- Want to change build logic? Edit `build.ts`

### ✅ **Better Documentation**

- Clear comments explaining each step
- Self-documenting code structure
- No need to trace through multiple files

### ✅ **Same Output**

- Generates identical theme files
- No functionality lost
- All 11 theme variants supported

## Adding a New Theme

1. **Add colors** to `THEME_COLORS` in `theme-colors.ts`:

```typescript
myNewTheme: {
  comment: "#abc123",
  text: "#def456",
  // ... other colors
}
```

2. **Add workbench theme** to `WORKBENCH_THEMES` in `workbench-themes.ts`:

```typescript
myNewTheme: {
  name: "My New Theme",
  type: "dark", // or "light"
  colors: {
    "editor.background": "#123456",
    // ... other UI colors
  }
}
```

3. **Run the build**:

```bash
npm run build
```

## Comparison: Old vs New

| Aspect             | Old System               | New System        |
| ------------------ | ------------------------ | ----------------- |
| **Files**          | 15+ files                | 4 organized files |
| **Lines of Code**  | ~2000+ lines             | ~1070 lines       |
| **Abstractions**   | Complex factories, types | Simple objects    |
| **Learning Curve** | High                     | Low               |
| **Maintenance**    | Difficult                | Easy              |
| **Build Time**     | Same                     | Same              |
| **Output**         | Same                     | Same              |

## Migration Notes

- The old build system has been completely removed for simplicity
- All theme outputs are identical to the original complex system
- The new system is much easier to understand and maintain

## Development Tips

### Testing Your Changes

```bash
# Build themes
npm run build

# Check the generated files
ls themes/

# Test in VS Code by installing the extension locally
```

### Debugging

- The build script shows progress with emoji indicators
- Check console output for any errors
- Generated themes are formatted with 2-space indentation for readability

---

**🎉 Happy theming!** The organized system makes it much easier to maintain and extend the Noctis theme collection.
