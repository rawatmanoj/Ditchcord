import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import messageReducer from './message/reducer';



export default combineReducers({
    messageState: messageReducer,
    form:formReducer
  
});