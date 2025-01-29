import { writeFile } from "node:fs/promises";
import { render as renderInternal, params as paramsInternal } from "./index.js";

// EDIT YOUR PARAMS HERE
const inputParams = {};

// EDIT YOUR STORED PARAMS HERE
const storedParams = {};

export async function render() {
    const response = await renderInternal({
        params: { ...inputParams, storedParams },
    });

    if (!response.success || !response.result) {
        // TODO: We do send back errors into the browser
        // Look at what the index.js returns and you can capture these
        console.log(response?.error?.message);
        throw new Error(`Failed to render`);
    }

    await writeFile("out/diagram.svg", response.result);
    console.log("Successfully written svg");
}

export async function params() {
    const response = await paramsInternal();

    if (!response.success || !response.result) {
        // TODO: We do send back errors into the browser
        // Look at what the index.js returns and you can capture these
        throw new Error("Failed to render");
    }

    await writeFile("out/params.json", JSON.stringify(response.result));
    console.log("Params", response.result);
}
