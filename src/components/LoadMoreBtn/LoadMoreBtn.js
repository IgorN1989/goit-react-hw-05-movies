import { StyledButton } from './LoadMoreBtn.styled';

export const LoadMoreBtn = ({ onLoadMoreBtn, text }) => (
  <StyledButton type="button" onClick={onLoadMoreBtn}>
    {text}
  </StyledButton>
);
