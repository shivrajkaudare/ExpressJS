// EJS

const express = require("express");
const app = express();

const path = require("path");

const port = 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.set("views", path.join(__dirname, "/views")); // in case we start the server from outside view directory, this path code avoids errors.

// template engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home"); //home.ejs // .rendor is used to send ".ejs" file.
});

/**********************************************************************************/

// Interpolation Syntax- EJS Tags :

app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rollDice.ejs", { num: diceVal }); // diceVal value stored in num an that accept in rollDice.ejs file.
});

// use of conditional statements in EJS :

app.get("/ig/:username", (req, res) => {
  let followers = ["shiv", "nik", "deep", "Payal"];
  let { username } = req.params;
  res.render("insta.ejs", { username, followers });
});
