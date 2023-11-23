import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchSearchMovies } from 'api/movie-api';
import toast from 'react-hot-toast';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { PageTitle } from 'components/Titles/Titles.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage.styled';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';

// ========================================================

export default function Movies() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') {
      setSearchMovies([]);
      return;
    }

    async function getSearchMovies() {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchSearchMovies(searchQuery, page);
        const totalResults = response.total_results;
        const fetchedMovies = response.results;
        setSearchMovies(prevState => [...prevState, ...fetchedMovies]);
        setTotal(totalResults);

        if (totalResults === 0) {
          toast('Sorry, there are no matching movies. Please try again.');
          return;
        }

        if (page === 1) {
          toast.success(`We found ${totalResults} movies!`);
        }
      } catch (error) {
        setError(true);
        toast.error('Please reload this page');
      } finally {
        setLoading(false);
      }
    }

    getSearchMovies();
  }, [searchQuery, page, setSearchParams]);

  const submitSearch = newQuery => {
    if (newQuery.trim() === '') {
      toast.error('Please, enter your search query.');
      return setSearchParams({});
    }

    if (newQuery === searchQuery) {
      return;
    }

    setSearchMovies([]);
    setPage(1);
    setSearchParams({ query: newQuery });
  };

  const increasePage = () => {
    setPage(prevState => prevState + 1);
  };

  const resetSearch = () => {
    setSearchMovies([]);
    setPage(1);
    setTotal(0);
    setSearchParams('');
  };

  return (
    <>
      <Searchbar
        onSubmitSearch={submitSearch}
        onResetSearch={resetSearch}
      ></Searchbar>
      {searchMovies.length > 0 && (
        <MoviesList movies={searchMovies} location={location} />
      )}
      {loading && <Loader />}
      {error && (
        <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
      )}
      {searchMovies.length > 0 && searchMovies.length < total && (
        <LoadMoreBtn onLoadMoreBtn={increasePage} text="Load more" />
      )}
    </>
  );
}
