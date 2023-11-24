import { IoMdReturnLeft } from 'react-icons/io';
import { StyledLink } from './BackLink.styled';

export const BackLink = ({ to }) => {
  return (
    <StyledLink to={to}>
      <IoMdReturnLeft size={24} />
      <p>Go back</p>
    </StyledLink>
  );
};
