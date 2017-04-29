var path = require('path');

module.exports = function (app) {

	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	// route that sends the user to the 
	app.get("/list", function(req, res) {
		res.sendFile(__dirname, "./add.html")
	});

	// route that sends the user to the home page
	app.use( function(req, res) {
  		res.sendFile(path.join(__dirname, "../public/home.html")); //need to change html
	});
}

// // Search for Friends (or all friends) - provides JSON
// app.get("/api/:survey?", function(req, res) {
//   var chosen = req.params.friends;

//   if (chosen) {
//     console.log(chosen);

//     for (var i = 0; i < friends.length; i++) {
//       if (chosen === friends[i].routeName) {
//        return res.json(friends[i]);
//       }
//     }
//     return res.json(false);
//   }
//   return res.json(friends);
// });

