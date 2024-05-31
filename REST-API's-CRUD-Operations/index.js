// Rest API's CRUD Operations using Express-

// require express package.
const express = require("express");
const app = express();

// creating port
let port = 8080;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

// path package require
const path = require("path");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index.ejs");
});
