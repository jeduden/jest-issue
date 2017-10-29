const client = require('socket.io-client');
const server = require('..');
const vm = require('vm');

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
    conn = client('ws://127.0.0.1:3000/', {transports:['websocket']});
    return new Promise((resolve)=>{
      conn.on('connect', ()=>{
        console.log('connected');
      });
      conn.on('hello', (msg)=>{
        resolve();
      });
    });
  });
  it('sends message to client running in vm context after connect', ()=>{
    return new Promise((resolve)=>{
      let sandbox = {require, resolve, console};
      vm.createContext(sandbox);
      vm.runInContext("const conn=require('socket.io-client')('ws://127.0.0.1:3000/', {transports:['websocket']});"+
          "conn.on('connect', ()=>{console.log('connected');});"+
          "conn.on('hello', ()=>{resolve();});", sandbox);
    });
  });
});


describe('server in sandbox', ()=>{
  let conn;
  let serverSandbox;
  let openPort;

  beforeEach(()=>{
    serverSandbox = {require, console, result:{}};
    vm.createContext(serverSandbox);
    vm.runInContext("result.openPort=require('..')();", serverSandbox);
    openPort=serverSandbox.result.openPort;
  });
  afterEach(()=>{
    openPort.close();
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
      conn.on('hello', (msg)=>{
        resolve();
      });
    });
  });
  it('sends message to client running in vm context after connect', ()=>{
    return new Promise((resolve)=>{
      let sandbox = {require, resolve, console};
      vm.createContext(sandbox);
      vm.runInContext("const conn=require('socket.io-client')('ws://127.0.0.1:3000/', {transports:['websocket']});"+
          "conn.on('connect', ()=>{console.log('connected');});"+
          "conn.on('hello', ()=>{resolve();});", sandbox);
    });
  });
});
