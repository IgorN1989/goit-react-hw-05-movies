import styled from 'styled-components';

export const MovieContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 240px;
  border: 2px solid ${p => p.theme.colors.primaryColor};
  border-radius: ${p => p.theme.radius};

  background-image: linear-gradient(
    to bottom,
    rgba(1, 180, 228, 0.5),
    rgba(144, 206, 161, 0.5)
  );

  transition: all ${p => p.theme.transition};

  &:hover {
    border-color: ${p => p.theme.colors.secondaryColor};
    box-shadow: ${p => p.theme.shadow};
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

export const MovieInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;
  padding: ${p => p.theme.spacing(1)};
  min-height: 80px;
  z-index: 1;
  bottom: 0;
  left: 0;
  color: ${p => p.theme.colors.hoverColor};
  font-size: 18px;
  width: 100%;
  background-color: rgb(13, 37, 63, 0.5);
`;

export const AdditionalInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Score = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${p => p.theme.spacing(1)};
`;
