import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: ${p => p.theme.spacing(4)};
  padding: 0;
  margin-top: ${p => p.theme.spacing(2)};
  margin-right: ${p => p.theme.spacing(2)};
`;
