import styled from 'styled-components';

export const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.spacing(4)};
  background-color: ${p => p.theme.colors.primaryColor};
  border: 2px solid ${p => p.theme.colors.secondaryColor};
  border-radius: ${p => p.theme.radius};
  font-size: 24px;
  font-weight: 700;
  color: ${p => p.theme.colors.errorColor};
`;
