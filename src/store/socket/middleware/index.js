import Socket from "./Socket";
import {statusChanged} from "../../status/action";
import {
    CONNECT_SOCKET,
    DISCONNECT_SOCKET
} from "../action";
import {
    messageReceived,
    messageSent,
    SEND_MESSAGE
} from "../../message/actions";

const socketMiddleware = store => {


    // The client has received a message
    const onIncomingMessage = message => store.dispatch(messageReceived(message));

    // The server has updated us with a list of all users currently on the system

    const socket = new Socket(
      
        onIncomingMessage,
      
    );

    // Return the handler that will be called for each action dispatched
    return next => action => {


        switch (action.type){

            case SEND_MESSAGE:
                socket.sendIm({
                   
                    'text': action.message
                  
                });
                store.dispatch(messageSent());
                break;

            default:
                break;
        }

        return next(action)
    };
};

export default socketMiddleware;