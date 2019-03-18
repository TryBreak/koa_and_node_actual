const koa = require("koa");
const app = new koa();
const koa_router = require("koa-router");
const Router = new koa_router();
const static = require("koa-static");
const path = require("path");

const staticPath = "./www";
app.use(static(path.join(__dirname, staticPath)));

Router.get("/user", async (ctx, next) => {
  ctx.body = `Hello World`;
  await next();
})
  .post("/user", async (ctx, next) => {
    ctx.body = `新增用户`;
    await next();
  })
  .put("/user/:id", async (ctx, next) => {
    ctx.body = `修改对应id的用户`;
    await next();
  })
  .del("/user/:id", async (ctx, next) => {
    ctx.body = `删除对应id的用户`;
    await next();
  });

app.use(Router.routes());

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
