export const SEND_MESSAGE             = 'message/send-message';
export const MESSAGE_RECEIVED         = 'message/message-received';
export const MESSAGE_SENT             = 'message/message-sent';
export const OUTGOING_MESSAGE_CHANGED = 'message/outgoing-message-changed';

export const sendMessage = message => {
    return {
        type: SEND_MESSAGE,
        message: message
    };
};

export const messageReceived = message => {
  console.log(message);
    return {
        type: MESSAGE_RECEIVED,
        message: message
    };
};

export const outgoingMessageChanged = text => {
    return {
        type: OUTGOING_MESSAGE_CHANGED,
        text: text
    };
};

export const messageSent = () => {
    return {
        type: MESSAGE_SENT
    };
};