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

const TVPresenter = ({ topRated, popular, airToday, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated">
          {topRated.map(show => (
            <Poster
              key={show.id}
              id={show.id}
              title={show.name}
              rating={show.vote_average}
              imageUrl={show.poster_path}
              year={show.first_air_date && show.first_air_date.substring(0, 4)}
              isMovie={false}
            ></Poster>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular TV shows">
          {popular.map(show => (
            <Poster
              key={show.id}
              id={show.id}
              title={show.name}
              rating={show.vote_average}
              imageUrl={show.poster_path}
              year={show.first_air_date && show.first_air_date.substring(0, 4)}
              isMovie={false}
            ></Poster>
          ))}
          <Poster></Poster>
        </Section>
      )}
      {airToday && airToday.length > 0 && (
        <Section title="Air Today">
          {airToday.map(show => (
            <Poster
              key={show.id}
              id={show.id}
              title={show.name}
              rating={show.vote_average}
              imageUrl={show.poster_path}
              year={show.first_air_date && show.first_air_date.substring(0, 4)}
              isMovie={false}
            ></Poster>
          ))}
          <Poster></Poster>
        </Section>
      )}
      {error && <Message text={error} color="#e74c3c" />}
    </Container>
  );
TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default TVPresenter;
