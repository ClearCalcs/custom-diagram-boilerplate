import {
    ParamsResponse,
    StoredParamsResponse,
    paramsTypes,
} from "../shared/ParamsInterface";
import update from "./render";

export const render = function (
    params: ParamsResponse,
    storedParams: StoredParamsResponse,
) {
    return update(params, storedParams);
};

export const params = function () {
    return paramsTypes;
};
