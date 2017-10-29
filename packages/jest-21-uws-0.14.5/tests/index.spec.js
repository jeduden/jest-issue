const WebSocket = require('uws');
const server = require('..');

describe('server', ()=>{
  let openPort;
  let conn;

  beforeEach(()=>{
    openPort = server();
  });
  afterEach(()=>{
    openPort.close();
    if(conn) {
      conn.close();
    }
  });
  it('sends message to client after connect', ()=>{
    conn = new WebSocket('ws://127.0.0.1:3000/');
    return new Promise((resolve)=>{
      conn.on('open', ()=>{
        console.log('connected');
      });
      conn.on('message', (msg)=>{
        if(msg=="hello") {
          resolve();
        }
      });
    });
  });
});
