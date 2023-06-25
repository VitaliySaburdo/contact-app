import styled from 'styled-components';

export const StyledSection = styled.section`
  padding-top: ${props => props.padTopSm || '40px'};
  padding-bottom: ${props => props.padBottomSM || '40px'};

  @media screen and (${props => props.theme.media.md}) {
    height: calc(100vh - 96px);
    padding-top: ${props => props.padTopMd || '80px'};
    padding-bottom: ${props => props.padBottomMd || '80px'};
  }

  @media screen and (${props => props.theme.media.lg}) {
    height: calc(100vh - 88px);
    padding-top: ${props => props.padTopLg || '80px'};
    padding-bottom: ${props => props.padBottomLg || '80px'};
  }
`;
