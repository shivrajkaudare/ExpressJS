// require express package
const express = require("express");
const app = express();

// method-override package- using query override.
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// require UUID package used for creating unique ids
const { v4: uuidv4 } = require("uuid");

const path = require("path");
// view engine
app.set("view engine", "ejs");
// accesing ejs file from directory views
app.set("views", path.join(__dirname, "views"));

// accesing static file from directory public
app.use(express.static(path.join(__dirname, "public")));

// middleware which parse the data send by POST method (for url-encoded data).
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// creating port
const port = 8080;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

// here we use array that co tains post info like database.
let posts = [
  {
    id: uuidv4(), // return unique id each time
    username: "Shivraj",
    content: "i Love coding",
  },
  {
    id: uuidv4(),
    username: "Nikeeta Kaudare",
    content: "i Love Web Development",
  },
  {
    id: uuidv4(),
    username: "Deepak Korade",
    content: "Iam here for the crown.",
  },
];

// API for render posts
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

// API for creating new post.

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

// adding new post

app.post("/posts", (req, res) => {
  let id = uuidv4();
  // Destructuring.
  let { username, content } = req.body;
  // push / adding new post to the array.
  posts.push({ id, username, content });
  res.redirect("/posts");
});

// post of specific id.

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", { post });
});

// Update specific content
app.patch("/posts/:id", (req, res) => {
  // to get the id
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  console.log(post);
  res.send("patch request working");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

// delete record.
app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});
