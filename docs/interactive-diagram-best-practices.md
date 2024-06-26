# Interactive Diagram Best Practices

## User Interaction Listeners

### Introduction

Users may interact with the diagram with the intention of modifying one or more of the `storedParams` values. An example is a solar panel grid where each panel may be added/removed via a mouse click, see [Quick Start Guide: Adding Interaction](/quick-start-guide?id=adding-interaction "Adding Interaction").

Event Listeners should be set up in the `initialize` function, which behaves similar to a [load_event](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event). Consider following best practices:

-   Attach listeners to DOM elements that are static i.e. always persist in DOM.
-   Removing event listeners is not necessary if attached to persistent DOM elements.
-   Use `event.target` to capture events from dynamically added / removed elements on `render`.
-   Do not add listeners for:
    -   `mousemove`/`mouseover`: These may fire rapidly. This will cause poor performance, particularly where `storedParams` are modified on each event. Consider css only approaches.
    -   `scroll`/`scrollend`/`auxclick`: these are utilised by ClearCalcs [Zoom](/global-capabilities?id=zoom-amp-pan).
    -   `keydown`/`keyup` e.g. `Escape` are utilised by ClearCalcs [Lightbox](/global-capabilities?id=lightbox)
    -   `focus`/`blur`: Consider css only approach
    -   `load`: Since the `initialize` function runs on load it performs the same role.

### Examples

#### 1. Single DOM element

[src/interactive/interface.ts](https://github.com/ClearCalcs/custom-diagram-boilerplate/blob/main/src/interactive/interface.ts#L7)

```javascript
export async function initialize(getStoredParams, setStoredParams) {
    document.getElementById("svg")?.addEventListener("click", (event) => {
        if (event.target === document.getElementById("circle")) {
            // Do something
        }
    });
}
```

#### 2. Multiple DOM elements

We can register an event on click of the wrapping [group tag](https://github.com/ClearCalcs/custom-diagram-boilerplate/blob/main/examples/toggle-panels/interactive/main.html#L10). All child panels can then be selected by a common property such as a class name, and checked against the click target.

[examples/toggle-panels/interactive/interface.ts](https://github.com/ClearCalcs/custom-diagram-boilerplate/blob/main/examples/toggle-panels/interactive/interface.ts).

```javascript
export async function initialize(getStoredParams, setStoredParams) {
    document.getElementById("group")?.addEventListener("click", (event) => {
        const elements = document.getElementsByClassName("panel");
        if (Array.from(elements).includes(event.target as Element)) {
            // Do something
        }
    });
}
```

To run the above example, run the following command and upload the `output/index.html`:

```
EXAMPLE=toggle-panels npm run compile-interactive-example
```

