import { useState } from 'react';

import { ModalComponent } from 'components/Modal/Modal';

import {
  MainInfo,
  Poster,
  Description,
  MovieTitle,
  SectionTitle,
  Text,
  PosterWrapper,
} from './MovieInfo.styled';

export const MovieInfo = ({
  movie: {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
    runtime,
  },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const releaseYear = release_date ? `(${release_date.slice(0, 4)})` : '';
  const userScore = vote_average ? Math.round(vote_average * 10) : 0;
  const genresStr = genres ? genres.map(genre => genre.name).join(', ') : [];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <MainInfo>
      <PosterWrapper>
        {poster_path && (
          <Poster src={posterUrl} alt="title" onClick={openModal} />
        )}
      </PosterWrapper>
      <Description>
        <MovieTitle>
          {title} {releaseYear}
        </MovieTitle>
        <div>
          <SectionTitle>User Score:</SectionTitle>
          <Text>{userScore}%</Text>
        </div>
        <div>
          <SectionTitle>Overview</SectionTitle>
          <Text>{overview}</Text>
        </div>
        <div>
          <SectionTitle>Genres</SectionTitle>
          <Text>{genresStr}</Text>
        </div>
        <div>
          <SectionTitle>Runtime</SectionTitle>
          <Text>{runtime} min.</Text>
        </div>
      </Description>
      <ModalComponent
        isOpen={isModalOpen}
        onCloseModal={closeModal}
        image={posterUrl}
        alt={title}
      />
    </MainInfo>
  );
};
