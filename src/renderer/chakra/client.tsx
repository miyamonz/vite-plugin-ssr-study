// entry.client.tsx
import React, { useState } from "react";
import { CacheProvider } from "@emotion/react";

import { ClientStyleContext } from "./context";
import createEmotionCache, { defaultCache } from "./createEmotionCache";

interface ClientCacheProviderProps {
  children: React.ReactNode;
}

export function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(defaultCache);

  function reset() {
    setCache(createEmotionCache());
  }

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}
