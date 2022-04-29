import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TodoInput from './TodoInput';
import Todo from './Todo'
import { getTodos } from '../../store/actions';
export const Todos = () => {

  const {isLoading,isError,data} = useSelector((state) => state.todos)

  const dispatch = useDispatch()

  useEffect(() => {
    getTodos(dispatch)
 
  }, []);
if(isLoading) return  <div>...Loading</div>
 if(isError) return <div>Error Occured</div>
  return (
    <div>
      Todos: {data.length }
      <div>
        <TodoInput />
      </div>
      {data.map(todo => <Todo key={todo.id} {...todo} />)}
    </div>
  )

}
