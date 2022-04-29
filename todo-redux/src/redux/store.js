
import { legacy_createStore as createStore } from "redux";
import { todoReducer } from "./todo/reducer";

const initialState = {
  todo: [],
    
}
export const store = createStore(todoReducer, initialState)


// console.log(store.getState())
// {
//   counter: 0,