import pkg from "isolated-vm";
const { Isolate } = pkg;

const MEMORY_LIMIT_MB = 256;
// Current svgdom bundle is large and slow, so we need to give it more time to solve
// TODO: Reduce once performance improved
const TIMEOUT_MS = 2000;

export class UserError extends Error {
    userStack = [];
}

export function runInSandbox({ userCode, resultCode, params }) {
    const isolate = new Isolate({ memoryLimit: MEMORY_LIMIT_MB });
    const context = isolate.createContextSync();
    const jail = context.global;
    jail.setSync("global", jail.derefInto());
    // Example of exposing a custom function on the context's global:
    /*
    jail.setSync("log", function (...args) {
        console.log(...args);
    });
    */

    // Evaluate untrusted user code in isolated context
    try {
        context.evalSync(userCode, {
            timeout: TIMEOUT_MS,
            filename: "user.js",
        });

        return context.evalClosureSync(resultCode, params, {
            timeout: TIMEOUT_MS,
            arguments: { copy: true },
            result: { copy: true },
        });
    } catch (ex) {
        throw handleUserError(ex);
    }
}

function handleUserError(ex) {
    const userError = new UserError(`${ex.name}: ${ex.message}`);
    if (ex.stack) {
        userError.userStack = ex.stack.split("\n").filter((line) => line.match(/^    at .*user\.js/));
    }
    return userError;
}
