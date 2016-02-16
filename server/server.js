var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');
var io = require('socket.io')(server);
var db = require('./db.js');
var port = process.env.PORT || 8080;
var handleNewVote = require('./functions/handleNewVote');
var removeUser = require('./functions/removeUser');

server.listen(port, function(){
  console.log('listening on port ' + port);
});

//serving static files
app.use('/', express.static( __dirname + '/../client' ));
app.use('/node_modules',express.static(__dirname+'/../node_modules/'));
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});

app.use(bodyParser.json());

//routes
app.use('/ballot', require('./routes/ballot_route'));
app.use('/vote', require('./routes/vote_route'));
app.use('/endvote', require('./routes/endvote_route'));


io.on('connection', function (socket) {
  var username = '';
  var roomcode;
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected: ',username);
    removeUser(username,roomcode,io);
    //socket.emit('clientDisconnect',username);
  });

  socket.on('subscribe', function(data){
    console.log('joining in', data.roomcode);
    username=data.username;
    roomcode=data.roomcode;
    socket.join(data.roomcode);
  })

  socket.on('unsubscribe', function(room){
    console.log('joining in', room);
    socket.leave(room);
  })

  socket.on('newVote', function(data){
    io.sockets.in(data.roomcode).emit('newVote', data);
  });

  socket.on('endVote', function(data){
    io.sockets.in(data.roomcode).emit('endVote', data);
  })

});

//for getting vote results
app.get('/countVotes' , function (req, res) {
  console.log('req in count Votes: ', req);
  var data = req.body;
  // expecting data in this format
  // var data = {
  //   A: [1, 3, 2],
  //   B: [2, 2, 1],
  //   C: [3, 1, 3]
  // };

  var sum = function (array) {
    var currSum = 0;
    for (var i = 0; i < array.length; i++) {
      currSum += array[i];
    }
    return currSum;
  };

  var countVotes = function (data) {
      var results = {};
    for (var k in data) {
      results[k] = sum(data[k]);
    }
    return results;
  }

  var counted = countVotes(data);

  res.json(counted);
});

module.exports = io;
