import { TimelineDefinition } from "motion";

export const openingSequence: TimelineDefinition = [
    [".button__text", { display: "none", scaleY: [1, 0] }],
    [
        ".button",
        { maxWidth: ["45px", "120px"], justifyContent: "flex-end" },
        { duration: 0.3 },
    ],
    [
        ".button",
        { scale: [1, 1.2, 1] },
        { duration: 0.4, at: "+0.3", easing: "ease-in" },
    ],
    [".button__text", { display: "block", scaleY: [0, 1] }],
];

export const closingSequence: TimelineDefinition = [
    [".button__text", { display: "none", scaleY: [1, 0] }],
    [
        ".button",
        { maxWidth: ["120px", "45px"], justifyContent: "flex-end" }
    ],
];

export const closingOptions = {
    duration: 0.3
}
