import styled from 'styled-components';

export const StyledSection = styled.section`
  padding-top: ${props => props.padTopSm || '20px'};
  padding-bottom: ${props => props.padBottomSM || '20px'};

  @media screen and (${props => props.theme.media.mdToLg}) {

    padding-top: ${props => props.padTopMd || '20px'};
    padding-bottom: ${props => props.padBottomMd || '20px'};
  }

  @media screen and (${props => props.theme.media.lg}) {
    padding-top: ${props => props.padTopLg || '20px'};
    padding-bottom: ${props => props.padBottomLg || '20px'};
  }
`;
