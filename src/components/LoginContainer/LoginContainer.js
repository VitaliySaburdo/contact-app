import { Circus, Container, Title, Img } from './LoginContainer.styled';
import img from '../../images/phones.png';

export const LoginContainer = () => {
  return (
    <>
      <Container>
        <Title>
          Quick creation of contacts, convenient menu, nice interface
        </Title>
        <Circus>
          <Img src={img} alt="phone" />
        </Circus>
      </Container>
    </>
  );
};
