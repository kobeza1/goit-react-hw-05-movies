import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCast } from 'utils/api-service';
import {
  ActorName,
  CastImage,
  CastItem,
  CastList,
  CharacterName,
} from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchMoviesCast(id).then(setCast);
  }, [id]);

  return (
    <CastList>
      {cast &&
        cast.map(({ name, character, profile_path }) => (
          <CastItem>
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
  );
};
