/**
 *
 *
 * @param {array} themesArray
 * @returns {array}
 */
export function makeThemePath(themesArray) {
   const PATHS = [];
   themesArray.forEach(theme => {
      PATHS.push(`./themes/${Object.keys(theme)}.json`);
   });
   return PATHS;
}
