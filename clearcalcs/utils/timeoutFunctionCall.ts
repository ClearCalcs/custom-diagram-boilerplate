// If the function passed in is bound using `.bind()`, the
// function name comes back as `bound name` which isn't
// helpful to the user, so let's tidy it up so the error
// message makes more sense.
function friendlyFnName(functionName: string) {
    if (functionName.startsWith("bound")) {
        return functionName.slice(6);
    } else {
        return functionName;
    }
}

export default async function timeoutFunctionCall(
    fn: Function,
    delay: number = 5000,
) {
    const promise = new Promise(async function (resolve, reject) {
        const timeout = setTimeout(function () {
            reject(
                new ReferenceError(
                    `${friendlyFnName(
                        fn.name,
                    )} timed out after ${delay}ms. Please check your method and try again.`,
                ),
            );
        }, delay);
        const response = await fn();
        clearTimeout(timeout);
        resolve(response);
    });

    return promise;
}
