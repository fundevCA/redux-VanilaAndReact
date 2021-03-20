// This is VanillaJS with redux
import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// Use var instead of string to minimize human mistakes
const ADD = "ADD";
const DEL = "DEL";

const dispatchAdd = toDo => {
  return { type: ADD, toDo };
};

const dispatchDel = id => {
  return { type: DEL, id };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.toDo, id: Date.now() }, ...state];
    case DEL:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const addToDo = toDo => {
  store.dispatch(dispatchAdd(toDo));
};

const deleteToDo = e => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(dispatchDel(id));
};

const paintToDo = () => {
  ul.innerHTML = "";
  store.getState().forEach(item => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerHTML = "DEL";
    button.addEventListener("click", deleteToDo);

    li.innerHTML = item.text;
    li.id = item.id;
    li.appendChild(button);
    ul.appendChild(li);
  });
};

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  addToDo(toDo);

  input.value = "";
  input.focus();
};

store.subscribe(paintToDo);
form.addEventListener("submit", onSubmit);
