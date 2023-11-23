import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { PageTitle } from 'components/Titles/Titles.styled';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage.styled';

import { fetchTrendingMovies } from 'api/movie-api';

// ========================================================

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchTrendingMovies();
        const fetchedMovies = response.results;
        setTrendingMovies(fetchedMovies);
      } catch (error) {
        setTrendingMovies([]);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getTrendingMovies();
  }, []);

  return (
    <>
      {!error && <PageTitle>Trending today</PageTitle>}
      {loading && <Loader />}
      {error && (
        <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
      )}
      {trendingMovies.length > 0 && (
        <MoviesList movies={trendingMovies} location={location} />
      )}
    </>
  );
}
