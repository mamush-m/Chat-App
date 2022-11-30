const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const path = require('path');

app.use(express.static("public"));

app.get('/', (req, res) => {
    const file = path.join(__dirname, '../', 'public', '/index.html');
    res.sendFile(file)
});

io.on('connection', socket => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`this is server.listen on port ${PORT}`);
  });

