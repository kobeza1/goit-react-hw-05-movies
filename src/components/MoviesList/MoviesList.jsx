import { MovieLink, MoviesItem, MoviesListStyled } from './MoviesList.styled';

export const MoviesList = ({ movies, location }) => {
  return (
    <MoviesListStyled>
      {movies.map(({ original_title: title, id }) => (
        <MoviesItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </MovieLink>
        </MoviesItem>
      ))}
    </MoviesListStyled>
  );
};
