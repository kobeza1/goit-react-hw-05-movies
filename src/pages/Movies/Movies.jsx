import { useEffect, useState } from 'react';
import { Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import Notiflix, { Notify } from 'notiflix';

import { fetchMoviesByName } from 'utils/api-service';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Section } from 'components/Section/Section';
import { Form, Input } from './Movies.styled';

Notiflix.Notify.init({
  width: '280px',
  position: 'center-top',
  distance: '10px',
  failure: {
    background: '#d22566',
  },
});

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('movie');
  const location = useLocation();

  const onFormSubmit = event => {
    event.preventDefault();
    const value = event.target.elements.movie.value;
    value.trim() === ''
      ? Notify.failure('Please, enter the name of the movie')
      : setSearchParams({ movie: value });
  };

  useEffect(() => {
    try {
      if (!query) return;
      fetchMoviesByName(query).then(res => {
        if (res.length > 0) {
          setMovie(res);
        } else {
          Notify.failure('Nothing found');
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  return (
    <>
      <Section>
        <Form onSubmit={onFormSubmit}>
          <Input
            name="movie"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          ></Input>
          <button>Search</button>
        </Form>
        {query && <MoviesList movies={movie} location={location} />}
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </Section>
    </>
  );
};

export default Movies;
