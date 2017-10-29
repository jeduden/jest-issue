const UWSServer = require('uws').Server;
function server() {
  let wss = new UWSServer({port:3000});
  wss.on('connection', function(client){
    client.send('hello');
  });
  return wss;
}
module.exports = server;
