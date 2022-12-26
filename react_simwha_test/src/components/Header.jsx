import React from "react";
import styled from "styled-components";
import Weather from "../pages/Weather";
import Logo from "./Logo";
const Header = () => {
  return (
    <>
      <Logo />
      {/* 로고는 이미지를 넣던지 수정해야됨.. */}
      <Weather />
    </>
  );
};

export default Header;
