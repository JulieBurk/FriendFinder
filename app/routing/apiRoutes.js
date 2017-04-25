// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  // res.send("Welcome to the Friend Finder")
  res.sendFile(path.join(__dirname, "home.html"));
});

// Search for specific friend (or all friend) - provides JSON
app.get("/friend", function(req, res) {
  var chosen = req.params.friend;

app.get("/tables", function(req, res) {
  res.sendFiles(path.join(_dirname, "survey.html"));

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < friend.length; i++) {
      if (chosen === friend[i].routeName) {
        return res.json(friend[i]);
      }
    }
    return res.json(false);
  }
  return res.json(friend);
});
//  Create New Friend - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  var newFriend = req.body;

  console.log(newfriend);

  // We then add the json the user sent to the character array
  friend.push(newFriend);

  // We then display the JSON to the users
  res.json(newFriend);
});