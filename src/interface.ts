export async function initialize(outParams, sendParams) {
    document.getElementById("svg")?.addEventListener("click", (event) => {
        if (event.target === document.getElementById("circle")) {
            sendParams({
                circleBorder:
                    outParams.circleBorder === "red" ? "black" : "red",
            });
        }
    });
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

    if (!!params.circleBorder) {
        document
            .getElementById("circle")
            ?.setAttribute("stroke", params.circleBorder);
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
