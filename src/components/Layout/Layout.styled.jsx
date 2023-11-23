import styled from 'styled-components';

export const ContentContainer = styled.main`
  outline: 1px solid green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${p => p.theme.spacing(6)} ${p => p.theme.spacing(3)};
`;
