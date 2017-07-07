var express = require('express');
var bodyParser = require('body-parser');
var sqlite3 = require("sqlite3").verbose();
var cors = require('cors');
var Q = require('q');
/// set credentials to request for signedURL
var AWS = require('aws-sdk');
AWS.config.region = 'us-east-1';
// AWS.config.loadFromPath('.aws-config.json');

// var db = new sqlite3.Database("db/akmy-web.db");
var app = express();

app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use(express.static(__dirname + "/assets"));



app.set('view engine', 'jade');
app.get('/', function(req, res){
	res.render('index');
});

app.get('/word1', function(req, res){
	res.render('scenes/first.jade');
});

app.get('/webwork/:type', function(req, res){
	var type = req.params.type;
	res.render('work/dashboard.jade');
});

app.listen(80);
console.log('Listening on port 80');
