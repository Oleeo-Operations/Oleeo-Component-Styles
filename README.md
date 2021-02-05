# Oleeo Component Styles

This repository is to accompany the similarly named [Oleeo Components](https://github.com/Oleeo-Operations/Oleeo-Components) repository and is for use on Oleeo Careers Sites.

## Summary

The Oleeo Components cannot be styled using the native Webflow editor and, therefore, must be styled using an external stylesheet. By default, the components include limited styles and will need to be styled according to the target brand.

## How To Use

**_TODO: Create a template which can be copied._**

A template is available which can be copied as a starting point for each new brand. Every careers site will have it's own folder for the styles (e.g. branding files for "RobCorp" would be contained in a folder named "RobCorp").

The stylesheets are created using SCSS (see [here](https://sass-lang.com/documentation) for SCSS documentation) and each component has it's own partial file. Therefore the file structure is as follows:

```
📜 main.scss
📦 partials
 ┣ 📜 _accessibility.scss
 ┣ 📜 _buttons.scss
 ┣ 📜 _loader.scss
 ┣ 📜 _mixins.scss
 ┣ 📜 _vacancy-listing.scss
 ┣ 📜 _vacancy-modal.scss
 ┗ 📜 _vacancy-tiles.scss
```

Each file corresponds with a component.

## How to Build

Because SCSS does not run natively in browsers, it must be compiled into CSS. To do this you need to open a command line/terminal in the folder corresponding to the brand you wish to compile. E.g. `cd Kirklees`.

From there, you need to run `npm install` to install dependencies and then run `npm run build` to compile the SCSS into CSS.
