import styled from 'styled-components';

export const StyledButton = styled.button`
  margin: ${p => p.theme.spacing(2)} auto;
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(2)};
  border-radius: ${p => p.theme.radius};
  background-color: ${p => p.theme.colors.primaryColor};
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(2)};
  text-align: center;
  display: block;
  color: ${p => p.theme.colors.secondaryColor};
  border: 2px solid ${p => p.theme.colors.secondaryColor};
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 24px;
  font-weight: 700;
  min-width: 230px;
  transition: all ${p => p.theme.transition};
  &:hover {
    color: ${p => p.theme.colors.hoverColor};
    box-shadow: ${p => p.theme.shadow};
  }
`;
