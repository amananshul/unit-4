export const reducer=(state,action)=> {
    switch(action.type){
        case "INCREMENT":{
           return {
         ...state,
         count: state.count++,
        //  count:+action.payload
            }
        }
        case "DECREMENT":{
            return {
                ...state,
                count:state.count--,
                // count:+action.payload
            }
        }
        default:{
            break;
        }
    }
}