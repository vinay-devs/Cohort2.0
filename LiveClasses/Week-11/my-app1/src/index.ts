import { Context, Hono, Next } from "hono";

const app = new Hono();

function middleware(c: Context, next: Next) {
  if (c.req.header.name) {
    console.log("HEY");
    next();
  }
}

app.get("/app", middleware, (c) => {
  return c.text("Hello Hono!");
});

export default app;
