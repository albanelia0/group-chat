var app = require('http').createServer()
var io = require('socket.io')(app);

io.on('connection', socket => {

  socket.on('message', function (data) {
    socket.broadcast.emit('message', data)
    console.log(data)
  });
})

app.listen(3305, () => {
  console.log('server running')
})