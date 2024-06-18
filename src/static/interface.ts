import {
    ParamsResponse,
    StoredParamsResponse,
    paramsTypes,
} from "../shared/ParamsInterface";
import update from "./render";

render = function (params: ParamsResponse, storedParams: StoredParamsResponse) {
    return update(params, storedParams);
};

params = function () {
    return paramsTypes;
};
