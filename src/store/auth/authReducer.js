import {FETCH_USER} from '../../constants/Protocol';


export default function(state={},action){
  //console.log(action);
  switch(action.type){
      
     case FETCH_USER:
       return action.payload || false;

      default:
          return state;
  }

}