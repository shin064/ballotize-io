var express = require('express');
var router = express.Router();
var db = require('../db');

router.post('/',function(req,res){
	console.log('POST request to /vote route');
	console.log('req.body',req.body);

	var roomcode = req.body.code;
	var votername = req.body.username;
	var choice = Number(req.body.choice);

	db.Room.findOne({roomcode:roomcode},function(err,room){
		room.voters[votername]=choice;
		room.results[choice-1]++;
		room.markModified('voters');
		room.markModified('results');

		room.save(function(err,room){
			res.json(room);
		})
	})

})

module.exports = router;