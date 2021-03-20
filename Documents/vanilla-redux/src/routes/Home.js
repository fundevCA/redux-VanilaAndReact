import React, { useState } from "react";
import ReactDOM from "react-dom";

const Home = () => {
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(text);
    setText("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>Add Task</button>
      </form>
    </>
  );
};
export default Home;
