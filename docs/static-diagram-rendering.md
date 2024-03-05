# Rendering

## Sheet View

### SVG as image

The SVG is rendered inside an img tag, must match the W3 spec for SVG as image _[link](https://www.w3.org/wiki/SVG_Security#SVG_as_image)_. The key implications for custom diagrams are:

-   CSS must be in style tag inside SVG.
-   No client-side javascript (e.g. no buttons, event listeners)
-   External resources (e.g. images, stylesheets) cannot be loaded. Currently ESBuild is not configured to inline assets into the compiled javascript file, although interested in developing this.

### Aspect Ratio

Very tall aspect ratios e.g. 10 x 100 will render unreasonably tall in the sheet, because the default behaviour is to stretch the SVG width to equal the ClearCalcs column width (approx 600px or half the users' monitor width), with the height stretched proportionally. Some strategies to handle rendering:

-   Fixed aspect ratio using the viewBox property on root node. e.g. `viewBox="0 0 800 600`
-   Dynamically pad wide axis if diagram height is to be exceeded
-   Shrink content if it has excessively tall aspect ratio

Practically, the height should be limited to less than or equal to 2\*width due to the print restrictions (below)

## Print View

The SVG is converted to a PNG image using the Sharp library _[link](https://sharp.pixelplumbing.com/)_. Under the hood, librsvg _[link](https://wiki.gnome.org/Projects/LibRsvg)_ is used.

### Known Unsupported Issues

-   css property `dominant-baseline`
-   css variables `var()` _[link](https://gitlab.gnome.org/GNOME/librsvg/-/issues/459)_
-   no embedded fonts _[link](https://gitlab.gnome.org/GNOME/librsvg/-/issues/153)_

This is not an exhaustive list. Search Issues in [https://github.com/lovell/sharp](https://github.com/lovell/sharp) or [https://gitlab.gnome.org/GNOME/librsvg/-/issues](https://gitlab.gnome.org/GNOME/librsvg/-/issues)

### Resolution / Aspect Ratio

Prints resolution is 800px wide with proportional height up to 1600px. When exceeding 1x2 aspect ratio, cropping will occur with bottom content cut off. This is done so content does not cause PDF rendering issues where the image cannot fit inside the A4 / Letter page.
