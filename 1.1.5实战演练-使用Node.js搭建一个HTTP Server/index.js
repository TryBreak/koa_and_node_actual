const http = require("http");
const path = require("path");
const url = require("url");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 8080;

//构建 HTTP server
const server = http.createServer((req, res) => {
  //res = response  响应;
  //req = request  请求;
  let pathname = url.parse(req.url).pathname; // 获取path
  let extname = path.extname(pathname); //获取扩展名
  if (pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(fs.readFileSync(path.join(__dirname, pathname, "index.html")));
  } else if (extname === ".PNG" || extname === ".JPG") {
    res.writeHead(200, { "Content-Type": "image/" + extname.substr(1) });
    res.end(fs.readFileSync(path.join(__dirname, pathname)));
  } else {
    res.statusCode = 404;
    res.end("404");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
