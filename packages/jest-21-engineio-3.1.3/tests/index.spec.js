const client = require('engine.io-client');
const server = require('..');

describe('server', ()=>{
  let openPort;
  let conn;

  beforeEach(()=>{
    openPort = server();
  });
  afterEach(()=>{
    openPort.httpServer.close();
    if(conn) {
      conn.close();
    }
  });
  it('sends message to client after connect', ()=>{
    conn = client('ws://127.0.0.1:3000/', {transports:['websocket']});
    return new Promise((resolve)=>{
      conn.on('connect', ()=>{
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
