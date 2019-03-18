class Router {
  constructor() {
    this._routes = [];
  }
  get(url, handler) {
    this._routes.push({
      url,
      method: "GET",
      handler
    });
  }
  routes() {
    return async (ctx, next) => {
      const { url, method } = ctx;

      const matchedRouter = this._routes.find(r => {
        return r.method === method && r.url === url;
      });

      if (matchedRouter && matchedRouter.handler) {
        await matchedRouter.handler(ctx, next);
      } else {
        ctx.body = "默认页面";
        ctx.status = 404;
        await next();
      }
    };
  }
}
module.exports = Router;
