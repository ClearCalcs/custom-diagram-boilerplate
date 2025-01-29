import { runInSandbox, UserError } from "./sandbox.js";
import * as fs from "fs";

export const params = withErrorHandling(async () => {
    const userCode = fs.readFileSync("output/compiled.js", {
        encoding: "utf8",
        flag: "r",
    });

    return runInSandbox({
        userCode,
        resultCode: "return params()",
        params: [],
    });
});

export const render = withErrorHandling(async ({ params }) => {
    const userCode = fs.readFileSync("output/compiled.js", {
        encoding: "utf8",
        flag: "r",
    });
    let storedParams, diagramType, inParams;
    try {
        ({ storedParams, diagramType, ...inParams } = params);
    } catch (e) {
        // User has called render with no params or not with an object
        // We will pass down the original params and handle error in user code
    }

    return runInSandbox({
        userCode,
        resultCode: "return render($0,$1,$2)",
        params: inParams
            ? [inParams, storedParams, diagramType]
            : [params, {}, diagramType],
    });
});

// Wrap result in object with {success: false/true}
function withErrorHandling(fn) {
    return async (...args) => {
        try {
            const result = await fn(...args);

            return {
                success: true,
                result,
            };
        } catch (ex) {
            if (ex instanceof UserError) {
                return {
                    success: false,
                    error: {
                        message: ex.message,
                        stack: ex.userStack,
                    },
                };
            } else {
                throw ex;
            }
        }
    };
}
