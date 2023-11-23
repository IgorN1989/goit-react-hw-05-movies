import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${p => p.theme.spacing(2)};
  background-color: ${p => p.theme.colors.primaryColor};
  box-shadow: ${p => p.theme.shadow};
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
  padding: ${p => p.theme.spacing(1)};
  color: ${p => p.theme.colors.secondaryColor};
  font-size: 24px;

  transition: all ${p => p.theme.transition};
  &:hover {
    color: ${p => p.theme.colors.hoverColor};
  }
`;

export const MainTitle = styled.h1`
  font-size: 32px;
`;

export const NavList = styled.ul`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: ${p => p.theme.spacing(2)};
`;

export const NavPageLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
  padding: ${p => p.theme.spacing(1)};
  color: ${p => p.theme.colors.secondaryColor};
  font-size: 24px;
  font-weight: 700;

  transition: all ${p => p.theme.transition};

  &.active {
    color: ${p => p.theme.colors.tertiaryColor};
  }

  &:hover {
    color: ${p => p.theme.colors.hoverColor};
  }
`;
