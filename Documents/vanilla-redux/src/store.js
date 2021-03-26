import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

// Replace with crete action function in toolkit
// Add and Delete action

const addToDo = createAction("ADD");
const deleteToDo = createAction("DEL");
console.log(addToDo(), deleteToDo);

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

const store = createStore(reducer);

// store.subscribe();

export const actionCreators = {
  addToDo,
  deleteToDo
};

export default store;
