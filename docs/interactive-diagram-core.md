# Interactive Diagram Core

## Core Features

### Supported

-   Automatic code compilation with minification via Parcel
-   ESM Module Imports (CJS not allowed)
-   External assets (e.g. images)
-   Test Runner

## Bundling

The interactive diagram code is the compiled html file generated from this repository via [Parcel](https://parceljs.org/).

### Included Packages

-   Typescript
-   Sass [link](https://sass-lang.com/): Css stylesheets

### Add your own packages

Add dependency to `package.json` file in the "dependencies" section.

Run `npm install`

Test Runner will hot reload to include dependency

Use ESM module imports in your file.
