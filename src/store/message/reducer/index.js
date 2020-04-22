import React from 'react';
import {MESSAGE_SENT,MESSAGE_RECEIVED} from '../actions';

const INITIAL_STATE = {
    outgoingMessage: '',
    threads: {}
};

const messageReducer = (state = INITIAL_STATE, action) => {
    let reduced;
    switch (action.type)
    {
        
        case MESSAGE_SENT:
            reduced = Object.assign({},
                state, {outgoingMessage: ''}
            );
            break;

        case MESSAGE_RECEIVED:
    

        default:
            reduced = state;    
    }
    return reduced;
};

export default messageReducer;