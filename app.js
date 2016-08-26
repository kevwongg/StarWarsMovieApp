var express = require('express');
var app = express();
app.set('view engine', 'ejs');
//Routes

//Home
app.get('/', function(req, res){
	res.render('home');
});

// movie single
app.get('/star_wars_episode/:episode_number?', function(req, res){
	var episode_number = req.params.episode_number;
	res.send("This is the page for episode " + episode_number);
});

// notFound
app.get('*', function(req, res){
	res.send("This is not the page that you're looking for");
});
app.listen(3000, function(){
	console.log("Applictaion running on local host 3000")
});