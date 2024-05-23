// Rest API's CRUD Operations using Express-

const express = require("express");
const app = express();
// creating port
let port = 8080;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

const path = require("path");
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
