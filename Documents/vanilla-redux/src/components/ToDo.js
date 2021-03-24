import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

const toDo = ({ text, deleteToDo, id }) => {
  return (
    <li>
      <Link to={`/${id}`}>{`${text} `}</Link>
      <button onClick={deleteToDo}>DEL</button>
    </li>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteToDo: () => dispatch(actionCreators.deleteToDo(ownProps.id))
  };
}

export default connect(null, mapDispatchToProps)(toDo);
