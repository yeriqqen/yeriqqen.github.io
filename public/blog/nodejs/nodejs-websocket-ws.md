---
title: "nodejs websocket ws"
description: "Nodejs WS websocket"
pubDate: 2025-08-02
---
## Installation:

```bash
npm i ws
```

```js
// server.js
mport express from 'express';
import http from 'http'; // to have access to the (server)
import WebSocket from 'ws'; // to create ws server

const app = express();

const server = http.createServer(app); // now we can access server at (server)

const wss = WebSocket.Server({ server }); // ws server at (wss) on top of (server)
// passing http server as (server) allows wss and http server in the same server, but is not required

server.listen(3000); // starts both servers in one
```
