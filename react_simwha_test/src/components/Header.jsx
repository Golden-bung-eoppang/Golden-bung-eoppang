import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { openModal } from "../redux/modules/modalSlice";
import { setInitialState } from "../redux/modules/userSlice";
import HomeSignModal from "./home/HomeSignModal";
import inga from "../img/inga_bbang.jpg";
import Weather from "../pages/Weather";
import Logo from "./Logo";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, modal } = useSelector((state) => state);
  const isUser = user.user;

  const handleWrite = () => {
    if (user.user) {
      return navigate("/write");
    }
    return dispatch(openModal());
  };

  return (
    <HeaderBox>
      {!isUser && <button onClick={() => dispatch(openModal())}>sign</button>}
      {isUser && (
        <button onClick={() => dispatch(setInitialState())}>signOut</button>
      )}
      {modal && <HomeSignModal />}
      <Button
        style={{ margin: "10px" }}
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </Button>
      <Logo />
      {/* 로고는 이미지를 넣던지 수정해야됨.. */}
      <Weather />
    </HeaderBox>
  );
};

const HeaderBox = styled.div`
  background-image: url(${inga});
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 330px;
`;

export default Header;
