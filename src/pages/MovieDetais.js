import { useEffect, useState, useRef } from 'react';

import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { IoMdReturnLeft } from 'react-icons/io';
import { BackLink, SectionLink } from 'components/Links/Links.styled';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage.styled';

import { fetchMovieDetails } from 'api/movie-api';

// ========================================================

const MovieDetais = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  const { movieId } = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchMovieDetails(movieId);
        setMovieDetails(response);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkLocationRef.current}>
        <IoMdReturnLeft size={24} />
        <p>Go back</p>
      </BackLink>
      {loading && <Loader />}
      {error && (
        <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
      )}
      {!error && <MovieInfo info={movieDetails}></MovieInfo>}
    </>
  );
};

export default MovieDetais;
