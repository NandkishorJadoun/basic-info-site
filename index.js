import http from "http";
import fs from "fs";

const PORT = 8080;

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        fs.readFile("index.html", "utf-8", (err, data) => {
          if (err) throw err;
          res.write(data);
          res.end();
        });
        break;

      case "/about":
        fs.readFile("about.html", "utf-8", (err, data) => {
          if (err) throw err;
          res.write(data);
          res.end();
        });
        break;

      case "/contact-me":
        fs.readFile("contact-me.html", "utf-8", (err, data) => {
          if (err) throw err;
          res.write(data);
          res.end();
        });
        break;

      default:
        fs.readFile("404.html", "utf-8", (err, data) => {
          if (err) throw err;
          res.write(data);
          res.end();
        });
    }
  })
  .listen(PORT, () => console.log("server is running"));
