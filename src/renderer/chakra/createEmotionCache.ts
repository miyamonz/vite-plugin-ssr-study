// createEmotionCache.ts
import _cache from "@emotion/cache";
let cache = _cache;
//@ts-ignore
if (typeof cache.default !== "undefined") cache = cache.default;

export const defaultCache = createEmotionCache();
export default function createEmotionCache() {
  return cache({ key: "cha" });
}
