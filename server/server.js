var express = require('express');
var app = express();
// var server = require('http').Server(app);
var bodyParser = require('body-parser');
// var io = require('socket.io')(server);
var db = require('./db.js');
var port = process.env.PORT || 8080;

module.exports = app;

// server.listen(80);

app.use('/', express.static( __dirname + '/../client' ));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });

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
})

app.listen(port, function(){
  console.log('listening on port ' + port);
});