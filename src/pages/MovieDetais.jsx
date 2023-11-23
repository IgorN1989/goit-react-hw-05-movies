import { useEffect, useState, useRef } from 'react';

import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { IoMdReturnLeft } from 'react-icons/io';
import { BackLink, SectionLink } from 'components/Links/Links.styled';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

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
      <BackLink to={backLinkLocationRef.current}>
        <IoMdReturnLeft size={24} />
        <p>Go back</p>
      </BackLink>
      <MovieInfo info={movieDetails} />
      <ul>
        <li>
          <SectionLink to="cast">Cast</SectionLink>
        </li>
        <li>
          <SectionLink to="reviews">Reviews</SectionLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
