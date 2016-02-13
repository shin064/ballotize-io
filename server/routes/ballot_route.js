var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/',function(req,res){
	console.log('GET request to /ballot route');
	console.log(req.query);
	var roomcode = Number(req.query.code);
	var username = req.query.username;

	db.Room.findOne({roomcode:roomcode},function(err,room){
		if (err){
			console.log('error finding room');
			res.send(err);
		}
		else {
			console.log('found room: ',room);
			if (!room.voters) {
				room.voters = {};
			}
			room.voters[username]=false;
			room.markModified('voters');
			room.save(function(err,room){
				res.json(room);
			})
		}
	});
})

router.post('/',function(req,res){
	console.log('POST request to /ballot route');

	var topic = req.body.topic;
	var options = req.body.options;
	var owner = req.body.username;

	var results = [];
	for (var i=0; i<Object.keys(options).length; i++){
		results.push(0);
	}

	console.log('results',results);

	var roomcode = Math.floor(Math.random()*9000)+1000;

	var room = new db.Room({
		roomcode:roomcode,
		topic:topic,
		options:options,
		owner:owner,
		results:results
	});

	room.markModified('options');
	room.markModified('results');
	room.save(function(err,savedRoom){
		if (err){
			console.log('error saving room: ',err);
			res.send(err);
		}
		console.log('room was saved:',savedRoom)
		res.json(savedRoom);
	})
});

module.exports = router;