var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res){
 // res.send('Hellow Ritesh!');
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
//  console.log('a user connected');
  socket.on('chat message', function(msg){
    io.emit('chatmessage', msg);
    console.log('message: ' + msg);
  });
});

http.listen(3333, function() {
  console.log('Example app listening on port 3333');
});
