import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { fetchMovieReviews } from 'api/movie-api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    async function getMovieReviews() {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchMovieReviews(movieId);

        setReviews(response.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getMovieReviews();
  }, [movieId]);

  console.log(reviews);

  return (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <div>
              <p style={{ color: 'tomato' }}>{review.author}</p>
              <p>{review.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
