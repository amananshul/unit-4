import React from 'react'

function Todo({id,value}) {
    const handleDelete=async() => {
         await fetch(` http://localhost:3000/todos/${id}`,{
            method: 'DELETE',
            headers: {'Content-Type': 'application/'}
        })
    }
  return (
    <div>
        <h1>{value}</h1>
    <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Todo