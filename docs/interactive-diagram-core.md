# Interactive Diagram Core

## Core Features

The interactive custom diagram leverages modern developer tooling that can simplify the creation of complex diagrams with multiple files and dependencies whilst still compiling down to a html file that can be used inside of the user's browser. Much of this is enabled via the [Parcel](https://parceljs.org/) bundler. Features include:

-   Code compilation and minification
-   Asset importing e.g. images
-   Bundling dependencies
-   ESM Module Imports
-   Sass [link](https://sass-lang.com/): Css stylesheets
-   Support for Typescript
-   Transpilation for older browser versions (i.e. last 2 years) - should not be changed
-   Test Runner with hot reloading

## Bundling

On running `npm run compile`, [Parcel](https://parceljs.org/) generates a html file that compiles your code along with all bundled dependencies.

Add dependency to `package.json` file in the "dependencies" section.

```
npm install
```

Test Runner will hot reload to include dependency
