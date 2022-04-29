import{INCREMENT, DECREMENT,PROD,DIVIDE,GET_TODOS,DELETE_TODOS,IS_REQUEST_LOADING,IS_REQUEST_SUCCESS,IS_REQUEST_ERROR} from  "./actionTypes"
import axios  from "axios"
export const incrementCounter=(payload,)=>({
    type:INCREMENT,
    payload,
})
export const decrementCounter=(payload,)=>({
    type:DECREMENT,
    payload,
})
export const product=(payload,)=>({
    type:PROD,
    payload,
})
export const divide=(payload,)=>({
    type:DIVIDE,
    payload,
})

export const getTodos=async(dispatch)=>{
    dispatch ({
        type:IS_REQUEST_LOADING,
    })
    try {
        let r=await axios.get(" http://localhost:8080/todos")
        let data=await r.data
        dispatch ({
            type:IS_REQUEST_SUCCESS, 
            payload:data,  
        })
    } catch (error) {
        dispatch ({
            type:IS_REQUEST_ERROR,
        })
    }
}
export const deleteTodos=async(dispatch,id)=>{
     let r=await axios.delete(`http://localhost:8080/todos/${id}`)
     dispatch ({
         type:DELETE_TODOS,
         payload:id
     })
}