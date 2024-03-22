export async function initialize(getStoredParams, setStoredParams) {
    document.getElementById("svg")?.addEventListener("click", (event) => {
        if (event.target === document.getElementById("circle")) {
            setStoredParams({
                circleBorder:
                    getStoredParams().circleBorder === "red" ? "black" : "red",
            });
        }
    });
}

export async function render(params, getStoredParams) {
    const storedParams = getStoredParams();
    if (!!params.circleFill) {
        document
            .getElementById("circle")
            ?.setAttribute("fill", params.circleFill);
    }

    if (!!params.rectFill) {
        document.getElementById("rect")?.setAttribute("fill", params.rectFill);
    }

    if (!!params.triangleFill) {
        document
            .getElementById("triangle")
            ?.setAttribute("fill", params.triangleFill);
    }

    if (!!storedParams.circleBorder) {
        document
            .getElementById("circle")
            ?.setAttribute("stroke", storedParams.circleBorder);
    }
}

export async function params() {
    return [
        { key: "circleFill", type: "string" },
        { key: "rectFill", type: "string" },
        { key: "triangleFill", type: "string" },
    ];
}

export async function storedParams() {
    return [{ key: "circleBorder", type: "string" }];
}
