// import fs from "fs";
// import { promisify } from "util";
// import COLORS from "./colors.mjs";
// import SYNTAX from "./syntax.mjs";
// import noctis from "./workbench/noctis.mjs";
// import azureus from "./workbench/azureus.mjs";
// import lux from "./workbench/lux.mjs";
// import obscuro from "./workbench/obscuro.mjs";
// import sereno from "./workbench/sereno.mjs";
// import minimus from "./workbench/minimus.mjs";
// import uva from "./workbench/uva.mjs";
// import viola from "./workbench/viola.mjs";
// var toType = function (obj) {
//    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
// }
// const THEMES = [
//    { noctis: noctis },
//    { azureus: azureus },
//    { lux: lux },
//    { obscuro: obscuro },
//    { sereno: sereno },
//    { minimus: minimus },
//    { uva: uva },
//    { viola: viola }
// ];


// /**
//  *
//  *
//  * @param {object} syntaxColors
//  * @returns {object}
//  */
// function createSyntax(syntaxColors) {
//    syntaxColors = Object.entries(syntaxColors);

//    SYNTAX.map(element => {
//       let name = element.name.toLowerCase();
//       syntaxColors.forEach(item => {
//          if (name === item[0].toLowerCase()) {
//             element.settings.foreground = item[1];
//          }
//       });
//    });

//    return SYNTAX;
// }

// /**
//  *
//  *
//  * @param {array} themesArray
//  * @returns {array}
//  */
// function makeThemePath(themesArray) {
//    const PATHS = [];
//    themesArray.forEach(theme => {
//       PATHS.push(`./themes/${Object.keys(theme)}.json`);
//    });
//    return PATHS;
// }


// /**
//  *
//  *
//  * @param {string} path
//  * @param {object} syntaxColors
//  * @param {Function} themeWorkbench
//  * @param {string} themeName
//  * @returns {void}
//  */
// async function buildTheme(path, syntaxColors, themeWorkbench, themeName) {

//    console.log(`▶ ${toType(path)}`);
//    console.log(`▶ ${toType(syntaxColors)}`);
//    console.log(`▶ ${toType(themeWorkbench)}`);
//    console.log(`▶ ${toType(themeName)}`);


//    let syntaxWithColors = createSyntax(syntaxColors);
//    const writeFileAsync = promisify(fs.writeFile);
//    const theme = themeWorkbench(syntaxWithColors);

//    try {
//       await writeFileAsync(path, JSON.stringify(theme));
//       console.log(`✔  ${themeName} theme built`);
//    } catch (error) {
//       console.error(`❗  ${error}`);
//    }
// }

// /**
//  *
//  *
//  * @param {array} themesArray
//  * @returns {void}
//  */
// function buildAllThemes(themesArray) {
//    const THEMES_PATH = makeThemePath(THEMES);

//    themesArray.forEach(theme => {
//       let themeEntries = Object.entries(theme);
//       let themeName = themeEntries[0][0];
//       let themeWorkbench = themeEntries[0][1];

//       THEMES_PATH.find(path => {
//          if (path.includes(themeName)) {
//             buildTheme(path, COLORS[themeName], themeWorkbench, themeName);
//          }
//       });
//    });
// }

// buildAllThemes(THEMES);


import noctis from "./workbench/noctis.mjs";
import azureus from "./workbench/azureus.mjs";
import lux from "./workbench/lux.mjs";
import obscuro from "./workbench/obscuro.mjs";
import sereno from "./workbench/sereno.mjs";
import minimus from "./workbench/minimus.mjs";
import uva from "./workbench/uva.mjs";
import viola from "./workbench/viola.mjs";
import { buildAllThemes } from "./buildAllThemes.mjs";

export const THEMES = [
   { noctis: noctis },
   { azureus: azureus },
   { lux: lux },
   { obscuro: obscuro },
   { sereno: sereno },
   { minimus: minimus },
   { uva: uva },
   { viola: viola }
];


buildAllThemes(THEMES);
