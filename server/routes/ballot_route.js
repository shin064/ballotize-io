var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/',function(req,res){
	console.log('GET request to /ballot route');
	var roomcode = Number(req.query.code);
	var username = req.query.username;

	db.Room.findOne({roomcode:roomcode},function(err,room){
		if (err){
			console.log('error finding room');
			res.send(err);
		}
		else {
			console.log('found room: ',room);
			res.json(room);
		}
	});
})

router.post('/',function(req,res){
	console.log('POST request to /ballot route');

	var topic = req.body.topic;
	var options = req.body.options;

	console.log('topic',topic);
	console.log('options',options);

	var roomcode = Math.floor(Math.random()*9000)+1000;
	console.log('roomcode',roomcode);

	var room = new db.Room({
		roomcode:roomcode,
		topic:topic,
		options:options
	});

	room.markModified('options');
	room.save(function(err,room){
		if (err){
			console.log('error saving room: ',err);
			res.send(err);
		}
		console.log('room was saved at roomcode: ',room.roomcode)
		res.json(room);
	})
});

module.exports = router;