import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;

  
`;
const Wrapper = styled.div`
    height: 30px;
    width: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  
`;
const Logo = styled.div`
  
`;
const NavItems = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 15px;
  
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Link to='/'>
          <Logo>PORTFOLIO</Logo>
        </Link>
          <NavItems>
            <Link to='/'>HOME</Link>
            <Link to='/register'>REGISTER</Link>
            <Link to='/login'>LOGIN</Link>
          </NavItems>
      </Wrapper>
    </Container>
  )
}

export default Navbar