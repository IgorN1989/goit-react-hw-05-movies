import { List } from './MoviesList.styled';
import { MoviesListItem } from 'components/MoviesListItem/MoviesListItem';

export const MoviesList = ({ movies, location }) => {
  return (
    <List>
      {movies.map(movie => (
        <li key={movie.id}>
          <MoviesListItem movie={movie} location={location} />
        </li>
      ))}
    </List>
  );
};
