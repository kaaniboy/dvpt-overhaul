var http = require('http');
var express = require('express');
var sql = require('mssql');
var app = express();


var connection = new sql.Connection(config, function(err) {
	if(err) {
		console.log(err);
	}

	console.log('Successfully connected to database.');
});

//########## Tutee Actions ##########

app.route('/tutors/:id')
	.get(function(req, res) {
		var request = new sql.Request(connection);

		request.query('select TutorID, FirstName, LastName from Tutors where TutorID = ' + req.params.id, function(err, result) {
			if(err) {
				console.log(err);
			}
       		res.json({ tutors: result});
   		});
	});

app.route('/tutors')
	.get(function(req, res) {
		var request = new sql.Request(connection);

		request.query('select TutorID, FirstName, LastName from Tutors', function(err, result) {
			if(err) {
				console.log(err);
			}
       		res.json({ tutors: result});
   		});
	});


//########## Tutee Actions ##########

app.route('/tutees/:id')
	.get(function(req, res) {
		var request = new sql.Request(connection);

		request.query('select TuteeID, FirstName, LastName from Tutees where TuteeID = ' + req.params.id, function(err, result) {
			if(err) {
				console.log(err);
			}
       		res.json({ tutees: result});
   		});
	});

app.route('/tutees')
	.get(function(req, res) {
		var request = new sql.Request(connection);

		request.query('select TuteeID, FirstName, LastName from Tutees', function(err, result) {
			if(err) {
				console.log(err);
			}
       		res.json({ tutees: result});
   		});
	});


var server = app.listen(1337, function() {
	console.log('Running...');
});