import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div``;
const ImageContainer = styled.div``;
const Image = styled.div``;
const Rating = styled.span``;
const Title = styled.span``;
const Year = styled.span``;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => {
  return (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
      <Container>
        <ImageContainer>
          <Image bgUrl={imageUrl} />
        </ImageContainer>
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>{" "}
          {rating}/10
        </Rating>
        <Title>{title}</Title>
        <Year>{year}</Year>
      </Container>
    </Link>
  );
};

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool
};

export default Poster;
