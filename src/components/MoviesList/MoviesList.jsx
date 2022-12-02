import PropTypes from 'prop-types';
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

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      original_title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  location: PropTypes.object,
};
