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
			delete room.voters.fuy7;
			room.voters[username]=true;
			room.markModified('voters');
			room.save(function(err,room){
				res.json(room);
			})
		}
	});
})

router.post('/',function(req,res){
	console.log('POST request to /ballot route');
	console.log(req.body);

	var topic = req.body.topic;
	var options = req.body.options;
	var owner = req.body.username;

	console.log('topic',topic);
	console.log('options',options);

	var roomcode = Math.floor(Math.random()*9000)+1000;
	console.log('roomcode',roomcode);

	var room = new db.Room({
		roomcode:roomcode,
		topic:topic,
		options:options,
		owner:owner,
		voters:{fuy7:false}
	});

	room.markModified('options');
	room.markModified('voters');
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