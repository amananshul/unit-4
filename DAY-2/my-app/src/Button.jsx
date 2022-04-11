// import React from 'react'
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Button() {
   const[count,setCount]=React.useState(0)
//    console.log("first")
   const handleInc=()=>{
       setCount(count+1)
   }
   const handleDInc=()=>{
       setCount(count*2)   
   }
   const handleDec=()=>{
       setCount(count-1)
       
   }
   const handleDDec=()=>{
       setCount(count-2)
       
   }

  return (
      <>
    <div>
        <h1 className="btn  btn-success m-5">
         {count}
        </h1>
        <button onClick={()=>handleInc(2)}>INCREMENT</button>
        <button onClick={()=>handleDInc(2)}>DOUBLE INCREMENT</button>
        <button onClick={()=>handleDec(2)}>DECREMENT</button>
        <button onClick={()=>handleDDec(2)}>DOUBLE DECREMENT</button>

    </div>
      </>
  )
}
