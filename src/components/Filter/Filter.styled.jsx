import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Input = styled(TextField)`
width: 220px;
@media screen and (${p => p.theme.media.md}) {
  width: 250px;
}
@media screen and (${p => p.theme.media.lg}) {
  width: 420px;
}
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  margin-top: 15px;
`;
