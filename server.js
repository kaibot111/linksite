const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve the current folder
app.use(express.static(__dirname));

let totalVisits = 0;

io.on('connection', (socket) => {
    totalVisits++;
    
    // Send updates to everyone
    io.emit('updateCounts', { 
        total: totalVisits, 
        online: io.engine.clientsCount 
    });

    socket.on('disconnect', () => {
        io.emit('updateCounts', { 
            total: totalVisits, 
            online: io.engine.clientsCount 
        });
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
