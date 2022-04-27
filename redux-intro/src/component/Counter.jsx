import React from 'react'
import { useSelector } from 'react-redux'
import {incrementCounter,decrementCounter} from '../store/actions'
import {useDispatch} from 'react-redux'
const Counter = () => {
    const count =useSelector((state)=>state.count)
 const dispatch=useDispatch()
  return (
        <div>
          Counter:{count}
            <button onClick={()=>dispatch(incrementCounter())}>Increment</button>
            <button onClick={()=>dispatch(decrementCounter())}>Decrement</button>
        
    </div>
  )
}

export default Counter
