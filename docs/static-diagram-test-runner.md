# Using Test Runner

## Introduction

The Test Runner allows visualisation of the custom static diagram and how it responds to each function that is user implemented such as `render`, `params`. It enables quick, iterative development of the custom diagram in an environment that mimics the ClearCalcs app for maximum compatibility when it is deployed in a real calculator.

It allows this compatibility by running the diagram code within a fake Dockerfile that has the same capabilities and restrictions. The following diagram functionality may be tested:

### Supported Features

-   renders SVG with parameters
-   returns params

## Set up

1. Install Docker https://www.docker.com/get-started/

2. [Optional] Add params to `test/test.js`

```javascript
const inputParams = {
    circleFill: "red",
    rectFill: "blue",
};
const storedParams = {...}
```

3. Run Test Render and view output

```bash
npm run test-render
cd test/out
# Open diagram.svg
```

4. Run Test Params and view output

```bash
npm run test-params
# stdout
Params [
  { key: 'circleFill', type: 'string' },
  { key: 'rectFill', type: 'string' },
  { key: 'triangleFill', type: 'string' }
]
# Or go to test/out/params.json
```
