import { PageContext } from "../../renderer/types";
import fs from "fs/promises";

type ExtractPageProps<T extends (...args: any[]) => any> = Awaited<
  ReturnType<T>
>["pageContext"]["pageProps"];

export type PageProps = ExtractPageProps<typeof onBeforeRender>;

export async function onBeforeRender(pageContext: PageContext) {
  //   console.log("onBeforeRender pageContext", pageContext);
  const files = await fs.readdir("./");
  const pageProps = { files };

  // We make `pageProps` available as `pageContext.pageProps`
  return {
    pageContext: {
      pageProps,
    },
  } as const;
}

// By default `pageContext` is available only on the server. But our hydrate function
// we defined earlier runs in the browser and needs `pageContext.pageProps`; we use
// `passToClient` to tell `vite-plugin-ssr` to serialize and make `pageContext.pageProps`
// available to the browser.
// export const passToClient = ["pageProps"];
