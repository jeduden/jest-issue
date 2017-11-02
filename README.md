# Isolating Jest - Socket.IO 2 issue

Purpose of the repository is to find out in what circumstances jest cannot be used to execute tests that run a server.

| Library           | Jest 21 (Jsdom Env)                      | Jest 21 (Node Env)                       | Jasmine 2.8.0                            | Jasmine 2.8.0 (tests wrapped manually in vm) |
| ----------------- | ----------------------------------------------- | ---------------------------------------- | ---------------------------------------- | -------------------------------------- | 
| Socket.IO (1.3.7) | *OK* [src](packages/jest-21-socketio-1.3.7)     | N/A                                      | N/A                                      | N/A                                      |
| Socket.IO (2.0.4) | *BROKEN* [src](packages/jest-21-socketio-2.0.4) | N/A                                      | *OK* [src](packages/jasmine-2.8.0-socketio-2.0.4) | *OK* [src](packages/jasmine-2.8.0-socketio-2.0.4) |
| Engine.IO (3.1.3) | *BROKEN* [src](packages/jest-21-engineio-3.1.3) [Log](#log-jest-21-engineio-313) | *OK*[src](packages/jest-21-nodeenv-engineio-3.1.3) | *OK* [src](packages/jasmine-2.8.0-engineio-3.1.3) [Log](#log-jasmine-280-engineio-313) | N/A                                      |
| uWS (0.14.5)      | *OK* [src](packages/jest-21-uws-0.14.5)        | N/A                                       | N/A                                      | N/A                                      | 
| uWS (8.14.1)      | *OK* [src](packages/jest-21-uws-8.14.1)        | N/A                                       | N/A                                      | N/A                                      |



### Log: jasmine-2.8.0-engineio-3.1.3

 ▸ DEBUG=* npm test

```
Started
  engine.io-client:socket creating transport "websocket" +0ms
  engine.io-client:socket setting transport websocket +6ms
  engine handshaking client "3LYg9qCWonmB4sHGAAAA" +9ms
  engine:socket sending packet "open" ({"sid":"3LYg9qCWonmB4sHGAAAA","upgrades":[],"pingInterval":25000,"pingTimeout":60000}) +1ms
  engine:socket flushing buffer to transport +0ms
  engine:ws writing "0{"sid":"3LYg9qCWonmB4sHGAAAA","upgrades":[],"pingInterval":25000,"pingTimeout":60000}" +0ms
  engine:transport setting request +1ms
  engine:socket sending packet "message" (hello) +0ms
  engine:socket flushing buffer to transport +0ms
  engine:ws writing "4hello" +0ms
  engine.io-client:socket socket receive: type "open", data "{"sid":"3LYg9qCWonmB4sHGAAAA","upgrades":[],"pingInterval":25000,"pingTimeout":60000}" +3ms
  engine.io-client:socket socket open +0ms
  engine.io-client:socket socket receive: type "message", data "hello" +0ms
  engine.io-client:socket socket close with reason: "forced close" +1ms
  engine.io-client:socket socket closing - telling transport to close +1ms
.

1 spec, 0 failures
Finished in 0.033 seconds
```

### Log: jest-21-engineio-3.1.3

▸ DEBUG=* npm test                    

```
 engine.io-client:socket creating transport "websocket" +0ms
  engine.io-client:socket setting transport websocket +1ms
  engine.io-client:socket socket close with reason: "forced close" +5s
  engine.io-client:socket socket closing - telling transport to close +1ms
  engine closing all open clients +7ms
  engine closing webSocketServer +0ms
 FAIL  tests/index.spec.js (5.195s)
  server

✕ sends message to client after connect (5038ms)

  ● server › sends message to client after connect

Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.
  at node_modules/jest-jasmine2/build/queue_runner.js:64:21
  at ontimeout (timers.js:469:11)
  at tryOnTimeout (timers.js:304:5)
  at Timer.listOnTimeout (timers.js:264:5)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        5.636s, estimated 6s
Ran all test suites.
failure expected
```

