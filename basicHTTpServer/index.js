const http = require("http");
const { runInNewContext } = require("vm");
const port = 8000;

const fs = require("fs");

const requestHandler = (req, res) => {
  console.log(req.url);

  res.writeHead(200, { "content-type": "text/html" });

  let filepath;
  switch (req.url) {
    case "/":
      filepath = "./index.html";
      break;
    case "/about":
      filepath = "./profile.html";
      break;
    default:
      filepath = "./404.html";
  }

  fs.readFile(filepath, (err, data) => {
    if (err) {
      console.log(err);
      return res.end("<h1>Error</h1>");
    }
    return res.end(data);
  });
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("server is running at port:" + port);
});
