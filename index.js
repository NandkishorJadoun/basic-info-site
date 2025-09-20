const express = require("express");
const app = express();
const path = require("path");

const options = { root: path.join(__dirname) };

app.get("/", (req, res) => res.sendFile("index.html", options));

app.get("/about", (req, res) => res.sendFile("about.html", options));

app.get("/contact-me", (req, res) => res.sendFile("contact-me.html", options));

app.get("/:name", (req, res) => res.status(400).sendFile("404.html", options));

const PORT = 8080;

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`server is running on port ${PORT}`);
});
