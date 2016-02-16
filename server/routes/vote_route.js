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
		})
	})

});

router.post('/rank', function(req,res){
	var roomcode = req.body.code;
	var votername = req.body.username;
	var rankedVotes = req.body.rankedVotes;

	//create number to push into results array
	var votes = [];
	for (var key in rankedVotes) {
		votes.push(rankedVotes[key].vote);
	}
	console.log('array of votes: ', votes);
	db.Room.findOne({roomcode:roomcode}, function(err,room){
		room.voters[votername] = rankedVotes;
		for (var i = 0; i < votes.length; i++) {
			if (room.results[i]){
				room.results[i]+=votes[i];
			} else {
				room.results[i]=votes[i];
			}
		}
		room.markModified('voters');
		room.markModified('results');

		room.save(function(err,room){
			res.json(room);
		})
	})

})

module.exports = router;
