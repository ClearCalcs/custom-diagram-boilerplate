import {
    ParamsResponse,
    StoredParamsResponse,
    paramsTypes,
} from "../shared/ParamsInterface";

export default function update(
    params: ParamsResponse,
    getStoredParams: () => StoredParamsResponse,
) {
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

    // // EXAMPLE (USER INTERACTION)
    // if (!!storedParams.circleBorder) {
    //     document
    //         .getElementById("circle")
    //         ?.setAttribute("stroke", storedParams.circleBorder);
    // }
}
