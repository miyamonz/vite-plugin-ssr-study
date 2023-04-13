import "./code.css";
import type { PageProps } from "./index.page.server";
import { usePageContext } from "../../renderer/usePageContext";

export function Page(pageProps: PageProps) {
  if (typeof window !== "undefined") {
    console.log(pageProps);
  }
  const context = usePageContext();
  // console.log("context", context);

  return (
    <>
      <h1>About</h1>
      <p>
        Example of using <code>vite-plugin-ssr</code>.
      </p>
      <ul>
        {pageProps.files.map((file) => (
          <li key={file}>{file}</li>
        ))}
      </ul>
    </>
  );
}
