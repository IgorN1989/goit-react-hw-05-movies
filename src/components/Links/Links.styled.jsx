import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  padding: 8px;
  margin-bottom: ${p => p.theme.spacing(3)};
  border: 2px solid ${p => p.theme.colors.secondaryColor};
  border-radius: ${p => p.theme.radius};
  font-size: 18px;
  color: ${p => p.theme.colors.secondaryColor};
  transition: all ${p => p.theme.transition};

  &:hover {
    color: ${p => p.theme.colors.hoverColor};
    border-color: ${p => p.theme.colors.hoverColor};
    box-shadow: ${p => p.theme.shadow};
  }
`;

export const SectionLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  padding: 8px;
  margin-bottom: ${p => p.theme.spacing(2)};

  font-size: 18px;
  color: ${p => p.theme.colors.secondaryColor};
  transition: all ${p => p.theme.transition};

  &.active {
    color: ${p => p.theme.colors.tertiaryColor};
    font-weight: 700;
  }

  &:hover {
    color: ${p => p.theme.colors.hoverColor};
    /* transform: scale(1.05); */
  }
`;
