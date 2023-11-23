import styled from 'styled-components';

export const Wrapper = styled.div`
  outline: 2px solid red;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3)};
  padding-bottom: ${p => p.theme.spacing(2)};
  margin-bottom: ${p => p.theme.spacing(2)};
  margin-right: ${p => p.theme.spacing(2)};
  border-bottom: 2px solid ${p => p.theme.colors.secondaryColor};
`;

export const MainInfo = styled.div`
  outline: 12px solid green;
  display: flex;
  /* flex-direction: row;
  flex-wrap: wrap; */
`;

export const Poster = styled.img`
  border-radius: ${p => p.theme.radius};
  width: 240px;
  height: 360px;
  object-fit: cover;

  outline: 2px solid yellow;
`;

export const Description = styled.div`
  outline: 2px solid yellow;
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
