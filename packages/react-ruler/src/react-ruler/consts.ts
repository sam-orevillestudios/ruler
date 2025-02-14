import { RulerInterface, RulerProps } from "./types";

export var PROPERTIES: Array<keyof RulerProps> = [
    "type",
    "width",
    "height",
    "unit",
    "zoom",
    "direction",
    "textAlign",
    "font",
    "segment",
    "mainLineSize",
    "longLineSize",
    "shortLineSize",
    "lineOffset",
    "textOffset",
    "negativeRuler",
    "range",
    "scrollPos",
    "style",
    "backgroundColor",
    "rangeBackgroundColor",
    "lineColor",
    "textColor",
    "textBackgroundColor",
    "textFormat",
];
export const METHODS: Array<keyof RulerInterface> = [
    "scroll", "resize",
];
