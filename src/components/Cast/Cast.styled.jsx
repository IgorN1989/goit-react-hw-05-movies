import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(1)};
`;

export const ActorCard = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(2)};
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(2)};
  background-color: ${p => p.theme.colors.primaryColor};
  border: 2px solid ${p => p.theme.colors.secondaryColor};
  border-radius: ${p => p.theme.radius};
`;

export const PhotoContainer = styled.div`
  border-radius: ${p => p.theme.radius};
  background-color: ${p => p.theme.colors.secondaryColor};
  overflow: hidden;
  width: 100px;
  height: 150px;
`;

export const Photo = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Names = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(4)};
  color: ${p => p.theme.colors.hoverColor};
`;

export const ActorName = styled.h5`
  font-size: 24px;
`;

export const CharacterName = styled.p`
  color: ${p => p.theme.colors.secondaryColor};
  font-size: 18px;
  font-style: italic;
`;
