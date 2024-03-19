export async function initialize(outParams, sendParams) {
    /*
    Example use:
    document.getElementById("svg")?.addEventListener("message", (event) => {
        sendParams({ circleBorder: "black" });
    });
    */
}

export async function render(params) {
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
}

export async function params() {
    return [
        { key: "circleFill", type: "string" },
        { key: "rectFill", type: "string" },
        { key: "triangleFill", type: "string" },
    ];
}

export async function outParams() {
    return [{ key: "circleBorder", type: "string" }];
}
