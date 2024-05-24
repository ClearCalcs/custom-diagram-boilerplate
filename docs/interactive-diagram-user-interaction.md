# Interactive Diagram User Interaction

## Handling user interaction Interfaces

### `storedParams()` interface. Setting shape for stored params.

TODO

### `getStoredParams()` Referencing Existing stored params using

TODO

### `setStoredParams()` Updating stored params based on previous results

TODO

## Event Handling

### How to event listeners

#### Best Practices

TODO:

-   connect to persistent elements
-   access storedParams
-   Only update in response to user interaction, not timers or change in render params
-   Consider performance impact of any event handlers
-   Consider clashes with other mouse / keyboard interactions like zoom / pan.

### Managing interaction and loading states

TODO:

-   Active and hover states
-   Render called with delay after setStoredParams
-   If the interaction has changed the DOM, do you persist until the next render.
-   Ensure transition and hover states applied via CSS where possible to reduce performance impact on the site

### Managing state

#### Best practices

TODO:

-   Accessing storedParams via getStoredParams
-   Getting state in DOM
-   Storing variables in module scope
-   No guarantee of local state. e.g. collapsing sections resets iframes.
