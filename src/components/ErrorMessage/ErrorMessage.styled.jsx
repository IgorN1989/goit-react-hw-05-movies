import styled from 'styled-components';

export const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.spacing(4)};
  font-size: 24px;
  color: ${p => p.theme.colors.errorColor};
`;
