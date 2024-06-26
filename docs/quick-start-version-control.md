# Version Control

Development of public-facing diagrams should follow branch-based development following GitHub Flow (_[link](https://docs.github.com/en/get-started/using-github/github-flow)_).

Once the branch has been merged into `main`, a release of relevant file changes should be made.

## Semantic versioning

Create a tag (_[link](https://git-scm.com/book/en/v2/Git-Basics-Tagging)_) following semantic versioning (_[link](https://semver.org/)_):

### Pre-release / Beta Calculator - < v1.0.0

A diagram that is still not ready for use in a public-facing calculator should be tagged with `v0.x.x`, where api breakages are not classed as MAJOR versions.

If the diagram is used in a public-facing but beta calculator [link](https://clearcalcs.com/support/faqs/what-is-a-beta-template), it may also be tagged with `v0.x.x`.

### 1. MAJOR version when you make incompatible API changes.

-   added/removed keys inside `params` or `storedParams` e.g. a new param to toggle visibility of elements.
-   modified expected types e.g 1D array param now expects 2D array
-   major user interaction modifications. e.g. click to select vs drag to select elements in diagram

### 2. MINOR version when you add functionality in a backward compatible manner e.g.

-   rendering improvements e.g. dimension lines are improved for clarity
-   minor user interaction improvements e.g. no major changes to UX flow required.

### 3. PATCH version when you make backward compatible bug fixes

-   bug fix (no additional rendering features)

### 4. Additional labels for pre-release

-   Diagram used only in a `beta` template.
