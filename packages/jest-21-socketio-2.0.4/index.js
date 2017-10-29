const io = require('socket.io')();
function server() {
  io.on('connection', function(client){
    client.emit('hello');
  });
  return io.listen(3000);
}
module.exports = server;
