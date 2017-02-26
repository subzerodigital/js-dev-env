var express = require('express');
var path = require('path');
var open = require('open');


var port = 3000;

var app = express();

//set view engine
app.set('views','./src/ejs');
app.set('view engine', 'ejs');


//route
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

//render pages
app.get('/preview/:templateName',function(req,res){

	//get template name first
	var tempName = req.params.templateName.toString();
	res.render(tempName,{});

});

app.listen(port, function (err) {

	if (err) {
		console.log(err)
	} else {
		open('http://localhost:' + port);
	}

});



