// const express = require('express');
// const app = express();

const httpServer = require('http').createServer();
const io = require('socket.io')(httpServer, {
  cors: {
    origin: "http://localhost:8080",
  },
});

/* app.get('/', (req, res) => {
    res.send('hello, world');
});

app.listen(3000, () => {
    console.log('listening on port: 3000');
});
*/
