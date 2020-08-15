import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TVPresenter = ({ topRated, popular, airToday, error, loading }) => null;

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default TVPresenter;
