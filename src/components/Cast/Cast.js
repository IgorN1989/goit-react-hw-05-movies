import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage.styled';
import {
  CastList,
  ActorCard,
  PhotoContainer,
  Photo,
  Names,
  ActorName,
  CharacterName,
} from './Cast.styled';

import { fetchMovieCredits } from 'api/movie-api';

// ========================================================

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getMovieCredits() {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchMovieCredits(movieId);
        setCast(response.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getMovieCredits();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && (
        <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
      )}
      {cast.length > 0 && (
        <CastList>
          {cast.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <ActorCard>
                <PhotoContainer>
                  {profile_path && (
                    <Photo
                      src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                      alt={name}
                      loading="lazy"
                    />
                  )}
                </PhotoContainer>

                <Names>
                  <ActorName>{name}</ActorName>
                  <CharacterName>{character}</CharacterName>
                </Names>
              </ActorCard>
            </li>
          ))}
        </CastList>
      )}
    </>
  );
}
