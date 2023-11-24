import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(2)};
  color: ${p => p.theme.colors.secondaryColor};
  background-color: ${p => p.theme.colors.primaryColor};
  border: 2px solid ${p => p.theme.colors.secondaryColor};
  border-radius: ${p => p.theme.radius};
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  transition: all ${p => p.theme.transition};

  &:hover {
    color: ${p => p.theme.colors.hoverColor};
    box-shadow: ${p => p.theme.shadow};
  }
`;
