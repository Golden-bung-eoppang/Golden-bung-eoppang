import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HomeSignModal from "./home/HomeSignModal";
import Weather from "../pages/Weather";
import Logo from "./Logo";
const Header = () => {
  const nagivate = useNavigate();
  const [isModal, setIsModal] = useState(true);

  return (
    <>
      <Button
        style={{ margin: "10px" }}
        onClick={() => {
          nagivate("/");
        }}
      >
        Home
      </Button>
      <Logo />
      {/* 로고는 이미지를 넣던지 수정해야됨.. */}
      <Weather />
    </>
  );
};

export default Header;
