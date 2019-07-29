import lux from "./workbench/lux.mjs";
import hibernus from "./workbench/hibernus.mjs";
import lilac from "./workbench/lilac.mjs";
import noctis from "./workbench/noctis.mjs";
import azureus from "./workbench/azureus.mjs";
import obscuro from "./workbench/obscuro.mjs";
import sereno from "./workbench/sereno.mjs";
import minimus from "./workbench/minimus.mjs";
import bordo from "./workbench/bordo.mjs";
import uva from "./workbench/uva.mjs";
import viola from "./workbench/viola.mjs";
import { buildAllThemes } from "./buildAllThemes.mjs";

export const THEMES = [
   { lux: lux },
   { hibernus: hibernus },
   { lilac: lilac },
   { noctis: noctis },
   { azureus: azureus },
   { obscuro: obscuro },
   { sereno: sereno },
   { minimus: minimus },
   { bordo: bordo },
   { uva: uva },
   { viola: viola }
];


buildAllThemes(THEMES);
