//Express Setup
var app = require('express').createServer();

//Socket Setup
var io = require('socket.io')(app);

app.listen(80);

var bodyParser = require('body-parser');
app.use(bodyParser.json());

//serving static files
app.use('/', express.static( __dirname + '/../client' ));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});


//Connect to Routes
var router = require('./routes.js');
app.use("/", router);

