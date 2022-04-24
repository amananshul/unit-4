import React from 'react'
import {useState,useEffect} from 'react'

function Timer() {
    const Start=()=>{
     
        setSecond(timer)
        setMinute(timer)
    }
    const Reset=()=>{
     
        setSecond(0)
        setMinute(0)
    }
    const[second,setSecond]=useState()
    const[minute,setMinute]=useState()
    var timer;
    useEffect(() =>{
     timer=setInterval(() =>{
     setSecond(second-1);
     if(second==0){
         setMinute(minute-1)
         setSecond(59)
     }
    },1000)
    return()=>clearInterval(timer)
    })
    
    const startTimer=()=>{
    
    }
  return (
    <div className="timerBox">
    <h1 className="title">Timer</h1>
    <input type="number" name="timer"  value={(minute<10?"0"+minute:minute)}/>
   <input type="number" name="timer"  value= {(second<10?"0"+second:second)}/>
    // <h1 className="input"></h1>
    <button onClick={Start}>Start</button>
    <button onClick={Reset}>Reset</button>

    </div>
  )
}

export default Timer