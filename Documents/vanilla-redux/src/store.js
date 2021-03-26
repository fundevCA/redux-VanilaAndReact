import { createStore } from "redux";
import {
  createAction,
  createReducer,
  configureStore,
  createSlice
} from "@reduxjs/toolkit";

// Replace with crete action function in toolkit
// Add and Delete action

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DEL");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter(item => item.id !== action.payload);
//     default:
//       return state;
//   }
// };

// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter(item => item.id !== action.payload)
// });
const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => state.filter(item => item.id !== action.payload)
  }
});

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;
export default store;
