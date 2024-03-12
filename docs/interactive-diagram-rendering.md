# Interactive Diagram Rendering

## Iframe sandbox

Custom diagram should be restricted to use features available inside the `<iframe>` sandbox it is rendered in. This sandbox has following allowances `sandbox="allow-scripts allow-same-origin"`

For specific browser restrictions, see [Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#sandbox), which include but are not limited to:

-   no downloads
-   no form submission
-   no modals e.g. `window.alert`
-   no popups e.g. `<a target="_blank">`. User should use middle-button to open link in new tab
