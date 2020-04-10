import {JSDOM} from "jsdom";
import localStorage from "local-storage";
const dom = new JSDOM(`<!DOCTYPE html><html lang="en"><head></head><body></body></html>`);

global.window = dom.window;
global.document = dom.window.document;

global.navigator = {
    userAgent: "node.js",
    javaEnabled:()=>true
};

global.localStorage = localStorage;