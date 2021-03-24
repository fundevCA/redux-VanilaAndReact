import { createStore } from "redux";

// Add and Delete action
const addToDo = text => {
  return {
    type: ADD,
    text
  };
};
const deleteToDo = id => {
  return {
    type: DEL,
    id
  };
};

const ADD = "ADD";
const DEL = "DEL";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DEL:
      return state.filter(item => item.id !== action.id);
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
