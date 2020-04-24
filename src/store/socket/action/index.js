// Socket related actions
export const CONNECTION_CHANGED = 'socket/connection-changed';
export const PORT_CHANGED       = 'socket/port-changed';
export const CONNECT_SOCKET     = 'socket/connect';
export const DISCONNECT_SOCKET  = 'socket/disconnect';

// The socket's connection state changed
export const connectionChanged = isConnected => {
    return {
        type: CONNECTION_CHANGED,
        connected: isConnected,
        isError: false
    };
};


// The user clicked the connect button
export const connectSocket = (port) => {
    console.log("connecting")
    return {
        type: CONNECT_SOCKET
    };
};

// The user clicked the disconnect button
export const disconnectSocket = () => {
    return {
        type: DISCONNECT_SOCKET
    };
};