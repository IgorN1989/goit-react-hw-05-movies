import styled from 'styled-components';

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${p => p.theme.spacing(4)};
  gap: ${p => p.theme.spacing(2)};
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(2)};
`;
