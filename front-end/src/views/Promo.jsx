import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #03befc;
`;
const Msg = styled.span`
    padding: 5px;
    font-weight: 500;
    font-size: 14px;
    color: #FFF;
`;
const Promo = () => {
  return (
    <Container>
        <Msg>
            Black Friday specilas -50% on every purchased items
        </Msg>
    </Container>
  )
}

export default Promo