import { ParamsResponse, paramsTypes } from "../shared/ParamsInterface";
import update from "./render";

export async function initialize(getStoredParams, setStoredParams) {
    // EXAMPLE (USER INTERACTION)
    /*
    document.getElementById("svg")?.addEventListener("click", (event) => {
        if (event.target === document.getElementById("circle")) {
            setStoredParams({
                circleBorder:
                    getStoredParams().circleBorder === "red" ? "black" : "red",
            });
        }
    });
    */
}

export async function render(
    params: ParamsResponse,
    getStoredParams,
    diagramType?: string,
) {
    return update(params, getStoredParams);

    // // EXAMPLE (Multiple diagram types)
    // switch (diagramType) {
    //     case "type1":
    //         return update(params, getStoredParams);
    //     default:
    //         return null;
    // }
}

export async function params() {
    return paramsTypes;

    // // EXAMPLE (Multiple diagram types)
    // return { type1: paramsTypes };
}

export async function storedParams() {
    return [
        // // EXAMPLE (USER INTERACTION)
        // { key: "circleBorder", type: "string" }
    ];

    // // EXAMPLE (Multiple diagram types)
    // return { type1: [{ key: "circleBorder", type: "string" }] };
}
