import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(3)};
  padding-bottom: ${p => p.theme.spacing(2)};
  margin-bottom: ${p => p.theme.spacing(2)};
  border-bottom: 2px solid ${p => p.theme.colors.secondaryColor};
`;

export const Poster = styled.img`
  border-radius: ${p => p.theme.radius};
  width: 240px;
  height: auto;
  object-fit: cover;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(4)};
  /* justify-content: space-between; */
`;

export const MovieTitle = styled.h2`
  font-size: 32px;
`;

export const SectionTitle = styled.h3`
  font-size: 18px;
`;

export const Text = styled.p`
  font-size: 14px;
`;
