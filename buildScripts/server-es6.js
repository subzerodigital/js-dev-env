import express from 'express';
import path from 'path';
import open from 'open';
import fs from 'fs';

const port = 3000;
const app = express();

//set view engine
app.set('views', './src');
app.set('view engine', 'ejs');


//static files
app.use('/src', express.static('./src'));
app.use('/node_modules', express.static('./node_modules'));
app.use('/root', express.static('./'));

//route
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

//render pages
app.get('/preview/:templateName', (req, res) => {

	//get template name first
	const tempName = req.params.templateName.toString();
	res.render('ejs/' + tempName, {});

});

app.get('/previewComponent/:templateName/:componentName', (req, res) => {

	//get template and component name
	const tempName = req.params.templateName.toString(),
		componentName = req.params.componentName.toString(),
		componentPath = '../src/component/' + componentName + '/' + componentName + '.ejs',
		componentJsonPath = '../src/component/' + componentName + '/' + componentName + '.json',

		//read assets from json file passed in
		jsonPath = path.join(__dirname, componentJsonPath),
		assets = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

	res.render('template/' + tempName, {
		componentPath: componentPath,
		assets: assets
	});

});


app.listen(port, (err) => {

	if (err) {
		console.log(err)
	} else {
		open('http://localhost:' + port);
	}

});