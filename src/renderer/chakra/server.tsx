// entry.server.tsx
import { ReactNode } from "react";
import { renderToString } from "react-dom/server";
import { CacheProvider } from "@emotion/react";

import { ServerStyleContext } from "./context";
import createEmotionCache from "./createEmotionCache";
import { createEmotionServer } from "./createEmotionServer";

export default function renderWithChakra(children: ReactNode) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  const html = renderToString(
    <ServerStyleContext.Provider value={null}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ServerStyleContext.Provider>
  );

  const chunks = extractCriticalToChunks(html);

  const markup = renderToString(
    <ServerStyleContext.Provider value={chunks.styles}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ServerStyleContext.Provider>
  );
  return markup;
}
