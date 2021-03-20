import { createStore } from "redux";

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

export default store;
