const express = require("express");
const app = express();

const ExpressError = require("./ExpressError");

// middleware that handle error.

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new ExpressError(401, "ACCESS DENIED");
};

// route who returns the data
app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

// default error message.
app.use((err, req, res, next) => {
  let { status, message } = err;
  res.status(status).send(message);
});

let port = 8080;

app.listen(port, () => {
  console.log(`app is listing on port ${port}`);
});
