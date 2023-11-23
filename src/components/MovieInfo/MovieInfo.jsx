import {
  Wrapper,
  Poster,
  Description,
  MovieTitle,
  SectionTitle,
  Text,
} from './MovieInfo.styled';

//   release_date,
//   vote_average,
//   overview,
//   genres,
//   runtime,
// }

export const MovieInfo = ({
  info: {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
    runtime,
  },
}) => {
  // const releaseYear = release_date.slice(0, 4);
  // const userScore = Math.round(vote_average * 10);
  // const genresStr = genres.map(genre => genre.name).join(', ');

  return (
    <Wrapper>
      <Poster
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="info.title"
      />
      <Description>
        <MovieTitle>
          {title}
          {/* {releaseYear} */}
        </MovieTitle>
        <div>
          <SectionTitle>
            {/* User Score: <Text>{userScore}</Text> */}
          </SectionTitle>
        </div>
        <div>
          <SectionTitle>Overview</SectionTitle>
          <Text>{overview}</Text>
        </div>
        <div>
          <SectionTitle>Genres</SectionTitle>
          {/* <Text>{genresStr}</Text> */}
        </div>
        <div>
          <SectionTitle>Runtime</SectionTitle>
          <Text>{runtime} min.</Text>
        </div>
      </Description>
    </Wrapper>
  );
};
