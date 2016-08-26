//Home
exports.home = function(req, res){
	res.render('home', {
		title : "Star Wars Movies"
	});
};

// movie single
exports.movie_single =function(req, res){
	var episode_number = req.params.episode_number;
	res.send("This is the page for episode " + episode_number);
};

// notFound
exports.notFound = function(req, res){
	res.send("This is not the page that you're looking for");
};