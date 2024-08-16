const express = require("express");
const app = express();

// logger (middleware that log the information ex . morgan )
app.use((req, res, next) => {
  console.log(req.method, req.hostname, req.path);
  next();
});

let port = "8080";

app.get("/", (req, re) => {
  res.send("hello i am root");
});

app.listen(port, () => {
  console.log(`app is listing on port ${port}`);
});
