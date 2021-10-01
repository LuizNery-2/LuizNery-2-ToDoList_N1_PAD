
import {sha256} from 'react-native-sha256';
export const Types = {
 
    ADD: "@TaskReducer/Add_Task",
    CLOSE:"@TaskReducer/CLOSE_Task"




};



const INITIAL_STATE = {
    data:[]
};

export default function reducer(state = INITIAL_STATE, action){
  
     switch (action.type){
     case Types.ADD:
         return{...state, data:[...state.data, action.item]}

      default:
          return state;
     }
    

}


export const Creators = {
   addNewTask: (item,id) => ({
    
       type: Types.ADD,
       item:{
           task: item,
           id: id,
       }
   })

}