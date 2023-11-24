import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(1)};
`;
export const ReviewsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(2)};
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(2)};
  background-color: ${p => p.theme.colors.primaryColor};
  border: 2px solid ${p => p.theme.colors.secondaryColor};
  border-radius: ${p => p.theme.radius};
`;

export const ReviewsAuthor = styled.h5`
  color: ${p => p.theme.colors.secondaryColor};
  font-size: 24px;
`;

export const ReviewsContent = styled.p`
  color: ${p => p.theme.colors.hoverColor};
  font-size: 16px;
`;

export const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.spacing(4)};
  background-color: ${p => p.theme.colors.primaryColor};
  border: 2px solid ${p => p.theme.colors.secondaryColor};
  border-radius: ${p => p.theme.radius};
  font-size: 24px;
  font-weight: 700;
  color: ${p => p.theme.colors.secondaryColor};
`;
