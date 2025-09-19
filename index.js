import http from "http";
import fs from "fs";

const PORT = 8080;

const server = http.createServer((req, res) => {
  let page = "404.html";
  switch (req.url) {
    case "/":
      page = "index.html";
      break;

    case "/about":
      page = "about.html";
      break;

    case "/contact-me":
      page = "contact-me.html";
      break;
  }

  const status = page === "404.html" ? 400 : 200;

  fs.readFile(page, "utf-8", (err, data) => {
    if (err) throw err;
    res.writeHead(status, { "Content-Type": "text/html" });
    res.end(data);
  });
});

server.listen(PORT, () => console.log("server is running..."));
