var http = require("http");
var fs = require("fs");
var path = require("path");

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    fs.readFile("./public/index.html", "UTF-8", function (err, html) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
    });
  } else if (req.url === "/details") {
    fs.readFile("./public/details.html", "UTF-8", function (err, html) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
    });
  } else if (req.url === "/about") {
    fs.readFile("./public/about.html", "UTF-8", function (err, html) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
    });
  } else if (req.url.match(".css$")) {
    var cssPath = path.join(__dirname, "public", req.url);
    var fileStream = fs.createReadStream(cssPath, "UTF-8");
    res.writeHead(200, { "Content-Type": "text/css" });
    fileStream.pipe(res);
  } else if (req.url.match(".js$")) {
    var jsPath = path.join(__dirname, "public", req.url);
    var fileStream = fs.createReadStream(jsPath);
    res.writeHead(200, { "Content-Type": "text/javascript" });
    fileStream.pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("success");
});
console.log("success");
