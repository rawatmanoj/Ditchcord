
import {MESSAGE_SENT,OUTGOING_MESSAGE_CHANGED,MESSAGE_RECEIVED} from '../actions';

const INITIAL_STATE = {
    outgoingMessage: '',
    threads: ''
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

        case OUTGOING_MESSAGE_CHANGED:
            reduced = Object.assign({},
            state,
                    {outgoingMessage: action.text}
            );
            break;
        case MESSAGE_RECEIVED:
          
            reduced = Object.assign(
                state,{threads:action.message}
            );
            break;

        default:
          
            reduced = state;    
           
    }
   
    return reduced;
};

export default messageReducer;