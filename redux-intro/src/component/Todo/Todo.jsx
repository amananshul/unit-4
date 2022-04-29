import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteTodos} from '../../store/actions'
function Todo({id,value}) {
 const dispatch = useDispatch()
const handleDelete = () => {
  deleteTodos(dispatch,id)
}
  return (
    <div>
        <h1>{value}</h1>
    <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Todo