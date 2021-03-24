import React, { useState } from "react";
import store, { actionCreators } from "../store";
import { connect } from "react-redux";

const Home = ({ toDo, addToDo }) => {
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    addToDo(text);
    setText("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>Add Task</button>
      </form>
      <ul>{JSON.stringify(toDo)}</ul>
    </>
  );
};

function mapStateToProps(state) {
  return { toDo: state };
}

function mapDispatchToProps(dispatch) {
  return { addToDo: text => dispatch(actionCreators.addToDo(text)) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
