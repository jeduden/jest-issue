# Isolating Jest - Socket.IO 2 issue

Purpose of the repository is to find out in what circumstances jest cannot be used to execute tests that run a server.

| Runner                                    | Socket.IO (1.3.7)                      |  Socket.IO (2.0.4)                           |
| ----------------------------------------- | -------------------------------------- | -------------------------------------------- |
| Jest 21                                   | [OK](packages/jest-21-socketio-1.3.7)  | [BROKEN](packages/jest-21-socketio-2.0.4)    |
| Jasmine 2.8.0                             | N/A                                    | [OK](packages/jasmine-2.8.0-socketio-2.0.4)  |
| Jasmine 2.8.0 wrapped in vm manully       | N/A                                    | [OK](packages/jasmine-2.8.0-socketio-2.0.4)  |
