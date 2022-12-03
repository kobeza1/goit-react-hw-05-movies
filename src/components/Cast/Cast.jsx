import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCast } from 'utils/api-service';
import {
  ActorName,
  CastImage,
  CastItem,
  CastList,
  CharacterName,
} from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    try {
      fetchMoviesCast(id).then(setCast);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return cast.length > 0 ? (
    <CastList>
      {cast.map(({ name, character, profile_path, id }) => (
        <CastItem key={id}>
          <div>
            <CastImage
              src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
              alt={name}
            ></CastImage>
            <ActorName>{name}</ActorName>
            <CharacterName>{character}</CharacterName>
          </div>
        </CastItem>
      ))}
    </CastList>
  ) : (
    <div>No information about the actors</div>
  );
};

export default Cast;
