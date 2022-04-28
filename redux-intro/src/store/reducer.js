import{DECREMENT,INCREMENT,PROD,DIVIDE} from "./actionTypes"
export const reducer=(state,action)=> {
    switch(action.type){
        case INCREMENT:{
           return {
         ...state,
         count: state.count
         +action.payload
            }
        }
        case PROD:{
           return {
         ...state,
         count: state.count
         *action.payload
            }
        }
        case DECREMENT:{
            return {
                ...state,
                count:state.count
               -action.payload
            }
        }
        case DIVIDE:{
            return {
                ...state,
                count:state.count
               /action.payload
            }
        }
        default:{
           return state;
        }
    }
}