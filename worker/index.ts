import { Hono } from "hono";
import { serveStatic } from "hono/cloudflare-workers";
import { renderPage } from "vite-plugin-ssr/server";

const app = new Hono();

app.get("/assets/*", serveStatic({ root: "./" }));
app.get("/*", async (c) => {
  const pageContext = await renderPage({ urlOriginal: c.req.url });
  const { httpResponse } = pageContext;
  if (!httpResponse) {
    return c.text("error renderPage");
  }

  const { body, statusCode, contentType } = httpResponse;
  c.header("content-type", contentType);
  c.status(statusCode);
  return c.body(body);
});

export default app;
