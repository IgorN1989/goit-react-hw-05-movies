import styled from 'styled-components';

export const StyledButton = styled.button`
  margin: ${p => p.theme.spacing(4)} auto;
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(2)};
  border-radius: ${p => p.theme.radius};
  background-color: ${p => p.theme.colors.primaryColor};
  transition: all ${p => p.theme.transition};
  text-align: center;
  display: block;
  color: ${p => p.theme.colors.secondaryColor};
  border: 2px solid ${p => p.theme.colors.secondaryColor};
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  &:hover {
    color: ${p => p.theme.colors.hoverColor};
    border-color: ${p => p.theme.colors.hoverColor};
    box-shadow: ${p => p.theme.shadow};
  }
`;
