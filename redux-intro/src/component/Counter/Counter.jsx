import React from 'react'
import { useSelector } from 'react-redux'
import {incrementCounter,decrementCounter,product,divide} from '../../store/actions'
import {useDispatch} from 'react-redux'
const Counter = () => {
    const count =useSelector((state)=>state.count)
 const dispatch=useDispatch()
  return (


    
        <div>
          Counter:{count}
      
           <div>
           <button onClick={()=>dispatch(incrementCounter(1))}>Increment</button>
            <button onClick={()=>dispatch(decrementCounter(1))}>Decrement</button>
           </div>
           <div>
           <button onClick={()=>dispatch(incrementCounter(5))}>Increment by 5</button>
            <button onClick={()=>dispatch(decrementCounter(7))}>Decrement by 7</button>
           </div>
           <div>
           <button onClick={()=>dispatch(product(5))}>multiply by 5</button>
            <button onClick={()=>dispatch(divide(7))}>divide by 7</button>
           </div>
        
    </div>
  )
}

export default Counter
