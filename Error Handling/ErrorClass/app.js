const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// Creating a admin Route and it sending an error with a 403 status code.  

let port = 8080;

app.listen(port, () => {
  console.log(`app is listing on port ${port}`);
});
