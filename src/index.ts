import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { Exec } from "./cgi";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.post("/cgi/:target", async (c) => {
  const target = c.req.param("target");
  const params = await c.req.text();

  try {
    const res = Exec(target, params);

    return c.text(res);
  } catch {
    throw new HTTPException(500);
  }
});

export default app;
