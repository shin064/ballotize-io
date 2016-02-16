var db = require('../db.js');

module.exports = function(username,roomcode,io){
	console.log('remove user called');
	db.Room.findOne({roomcode:roomcode},function(err,room){
		if (room){
			if (room.voters[username]===false){
				delete room.voters[username];
				room.markModified('voters');
				room.save(function(err,room){
					io.sockets.in(roomcode).emit('newVote',room);
				})
			}
		}
	})

}