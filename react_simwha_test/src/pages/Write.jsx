import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Editor from '../components/Editor';
const Write = () => {
  return (
    <Layout>
      <StyledP>✏️ 우리동네의 붕어빵 맛집을 알려주세요.</StyledP>
      <WirteContainer>
        <StyledInput placeholder='제목을 입력해주세요.' />
        <Editor />
      </WirteContainer>
      <Flex>
        <AddButton>등록</AddButton>
      </Flex>
    </Layout>
  );
};

const WirteContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledP = styled.p`
  font-size: 24px;
  border-bottom: 3px solid #f2d589;
  padding: 0 0 15px 15px;
  margin: 0 0 60px;
  font-weight: 700;
`;

const StyledInput = styled.input`
  border: 1px solid #e1e3e8;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  padding: 0 52px 0 16px;
  line-height: 44px;
  height: 56px;
  width: 100%;
  &:focus{
    outline: none;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 60px;
`;

const AddButton = styled.button`
  font-size: 17px;
  width: 100px;
  height: 40px;
  border: none;
  background-color: #f2d589;
  font-weight: 600;
  &:hover{
    cursor: pointer;
  }
  &:active{
    width: 95px;
    height: 35px;
  }
`

export default Write;
