# Isolating Jest - Socket.IO 2 issue

Purpose of the repository is to find out in what circumstances jest cannot be used to execute tests that run a server.

| Library                    | Jest 21                                   | Jasmine 2.8.0                               | Jasmine 2.8.0 (tests wrapped manually in vm) |
| -------------------------- | ----------------------------------------- | ------------------------------------------- | -------------------------------------------- |
| Socket.IO (1.3.7)          | [OK](packages/jest-21-socketio-1.3.7)     | N/A                                         | N/A                                          | 
| Socket.IO (2.0.4)          | [BROKEN](packages/jest-21-socketio-2.0.4) | [OK](packages/jasmine-2.8.0-socketio-2.0.4) | [OK](packages/jasmine-2.8.0-socketio-2.0.4)  |
| uWS (0.14.5)               | [OK](packages/jest-21-uws-0.14.5)         | N/A                                         | N/A                                          | 
| uWS (8.14.1)               | [OK](packages/jest-21-uws-8.14.1)         | N/A                                         | N/A                                          | 
