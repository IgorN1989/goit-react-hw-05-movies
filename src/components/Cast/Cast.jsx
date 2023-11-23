import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { fetchMovieCredits } from 'api/movie-api';

export const Cast = () => {
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
        // toast.success('We found movies!');
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getMovieCredits();
  }, [movieId]);

  console.log(cast);
  return (
    <div>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                alt={actor.name}
              />
              <h4>{actor.name}</h4>
              <p>{actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
