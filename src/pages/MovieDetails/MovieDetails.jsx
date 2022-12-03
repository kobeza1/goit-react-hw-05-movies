import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useFetchMovie } from 'components/hooks/useFetchMovie';
import { Section } from 'components/Section/Section';

import {
  ButtonBack,
  DetailsItem,
  DetailsList,
  ListAd,
  ListItemAd,
  MovieCardContainer,
  MovieImage,
  MovieTitle,
  StyledLinkAd,
  Title,
  TitleAd,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const movie = useFetchMovie();
  const navigate = useNavigate();
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';

  return (
    <>
      {movie && (
        <>
          <Section>
            <ButtonBack onClick={() => navigate(backLink)}>Go back</ButtonBack>

            <MovieCardContainer>
              <MovieImage
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.title}
              ></MovieImage>
              <DetailsList>
                <DetailsItem>
                  <MovieTitle>
                    {movie.title}({movie.release_date.slice(0, 4)})
                  </MovieTitle>
                  <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
                </DetailsItem>
                <DetailsItem>
                  <Title>Overview</Title>
                  <p>{movie.overview}</p>
                </DetailsItem>
                <DetailsItem>
                  <Title>Genres</Title>
                  <p>{movie.genres.map(genres => genres.name).join(', ')}</p>
                </DetailsItem>
              </DetailsList>
            </MovieCardContainer>
          </Section>
          <Section>
            <TitleAd>Additional information</TitleAd>
            <ListAd>
              <ListItemAd>
                <StyledLinkAd to={'cast'} state={{ from: backLink }}>
                  Cast
                </StyledLinkAd>
              </ListItemAd>
              <ListItemAd>
                <StyledLinkAd to={'reviews'} state={{ from: backLink }}>
                  Reviews
                </StyledLinkAd>
              </ListItemAd>
            </ListAd>
            <Suspense fallback={<div>Loading subpage...</div>}>
              <Outlet />
            </Suspense>
          </Section>
        </>
      )}
    </>
  );
};

export default MovieDetails;
