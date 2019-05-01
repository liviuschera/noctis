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
