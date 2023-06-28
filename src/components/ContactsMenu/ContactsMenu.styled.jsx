import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  height: 650px;
`;

export const FormContainer = styled.div`
  height: 460px;
  padding: 20px;
  border: 1px solid;
  border-radius: 8px;
  border-color: ${p => p.theme.colors.mainBorderColor};
  box-shadow: ${p => p.theme.shadows.secondShadow};
`;
