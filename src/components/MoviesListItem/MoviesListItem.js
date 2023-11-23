import { Link } from 'react-router-dom';
import { BiSolidLike } from 'react-icons/bi';
import {
  MovieContainer,
  MoviePoster,
  MovieInfo,
  AdditionalInfo,
  Score,
} from './MoviesListItem.styled';

export const MoviesListItem = ({
  movie: { id, title, backdrop_path, poster_path, release_date, vote_average },
  location,
}) => {
  const releaseYear = release_date.slice(0, 4);
  const userScore = Math.round(vote_average * 10);
  const posterUrl = backdrop_path
    ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
    : `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <Link to={`/movies/${id}`} state={{ from: location }}>
      <MovieContainer>
        {(backdrop_path || poster_path) && (
          <MoviePoster src={posterUrl} alt={title} loading="lazy" />
        )}

        <MovieInfo>
          <p>{title}</p>
          <AdditionalInfo>
            <p>({releaseYear})</p>
            <Score>
              <BiSolidLike size={18} />
              <span>{userScore} %</span>
            </Score>
          </AdditionalInfo>
        </MovieInfo>
      </MovieContainer>
    </Link>
  );
};
