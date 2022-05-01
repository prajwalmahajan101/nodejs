const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const port = 8000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

var contactList = [
  {
    name: "prajwal",
    phone: "1111111111",
  },
  {
    name: "vipul",
    phone: "0123456789",
  },
  {
    name: "anil",
    phone: "0000000000",
  },
  {
    name: "sheetal",
    phone: "98786543210",
  },
];

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('assets'));
app.get("/", (req, res) => {
  return res.render("home", {
    title: "My contact List",
    contact_list: contactList,
  });
});

app.post("/create_contact", (req, res) => {
  const new_contact = {
    name: req.body.name,
    phone: req.body.phone,
  };
  contactList.push(new_contact);
  return res.redirect("/");
});

// app.get("/delete-contact/", function (req, res) {
//   console.log(req.query.phone);
//   console.log(req.query.name);
//   return res.redirect("/");
// });

app.listen(port, (err) => {
  if (err) {
    console.log("Error in server :" + err);
  } else console.log("my express server is running at port: " + port);
});
