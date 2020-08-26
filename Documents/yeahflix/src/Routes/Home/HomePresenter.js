import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upComing, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              rating={movie.vote_average}
              imageUrl={movie.poster_path}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            ></Poster>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              rating={movie.vote_average}
              imageUrl={movie.poster_path}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            ></Poster>
          ))}
        </Section>
      )}
      {upComing && upComing.length > 0 && (
        <Section title="UpComing Movies">
          {upComing.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              rating={movie.vote_average}
              imageUrl={movie.poster_path}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            ></Poster>
          ))}
        </Section>
      )}
      {error && <Message text={error} color="#e74c3c" />}
    </Container>
  );
HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upComing: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default HomePresenter;
