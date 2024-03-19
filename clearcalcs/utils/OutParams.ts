const SOURCE_ORIGIN =
    window.parent === window
        ? window.origin
        : new URL(document.referrer).origin;

class OutParams {
    _outParams;
    constructor(outParams) {
        this._outParams = outParams;
    }

    get params() {
        return this._outParams;
    }

    // This function should not be used by the diagram creator
    // It is run automatically when render is called
    setParams = (newParams) => {
        for (const key in newParams) {
            if (
                // Render message response will include an object containing
                // both params and outParams, whereas only outParams will be set.
                Object.prototype.hasOwnProperty.call(this._outParams, key) &&
                Object.prototype.hasOwnProperty.call(newParams, key)
            ) {
                this._outParams[key] = newParams[key];
            }
        }
    };

    // Diagram creator use
    sendParams = (newParams) => {
        for (const key in newParams) {
            if (!Object.prototype.hasOwnProperty.call(this._outParams, key)) {
                throw new Error(`Invalid parameter key ${key}`);
            }
        }
        window.parent.postMessage(
            {
                callId: "data",
                response: {
                    value: {
                        ...this._outParams,
                        ...newParams,
                    },
                },
            },
            SOURCE_ORIGIN,
        );
    };
}

export default OutParams;
