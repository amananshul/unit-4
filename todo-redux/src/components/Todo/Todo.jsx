// import React from 'react'

// export const Todo = () => {
//   return (
//     <div>Todo
//         lol
//     </div>
//   )
// }
import React from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const Todo = () => {
  return (
    <>
      <TodoInput />
      <TodoList />
    </>
  );
};
