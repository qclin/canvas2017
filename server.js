var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var fs = require('fs');
var Q = require('q');
var pug = require('pug');

/// set credentials to request for signedURL
var AWS = require('aws-sdk');
AWS.config.region = 'us-east-1';
// AWS.config.loadFromPath('.aws-config.json');

var app = express();

app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use(express.static(__dirname + "/assets"));

app.set('views', './views');
app.set('view engine', 'pug');


app.get('/', function(req, res){
	res.render('index');
});

app.get('/arch', function(req, res){
  //
	// var filePath = './pdfs/Q_arch_stillLoops.pdf';
  //
  // fs.readFile(filePath , function (err,data){
	// 	console.log(filePath, data);
  //     res.contentType("application/pdf");
  //     res.send(data);
  // });

	res.render('projects/stillLoops.jade')
});


app.get('/word1', function(req, res){
	res.render('scenes/first.jade');
});

app.get('/webwork/:type', function(req, res){
	var type = req.params.type;
	res.render('work/dashboard.jade');
});


app.get('/projects/:project', function(req, res){
	var name = req.params.project;
	res.render(`projects/${name}`);
});

app.listen(8080);

console.log('Listening on port 80');
