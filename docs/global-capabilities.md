# Global Capabilities

The Custom Diagram engine has several time saving features that will be directly built into both interactive as well as static diagrams to give you more out of the box capability e.g. Zoom, panning, lightbox. These powerful time savers can be toggled on or off, and do not need to be custom-built.

## Zoom & Pan

Zoom in or pan around any part of the diagram. Diagrams should be developed to scale effectively to larger viewports to take full advantage of this upcoming feature.

![Under construction](_media/under_construction_icon.svg ":size=50")
This feature is still in development.

### Provided Controls

TODO:

-   Zoom In, Out, Back to 100%
-   Do not block any part of diagram

### Limitations

TODO:

-   Implemented via scaling, viewport remains small.
-   font size resizing on zoom not available
-   Max & Min zoom levels
-   Zoom and large paddings
-   Mouse / Keyboard support

## Lightbox

The diagram is rendered in a larger window on the user's browser where toggled by the user. Diagrams should be developed to scale effectively to larger viewports i.e. do not use fixed `height` `width` properties on the SVG.

![Under construction](_media/under_construction_icon.svg ":size=50")
This feature is still in development.

### Viewport Best practices

TODO:

Viewport is resized to the lightbox container. Typical screen resolutions xx to xx.

-   fonts and line-widths should be designed to scale to the full screen resolution. Best practices tbd
-   Zoom is also possible in full screen
