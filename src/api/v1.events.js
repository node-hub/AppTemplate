'use strict';

const events = io => {
  /*** LIST OF ROOMS, USERNAMES WITH CORRESPONDING SOCKET IDS ***/

  /*** SERVER EVENT HANDLERS ***/
  io.on('connection', socket => {
    console.log(`Socket connected with id ${socket.id}...`);
    console.log('Your app is connected');

    //The client will be sending in lines and emitting events to `input`. `payload` is the line message
    socket.on('input', payload => {
      console.log(payload);
      const message = {display:`Returned with message ${payload}`};
      socket.emit('output', message);
    });
    socket.on('disconnect', () => console.log(`Goodbye client: ${socket.id}`));
  })
};

module.exports = events;