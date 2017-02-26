var express = require('express');
var path = require('path');
var open = require('open');
var fs = require('fs');


var port = 3000;

var app = express();

//set view engine
app.set('views', './src');
app.set('view engine', 'ejs');


//static files
app.use('/static', express.static('./src/component'));

//route
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

//render pages
app.get('/preview/:templateName', function (req, res) {

	//get template name first
	var tempName = req.params.templateName.toString();
	res.render('ejs/' + tempName, {});

});

app.get('/previewComponent/:templateName/:componentName', function (req, res) {

	//get template and component name
	var tempName = req.params.templateName.toString();
	var componentName = req.params.componentName.toString();
	var componentPath = '../src/component/' + componentName + '/' + componentName + '.ejs';
	var componentJsonPath = '../src/component/' + componentName + '/' + componentName + '.json';


	//read assets from json file passed in
	var jsonPath = path.join(__dirname, componentJsonPath);
	var assets = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

	res.render('template/' + tempName, {
		componentPath: componentPath,
		assets: assets
	});

});


app.listen(port, function (err) {

	if (err) {
		console.log(err)
	} else {
		open('http://localhost:' + port);
	}

});



