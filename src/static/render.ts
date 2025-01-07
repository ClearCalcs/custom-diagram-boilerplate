import { createSVGWindow } from "svgdom";
import main_html from "./main.html";
import logo_svg from "./assets/clearcalcs.svg";
import {
    ParamsResponse,
    StoredParamsResponse,
} from "../shared/ParamsInterface";

// returns a window with a document and an svg root node (documentElement)
const window = createSVGWindow();
const svg = window.document.documentElement as SVGSVGElement;
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svg.setAttribute("version", "1.1");
svg.setAttribute("viewBox", "0 0 500 300");

svg.innerHTML = main_html;

const defaultParams: ParamsResponse = {
    circleFill: "red",
    rectFill: "blue",
    triangleFill: "green",
};

export default function update(
    params?: ParamsResponse,
    storedParams?: StoredParamsResponse,
) {
    const { circleFill, rectFill, triangleFill } = params || defaultParams;
    svg.querySelector("#circle")?.setAttribute("fill", circleFill);

    svg.querySelector("#rect")?.setAttribute("fill", rectFill);

    svg.querySelector("#triangle")?.setAttribute("fill", triangleFill);
    svg.querySelector("#clearcalcs-logo")!.innerHTML = logo_svg;
    // // EXAMPLE (FROM USER INTERACTION)
    // if (!!storedParams?.circleBorder) {
    //     svg.querySelector("#circle")?.setAttribute("stroke", storedParams.circleBorder);
    // }
    return svg.outerHTML;
}
