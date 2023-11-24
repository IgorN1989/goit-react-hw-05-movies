import styled from 'styled-components';

export const SearchbarContainer = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(2)};
`;

export const SearchbarForm = styled.form`
  display: flex;
  gap: ${p => p.theme.spacing(2)};
  font-size: 24px;
`;

export const SearchbarInput = styled.input`
  border: 2px solid ${p => p.theme.colors.secondaryColor};
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(2)};
  border-radius: ${p => p.theme.radius};
  transition: all ${p => p.theme.transition};
  outline: none;
  background-color: ${p => p.theme.colors.primaryColor};
  color: white;

  &:focus {
    box-shadow: ${p => p.theme.shadow};
  }
`;

export const SearchbarBtn = styled.button`
  display: flex;
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(2)};
  color: ${p => p.theme.colors.secondaryColor};
  background-color: ${p => p.theme.colors.primaryColor};
  border: 2px solid ${p => p.theme.colors.secondaryColor};
  border-radius: ${p => p.theme.radius};
  transition: all ${p => p.theme.transition};

  cursor: pointer;

  &:hover {
    color: ${p => p.theme.colors.hoverColor};
    box-shadow: ${p => p.theme.shadow};
  }
`;
