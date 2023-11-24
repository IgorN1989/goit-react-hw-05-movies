import styled from 'styled-components';

export const MainInfo = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(4)};
  padding: ${p => p.theme.spacing(4)};
  background-color: ${p => p.theme.colors.primaryColor};
  border: 2px solid ${p => p.theme.colors.secondaryColor};
  border-radius: ${p => p.theme.radius};
`;

export const PosterWrapper = styled.div`
  border-radius: ${p => p.theme.radius};
  background-color: ${p => p.theme.colors.secondaryColor};
  overflow: hidden;
  min-width: 220px;
  height: 330px;
`;

export const Poster = styled.img`
  width: 100%;
  height: 330px;
  object-fit: cover;
`;

export const Description = styled.div`
  color: ${p => p.theme.colors.hoverColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MovieTitle = styled.h3`
  font-size: 32px;
`;

export const SectionTitle = styled.h4`
  color: ${p => p.theme.colors.secondaryColor};
  font-size: 16px;
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const AdditionalInfo = styled.div`
  background-color: tomato;
`;
