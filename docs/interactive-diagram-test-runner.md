# Using Test Runner

## Introduction

The Test Runner allows visualizing the custom interactive diagram and how it responds to each function that is user implemented such as `render`, `initialize`, `params` and `dimensions`. It enables quick, iterative development of the custom diagram in an environment that mimics the ClearCalcs app for maximum compatibility when it is deployed in a real calculator.

It allows this compatibility by running the diagram code within a fake ClearCalcs app that has the same capabilities and restrictions. It can be used to test the diagram is:

-   initial visual state.
-   visual state after render.
-   expected parameters
-   reported dimensions
-   error responses

![Screenshot of the Test Runner](_media/quick-start-guide/testing-server.png)

## Set up

For setting up the test runner, see Quick start guide [Starting the Test Runner](/quick-start-guide?id=starting-the-test-runner)

The web page needs to be refreshed every time the code changes.

?> When setting up the test runner, 2 web servers are launched.
`npm start` serves the custom diagram code, uncompiled. `npm run test` launches the fake ClearCalcs app which renders the custom diagram in an iframe, and initiates communication with it.

## Function Calls

| Method     | Data        | Output                                  |
| ---------- | ----------- | --------------------------------------- |
| dimensions | -           | JSON containing:<br>`width`<br>`height` |
| initialize | -           | returned value                          |
| render     | JSON object | returned value                          |
| params     | -           | JSON containing params                  |

-   Where an error or timeout occurs, the output value will display the error message instead.
-   Where a Promise is returned, output is delayed until it resolves

### Dimensions

The interactive diagram is displayed without overflow in the ClearCalcs app. Since iframes do not resize automatically based on their vertical content height, a special internal message `dimensions` is sent from the diagram to ClearCalcs whenever the `document.body` => `border-box` changes size. This message is then used to allocate the correct amount of space in ClearCalcs.

Typically this should just work, however, where issues are occurring with too much padding or cut-off content, this method can be called to verify what the `dimensions` is actually returning.

Example:

```js
// Received `dimensions` call (...), with:-
{
    "width": 800,
    "height": 387
}
```

### Initialize

This function will be run once automatically on starting the test runner, however, it can be triggered manually if you want to test its affect on the diagram.

### Render

This will be the most commonly called method to regenerate the diagram according to the input parameters.

The data should be written in JSON format with each parameter expected, for example:

```js
// Received `render` call (...), with:-
{
    circleFill: "red",
    rectFill: "green",
    triangleFill: "yellow",
}
```

### Params

The return value of the params method is outputted.
