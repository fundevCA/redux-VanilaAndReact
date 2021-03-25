import React, { useState, useRef } from "react";
import { actionCreators } from "../store";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState("");
  const inputEl = useRef(null);

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    addToDo(text);
    setText("");
    inputEl.current.focus();
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={onChange}
          ref={inputEl}
        ></input>
        <button>Add Task</button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
};

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return { addToDo: text => dispatch(actionCreators.addToDo(text)) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
