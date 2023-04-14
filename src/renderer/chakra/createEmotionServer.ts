import _createEmotionServer from "@emotion/server/create-instance";

let createEmotionServer = _createEmotionServer;
// @ts-ignore
const d = createEmotionServer.default;
if (typeof d !== "undefined") createEmotionServer = d;

export { createEmotionServer };
