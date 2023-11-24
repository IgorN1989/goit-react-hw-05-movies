import { StyledLink } from './SectionLink.styled';

export const SectionLink = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};
