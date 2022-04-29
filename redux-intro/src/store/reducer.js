import{DECREMENT,INCREMENT,PROD,DIVIDE,IS_REQUEST_SUCCESS,IS_REQUEST_ERROR,IS_REQUEST_LOADING,DELETE_TODOS} from "./actionTypes"
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
                count:state.count/
               action.payload
            }
        }
        case IS_REQUEST_SUCCESS:{
            return {
                ...state,
                todos:{isLoading:false,
                    isError:false,
                    data:action.payload}
            }
        }
        case IS_REQUEST_LOADING:{
            return {
                ...state,
                todos:{isLoading:true,
                    isError:false,
                    data:[]}
            }
        }
        case IS_REQUEST_ERROR:{
            return {
                ...state,
                todos:{isLoading:false,
                    isError:true,
                    data:[]}
            }
        }
        case DELETE_TODOS:{
            return {
                ...state,
                todos:state.todos.filter(todo=>todo.id!==action.payload)
            }
        }
        default:{
           return state;
        }
    }
}