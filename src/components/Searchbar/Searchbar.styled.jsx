import styled from 'styled-components';

export const SearchbarContainer = styled.div`
  margin: ${p => p.theme.spacing(2)} auto;
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
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(2)};
  border-radius: ${p => p.theme.radius};
  background-color: ${p => p.theme.colors.primaryColor};
  transition: all ${p => p.theme.transition};
  text-align: center;
  display: block;
  color: ${p => p.theme.colors.secondaryColor};
  border: 2px solid ${p => p.theme.colors.secondaryColor};
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;

  &:hover {
    color: ${p => p.theme.colors.hoverColor};
    border-color: ${p => p.theme.colors.hoverColor};
    box-shadow: ${p => p.theme.shadow};
  }
`;
