// Rest API's CRUD Operations using Express-

// require express package.
const express = require("express");
const app = express();

// creating port
let port = 8080;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

// path require
const path = require("path");
// view folder
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
