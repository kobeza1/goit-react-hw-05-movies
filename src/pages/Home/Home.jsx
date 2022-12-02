import { MoviesList } from 'components/MoviesList/MoviesList';
import { Section } from 'components/Section/Section';
import { useState, useEffect } from 'react';
import { fetchMoviesPopular } from 'utils/api-service';
import { Title } from './Home.styled';

const Home = () => {
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

export default Home;
