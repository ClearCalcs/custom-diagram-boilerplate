# Interactive Diagram Core

## Execution Lifecycle

TODO: Update execution lifecycle to include user interaction. Explain no DOM manipulation due to user interaction, await next render.

Each interactive diagram has an execution lifecycle that is hidden away from the diagram creator. When a user navigates to a sheet with a custom diagram, the three phases begin with loading, initializing, then rendering.

1. **loading**: HTML/CSS loaded and Javascript executed (imported dependencies, top-level code)
2. **initializing**: [initialize()](https://github.com/ClearCalcs/custom-diagram-boilerplate/blob/main/src/interface.ts#L1) executed, await return/resolve. TODO: Set up event listeners
3. **rendering**: [render(params)](https://github.com/ClearCalcs/custom-diagram-boilerplate/blob/main/src/interface.ts#L3) executed every time user changes params from sheet.
4. **user interaction**: `setStoreParams()`
5. **re-rendering**: with result of above interaction

## User Interaction Mental Model

TODO:

Calling `setStoredParams` can be likened to calling an `onChange` event on an text input field and saving its value to a database. It should be treated as a callback only triggered on a user interaction.

Therefore it should not be called on any other event, whether it is a render call with new `params` or on initialization. If a user hasn't touched something on the diagram, the `setStoredParams` should not be called.

## Stale data handling

As the `storedParams` is saved to the ClearCalcs database, it may no longer reflect the state of the diagram and all its `params` at the last render, especially if a user has changed upstream params.

For example, if the `storedParams` toggles items in an array as "on" or "off" but the length of the array is determined by `params`, then the lengths may mismatch, and the diagram must be able to handle the missing or excess length array.

Any scripts, DOM elements or event listeners set up at the top-level of files, or inside of the `initialize` and `render` functions are maintained until the user navigates away from the sheet.

?> Invocations of `render` where async code is used should be done with caution. Multiple `render` invocations may occur in quick succession without waiting for the previous one to complete. Any DOM manipulations that occur after asynchronous code (e.g. network request) may be completed out of order.

## Developer tooling

The interactive custom diagram leverages modern developer tooling that can simplify the creation of complex diagrams with multiple files and dependencies whilst still compiling down to a html file that can be used inside of the user's browser. Much of this is enabled via the [Parcel](https://parceljs.org/) bundler. Features include:

-   Code compilation and minification
-   Asset importing e.g. images
-   Bundling dependencies
-   ESM Module Imports
-   Sass [link](https://sass-lang.com/): CSS stylesheets
-   Support for Typescript
-   Transpilation for older browser versions (i.e. last 2 years) - should not be changed
-   Test Runner with hot reloading

## Bundling

Add note about clearing `.parcel-cache` if stale cache issues

On running `npm run-script compile`, [Parcel](https://parceljs.org/) generates a html file that compiles your code along with all bundled dependencies.

Add dependency to `package.json` file in the "dependencies" section.

```
npm install
```

Test Runner will hot reload to include dependency
