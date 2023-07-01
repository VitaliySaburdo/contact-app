import styled from 'styled-components';

export const StyledSection = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (${props => props.theme.media.md}) {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media screen and (${props => props.theme.media.lg}) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;
