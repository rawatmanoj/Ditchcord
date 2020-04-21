import io from 'socket.io-client';

const socket = () => {
    const ENDPOINT = 'localhost:5000';

    const socketio = io(ENDPOINT);
         //  socket = socketio();

           
    return (
       socketio
    );
};

export default socket;