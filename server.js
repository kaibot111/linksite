const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve the current folder so the browser can find index.html and links.js
app.use(express.static(__dirname));

// Visitor Counter Variables
let totalVisits = 0;

io.on('connection', (socket) => {
    // A user connected
    totalVisits++;
    
    // Broadcast counts to everyone
    io.emit('updateCounts', { 
        total: totalVisits, 
        online: io.engine.clientsCount 
    });

    socket.on('disconnect', () => {
        // A user disconnected
        io.emit('updateCounts', { 
            total: totalVisits, 
            online: io.engine.clientsCount 
        });
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));