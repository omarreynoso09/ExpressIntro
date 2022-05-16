const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.status(200).send("Hello Hansel!");
});

app.get("/about", (req, res) => {
  res.send("A good place for stuff about me.");
});
app.get("/contact", (req, res) => {
  res.send("Contact info here.");
});

app.get("*", (req, res) => {
  res.status(404).send("sorry there's nothing here");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
