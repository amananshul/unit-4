import{INCREMENT, DECREMENT,PROD,DIVIDE} from  "./actionTypes"
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