const express = require("express");
const port = 8000;

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Cool it is running</h1>");
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error in server :" + err);
  } else console.log("my express server is running at port: " + port);
});
