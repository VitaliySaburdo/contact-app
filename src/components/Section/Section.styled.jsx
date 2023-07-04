import styled from 'styled-components';

export const StyledSection = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (${props => props.theme.media.md}) {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  @media screen and (${props => props.theme.media.lg}) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;
