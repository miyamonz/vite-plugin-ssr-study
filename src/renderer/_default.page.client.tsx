import { Root, createRoot, hydrateRoot } from "react-dom/client";
import { Layout } from "./Layout";
import type { PageContextClient } from "./types";
import { setPageContext } from "./usePageContext";
import { ClientCacheProvider } from "./chakra/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";

export const clientRouting = true;

let root: Root;
// This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
export async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  if (!Page)
    throw new Error(
      "Client-side render() hook expects pageContext.Page to be defined"
    );

  setPageContext(pageContext);
  const container = document.getElementById("page-view")!;
  const page = (
    <ClientCacheProvider>
      <ChakraProvider>
        <Layout>
          <Page {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ClientCacheProvider>
  );

  if (pageContext.isHydration) {
    root = hydrateRoot(container, page);
  } else {
    if (!root) root = createRoot(container);
    root.render(page);
  }
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
