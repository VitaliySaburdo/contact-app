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
  background-color: white;
`;

export const Title = styled.h2`
  font-family: 'Poppins';
  font-weight: 600px;
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
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
`;

export const Text = styled.p`
  margin-top: 15px;
  font-family: 'Poppins';
  font-weight: 400px;
  font-size: 16px;
  text-align: center;
`;
export const Span = styled.span`
  margin-left: 5px;
`;
