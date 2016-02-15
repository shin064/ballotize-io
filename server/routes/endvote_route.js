var express = require('express');
var router = express.Router();
var db = require('../db');

router.post('/',function(req,res){
	var roomcode = req.body.roomcode;
	db.Room.findOne({roomcode:roomcode},function(err,room){
		room.done = true;
		room.save(function(err,room){
			res.json(room);
		})
	})
});

module.exports = router;