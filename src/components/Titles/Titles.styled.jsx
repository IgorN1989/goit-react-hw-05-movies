import styled from 'styled-components';

export const PageTitle = styled.h2`
  width: 230px;
  padding: ${p => p.theme.spacing(1)};
  color: ${p => p.theme.colors.secondaryColor};
  background-color: ${p => p.theme.colors.primaryColor};
  border: 2px solid ${p => p.theme.colors.secondaryColor};
  border-radius: ${p => p.theme.radius};
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
`;
