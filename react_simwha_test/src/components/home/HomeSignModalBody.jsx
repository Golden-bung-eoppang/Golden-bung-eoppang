import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { signInUserThunk, signUpUserThunk } from "../../redux/modules/userSlice";
import HomeSignInput from "./HomeSignInput";

const HomeSignModalBody = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState("로그인");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const user = useSelector((state) => state.user);

  if (user.error) {
    alert(user.error);
  }

  const handleClick = () => {
    if (!id || !password) {
      return alert("모든 값을 입력해주세요");
    }
    if (status === "회원가입" && !username) {
      return alert("이름을 입력해주세요");
    }

    if (status === "로그인") {
      dispatch(signInUserThunk({ id, password }));
    } else {
      dispatch(signUpUserThunk({ id, password, username }));
    }
  };

  return (
    <Container>
      <Body>
        <h2>{status}</h2>
        <Wrapper>
          <Title>아이디</Title>
          <HomeSignInput value={id} setValue={setId} placeholder="아이디를 입력하세요." />
        </Wrapper>
        <Wrapper>
          <Title>비밀번호</Title>
          <HomeSignInput value={password} type="password" setValue={setPassword} placeholder="비밀번호를 입력하세요." />
        </Wrapper>
        {status === "회원가입" && (
          <Wrapper>
            <Title>이름</Title>
            <HomeSignInput value={username} setValue={setUsername} placeholder="이름을 입력하세요." />
          </Wrapper>
        )}
        <ButtonWrapper>
          <Button onClick={() => handleClick()}>{status}</Button>
        </ButtonWrapper>
      </Body>
      <Footer>
        <p>{status === "로그인" ? "아직 회원이 아니신가요?" : "계정이 이미 있으신가요?"}</p>
        <span onClick={() => setStatus(status === "로그인" ? "회원가입" : "로그인")}>{status === "로그인" ? "회원가입" : "로그인"}</span>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 80px;
  display: flex;
  flex-direction: column;
`;
const Body = styled.div`
  flex: 1;
`;
const Wrapper = styled.div`
  margin-bottom: 16px;
`;
const Title = styled.h4`
  margin-bottom: 10px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 40px;
`;
const Button = styled.button`
  background-color: #ffcd00;
  color: white;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 16px;
  width: 100px;
  height: 100%;
  cursor: pointer;
`;
const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  span {
    margin-left: 10px;
    color: #ffcd00;
    font-weight: bold;
    cursor: pointer;
  }
`;

export default HomeSignModalBody;
