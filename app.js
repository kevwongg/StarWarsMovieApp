var express = require('express');
var app = express();

//Routes

//Home
app.get('/', function(req, res){
	res.send("This is a server response on home page");
});

app.listen(3000, function(){
	console.log("Applictaion running on local host 3000")
});