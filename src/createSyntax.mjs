import SYNTAX from "./syntax.mjs";
/**
 *
 *
 * @param {object} syntaxColors
 * @returns {object}
 */
export function createSyntax(syntaxColors) {
   syntaxColors = Object.entries(syntaxColors);
   SYNTAX.map(element => {
      let name = element.name.toLowerCase();
      syntaxColors.forEach(item => {
         if (name === item[0].toLowerCase()) {
            element.settings.foreground = item[1];
         }
      });
   });
   return SYNTAX;
}
