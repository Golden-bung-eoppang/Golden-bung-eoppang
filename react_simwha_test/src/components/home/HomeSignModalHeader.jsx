import styled from "styled-components";

const HomeSignModalHeader = () => {
  return (
    <Container>
      <CancelButton>X</CancelButton>
    </Container>
  );
};

const Container = styled.div`
  background: #f5f5f5;
  padding: 0 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-radius: 8px 8px 0 0;
  height: 3rem;
`;
const CancelButton = styled.div`
  cursor: pointer;
`;

export default HomeSignModalHeader;
