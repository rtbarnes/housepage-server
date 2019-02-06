const express = require('express')
const app = express();
const http = require('http');

//Express app setup
// const routes = require('./routes');
// app.use('/', routes);

//Server setup
let port = process.env.PORT || 5000; //react needs port 3000
const server = http.createServer(app);

//WebSocket server setup
const io = require('socket.io')(server);

io.on('connection', function(socket){
  console.log(`new connection: ${socket.id}`);
  
  socket.on('new sticky', (data) => {
    console.log("new sticky: %s", data.text);
  });

  //all socket events
  socket.on('disconnect', () => {
    console.log(`disconnected: ${socket.id}`);
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});