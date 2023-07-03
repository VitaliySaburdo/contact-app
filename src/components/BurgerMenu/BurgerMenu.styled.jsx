import styled from 'styled-components';

export const Burger = styled.div`
  position: relative;
  z-index: 1000;
  @media screen and (${props => props.theme.media.md}) {
    display: none;
  }
`;

// backdrop
export const Box = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  background-color: ${props => props.theme.colors.clearWhite};



  @media screen and (${props => props.theme.media.md}) {
    display: none;
  }
`;

export const BoxUser = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 82px;
  margin-bottom: 40px;
  @media screen and (${props => props.theme.media.md}) {
    display: none;
  }

`;
