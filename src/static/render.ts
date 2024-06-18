import { createSVGWindow } from "svgdom";
import { SVG, registerWindow } from "@svgdotjs/svg.js";
import main_html from "./main.html";
import logo_svg from "./assets/clearcalcs.svg";

const windowObj = createSVGWindow();
const documentObj = windowObj.document;

registerWindow(windowObj, documentObj);

const CANVAS = SVG(documentObj.documentElement as SVGSVGElement);

CANVAS.viewbox("0 0 500 300");
CANVAS.svg(main_html);

const logo_node = SVG();
logo_node.svg(logo_svg);

const SVG_ROOT = documentObj.querySelector("svg");

type Params = {
    circleFill: string;
    rectFill: string;
    triangleFill: string;
};

type StoredParams = {
    circleBorder: string;
};

const defaultParams: Params = {
    circleFill: "red",
    rectFill: "blue",
    triangleFill: "green",
};

export default function update(params?: Params, storedParams?: StoredParams) {
    const { circleFill, rectFill, triangleFill } = params || defaultParams;
    SVG_ROOT!.querySelector("#circle")?.setAttribute("fill", circleFill);

    SVG_ROOT!.querySelector("#rect")?.setAttribute("fill", rectFill);

    SVG_ROOT!.querySelector("#triangle")?.setAttribute("fill", triangleFill);
    SVG_ROOT!.querySelector("#clearcalcs-logo")?.appendChild(logo_node.node);
    // // EXAMPLE (FROM USER INTERACTION)
    // if (!!storedParams?.circleBorder) {
    //     SVG_ROOT!.querySelector("#circle")?.setAttribute("stroke", storedParams.circleBorder);
    // }
    return CANVAS.svg();
}
