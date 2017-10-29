const io = require('engine.io');
function server() {
  const srv = io.listen(3000);
  srv.on('connection', function(client){
    client.send('hello');
  });
  return srv;
}
module.exports = server;
