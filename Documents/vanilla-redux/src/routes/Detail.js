import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = ({ toDo }) => {
  //   const id = useParams();

  return (
    <>
      <h1>{toDo?.text}</h1>
      <h3>{toDo?.id}</h3>
    </>
  );
};

// use mapStateToProps to see the id without using useParams hook
function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id }
    }
  } = ownProps;

  return { toDo: state.find(toDo => toDo.id == id) };
}

export default connect(mapStateToProps)(Detail);
