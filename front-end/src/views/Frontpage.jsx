import styled from 'styled-components';
import Navbar from './Navbar'
import Promo from './Promo';

const Container = styled.div`
  height: 100vh;
`;

const Frontpage = () => {
  return (
    <Container>
        <Promo />
        <Navbar />
    </Container>
  )
}

export default Frontpage