import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const HomePresenter = ({ nowPlaying, upComing, popular, loading, error }) =>
  null;

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upComing: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default HomePresenter;
