import React from 'react'
import {nanoid} from 'nanoid'
 function Todo() {
     const[task,setTask]=React.useState("")
     const[todoList,setTodo]=React.useState([])
     const handleChange=(e)=>{
         console.log(e.target.value)
         setTask(e.target.value)

     }
     const saveClick=()=>{
        //  const setObj
            let taskObj={
                id:nanoid(),
                title:task,
                status:false
    
            }
           setTodo([taskObj,...todoList])
         
        }  
     

  return (
    <>
     <input type="text" value={task} placeholder="Enter todo" onChange={handleChange} />
     <button onClick={saveClick}>Add todo</button>
      
    </>
  )
}
export default Todo