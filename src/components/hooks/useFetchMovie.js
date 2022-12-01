import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesById } from 'utils/api-service';

export const useFetchMovie = () => {
  const [movieObject, setMovieObject] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMoviesById(id).then(setMovieObject);
  }, [id]);

  return movieObject;
};
