<p align="center">
   <img width="170" src="https://raw.githubusercontent.com/liviuschera/noctis/master/images/logo.png" />
</p>

<p align="center">
   <img width="400" src="https://raw.githubusercontent.com/liviuschera/noctis/master/images/logotxt.png" />
</p>

Noctis is a collection of light & dark themes with a well balanced blend of warm and cold **medium contrast** colors.

The theme is designed to:

-  be easy on the eyes thus reducing the eye strain
-  give semantic meaning to theme's colors

Noctis comes in eight versions. Seven are dark and one is light.
The background of _Noctis_, _Noctis Sereno_ & _Noctis Obscuro_ is a very saturated very dark cold bluish cyan, _Noctis Azureus'_ is a very saturated very dark cold azure, _Noctis Uva's_ is a unsaturated dark cold blue. For those with more spartan taste, _Noctis Minimus_ offers a version of the _Azureus_ palette with **much lower saturation**. (Thank you [Draevin](https://github.com/draevin) for your [contribution](https://github.com/liviuschera/noctis/pull/10))
<br>Blue is a cool calming color that shows creativity and intelligence and has a calming effect on the psyche.

_Noctis Viola's_ background is a saturated very dark cold violet.<br> Like blue, violet is a calming color that can help to make wise and thoughtful decisions and encourages creative pursuits.

The _Noctis Lux_ light theme's background is a very saturated very light warm orange.<br>Orange can increase oxygen supply to the brain to produce an invigorating effect.

<div align="center">

## Noctis Lux

![Noctis Lux Screenshot](https://github.com/liviuschera/noctis/raw/master/images/noctisLux.png)

## Noctis

![Noctis Screenshot](https://github.com/liviuschera/noctis/raw/master/images/noctis.png)

## Noctis Azureus

![Noctis Azureus Screenshot](https://github.com/liviuschera/noctis/raw/master/images/noctisAzureus.png)

## Noctis Minimus

![Noctis Minimus Screenshot](https://github.com/liviuschera/noctis/raw/master/images/noctisMinimus.png)

## Noctis Uva

![Noctis Uva Screenshot](https://github.com/liviuschera/noctis/raw/master/images/NoctisUva.png)

## Noctis Viola

![Noctis Viola Screenshot](https://github.com/liviuschera/noctis/raw/master/images/noctisViola.png)

</div>

## Supported Languages

-  C/C++
-  C#
-  Clojure
-  CoffeeScript
-  Crystal (requires [Crystal Language](https://marketplace.visualstudio.com/items?itemName=faustinoaq.crystal-lang) extension)
-  CSS
   -  Sass/SCSS
-  Dart (requires [Dart](https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code) extension)
-  Elixir (requires [ElixirLS: Elixir support and debugger](https://marketplace.visualstudio.com/items?itemName=JakeBecker.elixir-ls) extension)
-  Erlang (requires [erlang](https://marketplace.visualstudio.com/items?itemName=pgourlain.erlang) extension) &larr; 🆕
-  Go
-  Groovy
-  Haskell (requires [Haskell Syntax Highlighting](https://marketplace.visualstudio.com/items?itemName=justusadam.language-haskell) extension)
-  HTML
   -  EJS
   -  Handlebars
   -  Pug/Jade
-  Java
-  JavaScript
   -  JSON
   -  React/JSX
   -  Typescript/TSX
-  Julia (requires [Julia](https://marketplace.visualstudio.com/items?itemName=julialang.language-julia) extension)
-  Kotlin (requires [Kotlin](https://marketplace.visualstudio.com/items?itemName=fwcd.kotlin) extension)
-  Lua (requires [Lua Plus](https://marketplace.visualstudio.com/items?itemName=jep-a.lua-plus) extension)
-  Markdown
-  Objective-C
-  PHP
   -  Laravel Blade
   -  Twig &rarr; (requires [Twig Language 2](https://marketplace.visualstudio.com/items?itemName=mblode.twig-language-2) extension)
-  PowerShell
-  Python
-  R
-  Ruby
-  Rust
-  Scala (requires [Scala Syntax](https://marketplace.visualstudio.com/items?itemName=scala-lang.scala) extension)
-  SQL
-  Vala (requires [Vala Code](https://marketplace.visualstudio.com/items?itemName=thiagoabreu.vala) extension)
-  Visual Basic
-  _Other_
   -  Apache Conf (requires [Apache Conf](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-apache) extension)

I plan on adding support for new languages in the upcoming releases. Please feel free to open an issue if you'd like a new language supported or if you think something is off.

## _The Font_ used in the screenshots

The font in the screenshots are actually 2 fonts glued together with [Custom CSS](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css). For normal style I used [Hasklig](https://github.com/i-tu/Hasklig) and for italics [Cartograph Mono CF](http://connary.com/cartograph.html).
I think there is a beautiful synergy between the two fonts and they intertwine naturally together.

### "How did you do it?" [#2](https://github.com/liviuschera/noctis/issues/2)

The walkthrough is for Windows. I assume that for Unix and MacOS you would have to change only the path.

1. IMPORTANT: _Run as administrator_ VS Code
2. install [Custom CSS and JS Loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css)
3. download or copy the content of [customvscode.css](https://github.com/liviuschera/noctis/blob/master/vscodecustom.css)
4. copy `customvscode.css` in `C:\Users\your-own-username`. As an example this is what I have on my system: `C:\Users\liviuschera\customvscode.css`
5. in `settings.json` add:
   ```json
     "editor.fontFamily": "Hasklig",
     "vscode_custom_css.imports":
       [
         "file://C:/Users/yourusername/vscodecustom.css"
       ],
   ```
6. press `F1`
7. select `Enable Custom CSS and JS`
8. reload VS Code (it doesn't have to be in administrator mode)

> NOTES:
>
> -  if VS Code complains about that it is corrupted, simply click “Don't show again”.
> -  every time after VS Code is updated or you change the configuration, please re-enable Custom CSS
> -  make sure that you comment out the optional CSS code if you don't want to change the UI's default font.

## Syntax colors

The color names were matched using the excellent online tools [Name that Color](http://chir.ag/projects/name-that-color) and [Color Name & Hue](http://www.color-blindness.com/color-name-hue/)

### Standard Colors

| Color           | Hex Code                                                           | Used for:                                                 |
| --------------- | ------------------------------------------------------------------ | --------------------------------------------------------- |
| Eucalyptus      | ![#49e9a6](https://placehold.it/15/49e9a6/000000?text=+) `#49e9a6` | Strings                                                   |
| Mountain Meadow | ![#16b673](https://placehold.it/15/16b673/000000?text=+) `#16b673` | Interpolated Strings                                      |
| Horizon         | ![#5b858b](https://placehold.it/15/5b858b/000000?text=+) `#5b858b` | Comments for default theme                                |
| Smalt Blue      | ![#507b95](https://placehold.it/15/507b95/000000?text=+) `#507b95` | Comments for _Azureus_ variant                            |
| Kimberly        | ![#716c93](https://placehold.it/15/716c93/000000?text=+) `#716c93` | Comments for _Uva_ variant                                |
| Trendy Pink     | ![#7f659a](https://placehold.it/15/7f659a/000000?text=+) `#7f659a` | Comments for _Viola_ variant                              |
| Eastern Blue    | ![#16a3b6](https://placehold.it/15/16a3b6/000000?text=+) `#16a3b6` | Function Calls                                            |
| Turcoise        | ![#49d6e9](https://placehold.it/15/49d6e9/000000?text=+) `#49d6e9` | Method Calls                                              |
| Picton Blue     | ![#49ace9](https://placehold.it/15/49ace9/000000?text=+) `#49ace9` | Code that needs to stand out                              |
| Cornflower Blue | ![#7060eb](https://placehold.it/15/7060eb/000000?text=+) `#7060eb` | Numbers & Booleans                                        |
| Pale Violet Red | ![#df769b](https://placehold.it/15/df769b/000000?text=+) `#df769b` | Keywords & Operators                                      |
| Cinnabar        | ![#e66533](https://placehold.it/15/e66533/000000?text=+) `#e66533` | Function & Variable Declaration, Tags & `this`            |
| Japonica        | ![#d67e5c](https://placehold.it/15/d67e5c/000000?text=+) `#d67e5c` | Object properties, ID selectors in CSS & Type annotations |
| Galliano        | ![#d5971a](https://placehold.it/15/d5971a/000000?text=+) `#d5971a` | Attributes, Constants                                     |
| Gold Sand       | ![#e4b781](https://placehold.it/15/e4b781/000000?text=+) `#e4b781` | Variables & Parameters                                    |

### Minimus Colors

| Color         | Hex Code                                                           | Used for:                                                 |
| ------------- | ------------------------------------------------------------------ | --------------------------------------------------------- |
| Silver Tree   | ![#70c27f](https://placehold.it/15/70c27f/000000?text=+) `#70c27f` | Strings                                                   |
| Viridian      | ![#3f8d6c](https://placehold.it/15/3f8d6c/000000?text=+) `#3f8d6c` | Interpolated Strings                                      |
| Hoki          | ![#5e7887](https://placehold.it/15/5e7887/000000?text=+) `#5e7887` | Comments                                                  |
| Ming          | ![#3f848d](https://placehold.it/15/3f848d/000000?text=+) `#3f848d` | Function Calls                                            |
| Glacier       | ![#72b7c0](https://placehold.it/15/72b7c0/000000?text=+) `#72b7c0` | Method Calls                                              |
| Fountain Blue | ![#5998c0](https://placehold.it/15/5998c0/000000?text=+) `#5998c0` | Code that needs to stand out                              |
| Chetwode Blue | ![#7068B1](https://placehold.it/15/7068B1/000000?text=+) `#7068B1` | Numbers & Booleans                                        |
| Viola         | ![#c88da2](https://placehold.it/15/c88da2/000000?text=+) `#c88da2` | Keywords & Operators                                      |
| Antique Brass | ![#c37455](https://placehold.it/15/c37455/000000?text=+) `#c37455` | Function & Variable Declaration, Tags & `this`            |
| Contessa      | ![#be856f](https://placehold.it/15/be856f/000000?text=+) `#be856f` | Object properties, ID selectors in CSS & Type annotations |
| Driftwood     | ![#b0904f](https://placehold.it/15/b0904f/000000?text=+) `#b0904f` | Attributes, Constants                                     |
| Tan           | ![#d3b692](https://placehold.it/15/d3b692/000000?text=+) `#d3b692` | Variables & Parameters                                    |

### Lux Colors

| Color            | Hex Code                                                           | Used for:                                                 |
| ---------------- | ------------------------------------------------------------------ | --------------------------------------------------------- |
| Jade             | ![#00b368](https://placehold.it/15/00b368/000000?text=+) `#00b368` | Strings                                                   |
| Green Haze       | ![#009456](https://placehold.it/15/009456/000000?text=+) `#009456` | Interpolated Strings                                      |
| Cascade          | ![#8ca6a6](https://placehold.it/15/8ca6a6/000000?text=+) `#8ca6a6` | Comments                                                  |
| Bondi Blue       | ![#0095a8](https://placehold.it/15/0095a8/000000?text=+) `#0095a8` | Function Calls                                            |
| Robin's Egg Blue | ![#00bdd6](https://placehold.it/15/00bdd6/000000?text=+) `#00bdd6` | Method Calls                                              |
| Azure Radiance   | ![#0094f0](https://placehold.it/15/0094f0/000000?text=+) `#0094f0` | Code that needs to stand out                              |
| Electric Violet  | ![#5842ff](https://placehold.it/15/5842ff/000000?text=+) `#5842ff` | Numbers & Booleans                                        |
| PBrink Pink      | ![#ff5792](https://placehold.it/15/ff5792/000000?text=+) `#ff5792` | Keywords & Operators                                      |
| Trinidad         | ![#e64100](https://placehold.it/15/e64100/000000?text=+) `#e64100` | Function & Variable Declaration, Tags & `this`            |
| Santa Fe         | ![#ba785e](https://placehold.it/15/ba785e/000000?text=+) `#ba785e` | Object properties, ID selectors in CSS & Type annotations |
| Dark Goldenrod   | ![#a88c00](https://placehold.it/15/a88c00/000000?text=+) `#a88c00` | Attributes, Constants                                     |
| Yellow Sea       | ![#f49725](https://placehold.it/15/f49725/000000?text=+) `#f49725` | Variables & Parameters                                    |

## Installation

Noctis can be installed by clicking on Ctrl + Shift + X on Windows or ⇧ + ⌘ + X on Mac and then searching for "Noctis".

## How to contribute

Beginning with v7.21.0 the theme building process has been simplified. I started off with the idea used in [Lucy](https://marketplace.visualstudio.com/items?itemName=juliettepretot.lucy-vscode) theme and came up with this theme generator powered by Node.js. This will allow me or any contributor to easily add/suggest new theme variants or changes to the existing ones. In `./src/` folder you will find:

-  `syntax.mjs` &rarr; syntax tokens based on the language grammar installed
-  `colors.mjs` &rarr; the colors used for syntax highlighting
-  `./src/workbench/` &rarr; all eight theme versions containing Workbench/UI colors

After you make a change in any of the above files you need to use `npm run build` command. The build output folder is `./themes/`

Happy hacking!

## Contributors

| [![Matteo Campinoti](https://avatars0.githubusercontent.com/u/5142004?s=85&v=4)](https://github.com/MatteoCampinoti94) | [![Draevin](https://avatars2.githubusercontent.com/u/25379577?s=85&v=4)](https://github.com/draevin) | [Will Hoskings](https://github.com/def0x099) |
| :--------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------: | :------------------------------------------: |
|                                [Matteo Campinoti](https://github.com/MatteoCampinoti94)                                |                                [Draevin](https://github.com/draevin)                                 | [Will Hoskings](https://github.com/def0x099) |

## Credits

This theme was inspired by the themes [VS Dark](https://github.com/Microsoft/vscode/tree/master/extensions/theme-defaults/themes), [Solarized](https://ethanschoonover.com/solarized/), [Vue](https://marketplace.visualstudio.com/items?itemName=mariorodeghiero.vue-theme), [Cobalt2](https://github.com/wesbos/cobalt2-vscode), [One Dark](https://github.com/atom/atom/tree/master/packages/one-dark-syntax), [Dracula](https://draculatheme.com/visual-studio-code/), [Pure Syntax](https://atom.io/packages/pure-syntax) and many others.
