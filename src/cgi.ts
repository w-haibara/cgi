import type { Context } from "hono";

export function Exec(ctx: Context, target: string, params: string): string {
  const headers = headersJsonString(ctx);
  console.log(
    "target: " + target + ", params: " + params + ", headers: " + headers
  );

  throw new Error("Unknown target: " + target);
}

function headersJsonString(ctx: Context): string {
  const headers: Record<string, string> = {};
  ctx.req.raw.headers.forEach((value, name) => {
    headers[name] = value;
  });
  return JSON.stringify(headers);
}
