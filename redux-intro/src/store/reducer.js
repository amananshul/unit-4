import{DECREMENT,INCREMENT} from "./actionTypes"
export const reducer=(state,action)=> {
    switch(action.type){
        case INCREMENT:{
           return {
         ...state,
         count: state.count+1,
        //  count:+action.payload
            }
        }
        case DECREMENT:{
            return {
                ...state,
                count:state.count-1
                // count:+action.payload
            }
        }
        default:{
           return state;
        }
    }
}