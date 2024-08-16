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
