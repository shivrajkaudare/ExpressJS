const express = require("express");
const app = express(); // app is an object and express is function which returns some value.

//   console.dir(app);

// Creating Server Port
let port = 8080;

app.listen(port, () => {
  console.log("app is listening on port 8080");
});

/***************************************************************************************************************************************** */

// Handling Request on Server and sending responce.

// app.use((req, res) => {
//   console.log("Request Recived");
//   // res.send("this is a basic responce");
//   // res.send({
//   //   name: "Shivraj",
//   //   age: 23,
//   //   edu: "masters in cs",
//   let code =
//     "<h1>fruits</h1><ul><li>Mango</li><li>Greps</li><li>apple</li></ul>";
//   res.send(code);
// }); 

/***************************************************************************************************************************************** */

//  Routing
// get(), post() are the methods of sending requests.
app.get("/search", (req, res) => {
  res.send("You contacted the Search page.");
});

app.post("/home", (req, res) => {
  res.send(`you contacted home page`);
});

// if user send any false request that not present then by using * we can set default value for that all false requests.

app.post("*", (req, res) => {
  res.send(`this is wrong request...`)
});

/***************************************************************************************************************************************** */

// path Parameters

app.get("/:username/:id", (req, res) => {

  // console.log(req.params);
  // res.send("welcome to the your page")
  //or

  let {username, id} = req.params;
  res.send(`welcome to the page ${username}`);
});