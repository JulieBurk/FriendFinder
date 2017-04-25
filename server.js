// Setting Up Express App
// =============================================================
var express = require('express');
var app = express();
var PORT = 3000;

// app.get("/", function(req, res) {
// 	res.send("hello world!")
// })

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// variables to hold data
// =============================================================

var friends = [{
  id: 4,
  name: "franklin",
  phonenumber: 5555555555,
  email: "email@email.com",
  q1: "",
  q2: "",
  q3: "",
  q4: "",
  q5: "",
  q6: "",
  q7: "",
  q8: "",
  q9: "",
  q10: ""
}, {
  id: 5,
  name: "gus",
  phonenumber: 5555555555,
  email: "email@email.com",
  q1: "",
  q2: "",
  q3: "",
  q4: "",
  q5: "",
  q6: "",
  q7: "",
  q8: "",
  q9: "",
  q10: ""
}];