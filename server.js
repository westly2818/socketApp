const http = require('http');
const app = require('./app'); // Import the app module
const server = http.createServer(app); // Pass the app module to createServer
const socketIO = require('socket.io');
const port = 4000;
const localIpAddress = '192.168.1.186';
const io = socketIO(server);
app.set('socketio', io);
io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle events from connected clients
    socket.on('message', (data) => {
        console.log('Triggered From IP:', data.ip);
        // Broadcast the message to all connected clients
        io.emit('message', data.message);
    });

    // Handle disconnects
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(port, localIpAddress, () => {
    console.log(`Server is running at http://${localIpAddress}:${port}`);
});
