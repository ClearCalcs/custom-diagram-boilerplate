import generateErrorResponse from "./utils/generateErrorResponse";
import timeoutFunctionCall from "./utils/timeoutFunctionCall";

import * as diagramInterface from "../src/main";

const IFRAME_INTERFACE = { ...diagramInterface };
const SOURCE_ORIGIN = new URL(document.referrer).origin;

export default function start() {
    window.addEventListener(
        "message",
        async function (event) {
            // Ignore any messages that aren't from the initial source that loaded
            // the iframe.
            if (event.origin !== SOURCE_ORIGIN) return;

            try {
                const { method, data, callId } = event.data;
                if (typeof IFRAME_INTERFACE[method] !== "function") {
                    throw new ReferenceError(
                        `${method} has not been implemented. Please check method name and try again.`,
                    );
                }

                if (!callId) {
                    throw new TypeError(
                        "callId cannot be undefined. Please add callId and try again.",
                    );
                }

                try {
                    // Bind the data the method function, so we can pass into
                    // timeoutFunctionCall agnostically, without it needing to
                    // know about the function parameters.
                    const response = await timeoutFunctionCall(
                        IFRAME_INTERFACE[method].bind(null, data),
                    );
                    window.parent.postMessage(
                        { callId, response },
                        SOURCE_ORIGIN,
                    );
                } catch (callError) {
                    window.parent.postMessage(
                        {
                            ...generateErrorResponse(callError),
                            callId,
                        },
                        SOURCE_ORIGIN,
                    );
                }
            } catch (globalError) {
                // These are errors that were picked up in the setting up of the
                // request, (ie. event.data wasn't an object, or callId doesn't
                // exist)
                //
                // These errors don't have a callId at this point, so we need to
                // handle them differently.
                window.parent.postMessage(
                    generateErrorResponse(globalError),
                    SOURCE_ORIGIN,
                );
            }
        },
        false,
    );

    if (typeof IFRAME_INTERFACE["initialize"] === "function") {
        IFRAME_INTERFACE.initialize();
    }
}
