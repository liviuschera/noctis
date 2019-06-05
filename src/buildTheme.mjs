import fs from "fs";
import { promisify } from "util";
import { createSyntax } from "./createSyntax.mjs";
/**
 *
 *
 * @param {string} path
 * @param {object} syntaxColors
 * @param {Function} themeWorkbench
 * @param {string} themeName
 * @returns {void}
 */
export async function buildTheme(path, syntaxColors, themeWorkbench, themeName) {
   let syntaxWithColors = createSyntax(syntaxColors);
   const writeFileAsync = promisify(fs.writeFile);
   const theme = themeWorkbench(syntaxWithColors);
   try {
      await writeFileAsync(path, JSON.stringify(theme, null, 3));
      console.log(`✔  ${themeName} theme built`);
   }
   catch (error) {
      console.error(`❗  ${error}`);
   }
}
