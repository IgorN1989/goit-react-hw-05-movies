import { SiThemoviedatabase } from 'react-icons/si';
import { StyledHeader, NavList, NavPageLink } from './Header.styled';
import { MainTitle } from 'components/Titles/Titles.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <NavPageLink to="/">
        <SiThemoviedatabase size={48} color="rgb(144, 206, 161)" />
        <MainTitle>MovieSearch</MainTitle>
      </NavPageLink>

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
