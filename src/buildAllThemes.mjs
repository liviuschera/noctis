import COLORS from "./colors.mjs";
import { makeThemePath } from "./makeThemePath.mjs";
import { buildTheme } from "./buildTheme.mjs";
import { THEMES } from "./build.mjs";
/**
 *
 *
 * @param {array} themesArray
 * @returns {void}
 */
export function buildAllThemes(themesArray) {
   const THEMES_PATH = makeThemePath(THEMES);
   themesArray.forEach(theme => {
      let themeEntries = Object.entries(theme);
      let themeName = themeEntries[0][0];
      let themeWorkbench = themeEntries[0][1];
      THEMES_PATH.find(path => {
         if (path.includes(themeName)) {
            buildTheme(path, COLORS[themeName], themeWorkbench, themeName);
         }
      });
   });
}
