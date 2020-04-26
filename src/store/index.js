import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import messageReducer from './message/reducer';
import authReducer from '../store/auth/authReducer'


export default combineReducers({
    auth:authReducer,
    messageState: messageReducer,
    form:formReducer
  
});