import { render } from "../test";
import { JSDOM } from "jsdom";
import prettier from "prettier";

function prettify(html) {
    const dom = new JSDOM(html);

    const resultHtml = dom.serialize();
    return prettier.format(resultHtml, { parser: "html" });
}

describe("render", () => {
    it("should render", async () => {
        const result = await render();
        expect(await prettify(result)).toMatchSnapshot();
    });
});
