import { createStore } from "redux";

let input = document.querySelector("input");
let form = document.querySelector("form");
let ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const MINUS_TODO = "MINUS_TODO";

const dispatchAdd = text => {
  return { type: ADD_TODO, text };
};
const dispatchDel = id => {
  return { type: MINUS_TODO, id };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case MINUS_TODO:
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
};
const paintToDo = () => {
  ul.innerHTML = "";
  store.getState().forEach(item => {
    const li = document.createElement("li");
    li.innerText = item.text;
    li.id = item.id;

    const button = document.createElement("button");
    button.innerHTML = "DEL";
    button.addEventListener("click", deleteToDo);

    li.appendChild(button);
    ul.appendChild(li);
  });
};

const addToDo = text => {
  store.dispatch(dispatchAdd(text));
};
const deleteToDo = e => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(dispatchDel(id));
};

const store = createStore(reducer);
store.subscribe(paintToDo);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  if (toDo != "") {
    input.value = "";
    addToDo(toDo);
  }
  input.focus();
};

form.addEventListener("submit", onSubmit);
