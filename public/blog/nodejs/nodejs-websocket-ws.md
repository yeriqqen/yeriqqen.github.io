---
title: "nodejs websocket ws"
description: "Nodejs WS websocket"
pubDate: 2025-08-02
---
## Installation:

```bash
npm i ws
```

# Backend

```js
import express from 'express';
import http from 'http'; // to have access to the (server)
import WebSocket from 'ws'; // to create ws server

const app = express();

const server = http.createServer(app); // now we can access server at (server)

const wss = WebSocket.Server({ server }); // ws server at (wss) on top of (server)

wss.on("connection", (socket) => { // on connection to the browser
    console.log('Connected to the browser')
    socket.send("hello!"); // sending a message to the socket
    socket.on('close', () => { // bidirectional event listener
        console.log('client disconnected');
    });
    socket.on('message', (message) => {
        console.log(message); // events are same as on the clientside socket events
    })
});

server.listen(3000); // starts both servers in one
```

Passing http server as (server) allows wss and http server in the same server, but is not required

Socket is contact line to the connected browser/client

# Frontend

```js
const socket = newWebsocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
    console.log("Connected to the server ");
});

socket.addEventListener("message", (message) => {
    console.log(message);
});

socket.addEventListener("close", () => {
    console.log("Disconnected from the server ");
});

socket.send("some message"); // same methods as serverside socket
```

Socket events and methods are same in server and client