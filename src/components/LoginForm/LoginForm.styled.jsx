import styled from 'styled-components';
import { Field } from 'formik';

export const Form = styled.form`
  margin-left: auto;
  padding-top: 70px;
  padding-left: 80px;
  padding-right: 80px;
`;

export const Box = styled.div`
  width: 620px;
  margin-left: auto;
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.second};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: 19px;
  text-align: center;
  padding: 0 0 60px 0;
`;

export const Input = styled(Field)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  width: 93%;
  border: 1px solid ${p => p.theme.colors.btnBorderColor};
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  background-color: ${p => p.theme.colors.primaryColor};
`;

export const Text = styled.p`
  margin-top: 15px;
  font-family: ${p => p.theme.fonts.second};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fonts.mainFontSize};
  text-align: center;
`;
export const Span = styled.span`
  margin-left: 5px;
`;
