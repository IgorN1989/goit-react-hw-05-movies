import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage.styled';

import {
  ReviewsContainer,
  ReviewsList,
  ReviewsCard,
  ReviewsAuthor,
  ReviewsContent,
  Message,
} from './Reviews.styled';

import { fetchMovieReviews } from 'api/movie-api';

// ========================================================

export default function Reviews() {
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

  return (
    <>
      {loading && <Loader />}
      {error && (
        <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
      )}
      {(reviews.length > 0 && (
        <ReviewsContainer>
          <ReviewsList>
            {reviews.map(review => (
              <li key={review.id}>
                <ReviewsCard>
                  <ReviewsAuthor>{review.author}</ReviewsAuthor>
                  <ReviewsContent>{review.content}</ReviewsContent>
                </ReviewsCard>
              </li>
            ))}
          </ReviewsList>
        </ReviewsContainer>
      )) || <Message>We don`t have any reviews for this movie.</Message>}
    </>
  );
}
