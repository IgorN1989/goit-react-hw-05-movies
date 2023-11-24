import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
  padding: ${p => p.theme.spacing(1)};
  color: ${p => p.theme.colors.secondaryColor};
  background-color: ${p => p.theme.colors.primaryColor};
  border: 2px solid ${p => p.theme.colors.secondaryColor};
  border-radius: ${p => p.theme.radius};
  font-size: 24px;
  font-weight: 700;

  transition: all ${p => p.theme.transition};

  &.active {
    color: ${p => p.theme.colors.tertiaryColor};
    border-color: ${p => p.theme.colors.tertiaryColor};
  }

  &:hover {
    color: ${p => p.theme.colors.hoverColor};
    box-shadow: ${p => p.theme.shadow};
    border-color: ${p => p.theme.colors.secondaryColor};
  }
`;
