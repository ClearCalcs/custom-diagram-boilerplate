import update from "./render";

render = function (params, storedParams) {
    return update(params, storedParams);
};

params = function () {
    return [
        { key: "circleFill", type: "string" },
        { key: "rectFill", type: "string" },
        { key: "triangleFill", type: "string" },
    ];
};
