import fs from "fs";
import { promisify } from "util";
import COLORS from "./colors";
import SYNTAX from "./syntax";
import noctis from "./workbench/noctis";
import azureus from "./workbench/azureus";
import lux from "./workbench/lux";
import obscuro from "./workbench/obscuro";
import sereno from "./workbench/sereno";
import minimus from "./workbench/minimus";
import uva from "./workbench/uva";
import viola from "./workbench/viola";

const THEMES = [
   { noctis: noctis },
   { azureus: azureus },
   { lux: lux },
   { obscuro: obscuro },
   { sereno: sereno },
   { minimus: minimus },
   { uva: uva },
   { viola: viola }
];

function assignSyntaxColors(themeName) {
   themeName = Object.entries(themeName);

   SYNTAX.map(element => {
      let name = element.name.toLowerCase();
      themeName.forEach(item => {
         if (name === item[0].toLowerCase()) {
            element.settings.foreground = item[1];
         }
      });
   });

   return SYNTAX;
}

function makeThemePath(themesArray) {
   const PATHS = [];
   themesArray.forEach(theme => {
      PATHS.push(`./themes/${Object.keys(theme)}.json`);
   });
   return PATHS;
}

async function buildTheme(path, syntaxColors, themeWorkbench, themeName) {
   let syntaxWithColors = assignSyntaxColors(syntaxColors, themeName);
   const writeFileAsync = promisify(fs.writeFile);
   const theme = themeWorkbench(syntaxWithColors);

   try {
      await writeFileAsync(path, JSON.stringify(theme));
      console.log(`${themeName} theme built ✔`);
   } catch (error) {
      console.error(`❗  ${error}`);
   }
}

async function buildAllThemes(themesArray) {
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

buildAllThemes(THEMES);
