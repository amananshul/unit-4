import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
    const value =useSelector((state)=>{
        console.log(state)
        return 50
    })
  return (
    <div>Counter:{value}
        <div>
            <button>Increment</button>
            <button>Decrement</button>
        </div>
    </div>

  )
}

export default Counter
