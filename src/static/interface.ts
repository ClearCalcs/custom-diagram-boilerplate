import {
    ParamsResponse,
    StoredParamsResponse,
    paramsTypes,
} from "../shared/ParamsInterface";
import update from "./render";

export function render(
    params: ParamsResponse,
    storedParams: StoredParamsResponse,
    diagramType?: string,
) {
    return update(params, storedParams);

    // // EXAMPLE (Multiple diagram types)
    // switch (diagramType) {
    //     case "type1":
    //         return update(params, storedParams);
    //     default:
    //         return null;
    // }
}

export function params() {
    return paramsTypes;

    // // EXAMPLE (Multiple diagram types)
    // return { type1: paramsTypes };
}
