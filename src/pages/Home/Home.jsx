import { MoviesList } from 'components/MoviesList/MoviesList';
import { Section } from 'components/Section/Section';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMoviesPopular } from 'utils/api-service';
import { Title } from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMoviesPopular().then(setMovies);
  }, []);

  return (
    <>
      <Section>
        <Title>Trending movies</Title>
        <MoviesList movies={movies} />
      </Section>
    </>
  );
};
