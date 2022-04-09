import React from 'react'
import TodoItem from './TodoItem'
import {nanoid} from 'nanoid'


 function Todo() {
    const[task,setTask]=React.useState("")
    const[todo,setTodo]=React.useState([])

    const handleChange=(e)=>{
       setTask(e.target.value)
    }
    const handleClick=()=>{
        let taskObj={
            id:nanoid(),
            title:task,
            status:false
        }
       setTodo([taskObj,...todo])
    }
    const handleDel=(item)=>{
     let updatedList = todo.filter(elem=>elem.id!=item.id)
     setTodo(updatedList)
    }
  return (
    <>
        <input type={"task"} value={task} placeholder="enter task" onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
        {todo.map(item=>{
            return <>
            <TodoItem key={item.id} item={item}/>
            <button onClick={()=>handleDel(item)}>delete</button>
            </>
            
        })}
    </>
  )
}

export default Todo