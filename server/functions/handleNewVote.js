var db = require('../db.js');
var io = require('../server.js');

module.exports = function(data,socket){
	console.log('handle new vote called');
	console.log('data',data);

	var roomcode = data.code;
	var votername = data.username;
	var choice = Number(data.choice);

	db.Room.findOne({roomcode:roomcode},function(err,room){
		room.voters[votername]=choice;
		room.results[choice-1]++;
		room.markModified('voters');
		room.markModified('results');

		room.save(function(err,room){
			console.log('room saved: ',room);
			socket.emit('vote saved', room);
		})
	})
}