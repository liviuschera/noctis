import fs from "fs";
import path from "path";
import { WORKBENCH_THEMES } from "./workbench-themes";
import { SYNTAX_RULES } from "./syntax-rules";
import { THEME_COLORS } from "./theme-colors";

/**
 * 🎨 SIMPLE NOCTIS THEME BUILDER
 *
 * This replaces the complex build system with a single, easy-to-understand file.
 * Everything you need to build all Noctis themes is right here!
 */

// Create syntax highlighting rules with colors
function createSyntaxRules(colors: Record<string, string>) {
  return SYNTAX_RULES.map((rule) => {
    const colorKey =
      rule.name === "STRINGINTERPOLATED"
        ? "stringInterpolated"
        : rule.name.toLowerCase();
    return {
      name: rule.name,
      scope: rule.scopes,
      settings: {
        foreground: colors[colorKey] || colors.text,
        // Add font styles for better readability
        ...(rule.name === "COMMENT" && { fontStyle: "italic" }),
        ...(rule.name === "KEYWORD" && { fontStyle: "bold" }),
      },
    };
  });
}

// Build all themes - much simpler than the original complex system
function buildAllThemes() {
  console.log("🎨 Building Noctis themes...\n");

  const themesDir = path.join(process.cwd(), "themes");

  // Ensure themes directory exists
  if (!fs.existsSync(themesDir)) {
    fs.mkdirSync(themesDir, { recursive: true });
  }

  let builtCount = 0;
  let skippedCount = 0;

  // Build each theme
  for (const [themeName, colors] of Object.entries(THEME_COLORS)) {
    const syntaxRules = createSyntaxRules(colors);
    const workbench =
      WORKBENCH_THEMES[themeName as keyof typeof WORKBENCH_THEMES];

    if (!workbench) {
      console.log(`⚠️  No workbench theme found for ${themeName}, skipping...`);
      skippedCount++;
      continue;
    }

    const theme = {
      ...workbench,
      tokenColors: syntaxRules,
    };

    const themePath = path.join(themesDir, `${themeName}.json`);

    // Remove existing file if it exists
    if (fs.existsSync(themePath)) {
      fs.unlinkSync(themePath);
    }

    try {
      fs.writeFileSync(themePath, JSON.stringify(theme, null, 2));
      console.log(`✅ Built ${workbench.name} (${themeName}.json)`);
      builtCount++;
    } catch (error) {
      console.error(`❌ Failed to build ${themeName}: ${error}`);
    }
  }

  console.log(
    `\n📊 Summary: ${builtCount} themes built successfully, ${skippedCount} skipped`
  );
  console.log("✨ All done! Your themes are ready in the ./themes/ directory");
}

// Run the build when this file is executed directly
if (require.main === module) {
  buildAllThemes();
}

// Export for use in other files
export { buildAllThemes };
