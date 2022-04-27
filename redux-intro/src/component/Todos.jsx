import React from 'react'

export const Todos = () => {
const[todos,setTodos]=useState([])
useEffect(() => {
 const getdata = async() =>{
   let res = await fetch(" http://localhost:3000/todos")
   let data= res.json
   setTodos(data)
}
getdata()
},[]);
  return (
    <div>
        Todos:{todos.length-1}
    </div>
  )
}
