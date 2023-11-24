import { Suspense, useEffect, useState, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { FaMasksTheater } from 'react-icons/fa6';
import { MdRateReview } from 'react-icons/md';

import { BackLink } from 'components/BackLink/BackLink';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Loader } from 'components/Loader/Loader';
import { MovieContainer } from 'components/Layout/Layout.styled';
import { SectionLink } from 'components/SectionLink/SectionLink';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage.styled';

import { fetchMovieDetails } from 'api/movie-api';

// ========================================================

export default function MovieDetais() {
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getMovieDetails() {
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
    }

    getMovieDetails();
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkLocationRef.current} />
      {loading && <Loader />}
      {(!error && (
        <MovieContainer>
          <MovieInfo movie={movieDetails} />{' '}
          <SectionLink to="cast">
            Cast <FaMasksTheater size={24} />
          </SectionLink>
          <SectionLink to="reviews">
            Review <MdRateReview size={24} />
          </SectionLink>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </MovieContainer>
      )) || (
        <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
      )}
    </>
  );
}
