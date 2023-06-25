import styled from 'styled-components';

export const StyledSection = styled.section`
  /
  padding-top: ${props => props.padTopSm || '40px'};
  padding-bottom: ${props => props.padBottomSM || '40px'};

  @media screen and (${props => props.theme.media.mdToLg}) {

    padding-top: ${props => props.padTopMd || '40px'};
    padding-bottom: ${props => props.padBottomMd || '40px'};
  }

  @media screen and (${props => props.theme.media.lg}) {
    /
    padding-top: ${props => props.padTopLg || '40px'};
    padding-bottom: ${props => props.padBottomLg || '40px'};
  }
`;
