var express = require('express');
var router = express.Router();
var db = require('../db');

router.post('/',function(req,res){
	var roomcode = req.body.code;
	var votername = req.body.username;
	var choice = Number(req.body.choice);

	db.Room.findOne({roomcode:roomcode},function(err,room){
		room.voters[votername]=choice;
		if (!room.done){
			room.results[choice]++;
		}
		room.markModified('voters');
		room.markModified('results');

		room.save(function(err,room){
			res.json(room);
		});
	})
})

module.exports = router;