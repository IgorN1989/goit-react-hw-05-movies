import {
  MainInfo,
  Poster,
  Description,
  MovieTitle,
  SectionTitle,
  Text,
  PosterWrapper,
} from './MovieInfo.styled';

export const MovieInfo = ({
  movie: {
    poster_path,
    title,
    release_date = '----',
    vote_average = 0,
    overview,
    genres = [],
    runtime,
  },
}) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const releaseYear = release_date.slice(0, 4);
  const userScore = Math.round(vote_average * 10);
  const genresStr = genres.map(genre => genre.name).join(', ');

  return (
    <MainInfo>
      <PosterWrapper>
        {poster_path && <Poster src={posterUrl} alt="title" />}
      </PosterWrapper>
      <Description>
        <MovieTitle>
          {title} ({releaseYear})
        </MovieTitle>
        <div>
          <SectionTitle>User Score:</SectionTitle>
          <Text>{userScore}%</Text>
        </div>
        <div>
          <SectionTitle>Overview</SectionTitle>
          <Text>{overview}</Text>
        </div>
        <div>
          <SectionTitle>Genres</SectionTitle>
          <Text>{genresStr}</Text>
        </div>
        <div>
          <SectionTitle>Runtime</SectionTitle>
          <Text>{runtime} min.</Text>
        </div>
      </Description>
    </MainInfo>
  );
};
