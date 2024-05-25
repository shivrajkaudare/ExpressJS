// EJS

const express = require("express");
const { request } = require("http");
const app = express();

const path = require("path");
// Creating Port
const port = 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// for accesing static file folder "public"
// app.use(express.static("public"));

app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/javascript")));
// template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // in case we start the server from outside view directory, this path code avoids errors.

app.get("/", (req, res) => {
  res.render("home"); //home.ejs // .rendor is used to send ".ejs" file.
});

/************************************************************************************************************************************/

// Interpolation Syntax- EJS Tags :

app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rollDice.ejs", { num: diceVal }); // diceVal value stored in num an that accept in rollDice.ejs file.
});

// instagram page using EJS :

app.get("/ig/:username", (req, res) => {
  const instaData = require("./data.json");
  let { username } = req.params;
  const data = instaData[username];
  if (data) {
    res.render("insta.ejs", { data });
  } else {
    res.render("error.ejs");
  }
});
