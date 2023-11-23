import { SiThemoviedatabase } from 'react-icons/si';
import {
  StyledHeader,
  LogoLink,
  MainTitle,
  NavList,
  NavPageLink,
} from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <LogoLink to="/">
        <SiThemoviedatabase size={48} />
        <MainTitle>MovieSearch</MainTitle>
      </LogoLink>

      <nav>
        <NavList>
          <li>
            <NavPageLink to="/">Home</NavPageLink>
          </li>
          <li>
            <NavPageLink to="/movies">Movies</NavPageLink>
          </li>
        </NavList>
      </nav>
    </StyledHeader>
  );
};
