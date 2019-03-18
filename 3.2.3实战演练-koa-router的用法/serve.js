const koa = require("koa");
const app = new koa();
const router = require("./router");
const Router = new router();

Router.get("/404", async (ctx, next) => {
  ctx.body = "Page not found , 页面找不到了";
  ctx.status = 404;
  await next();
});

app.use(Router.routes());

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
