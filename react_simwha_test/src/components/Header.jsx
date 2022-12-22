import React, { useState } from "react";
import styled from "styled-components";
import HomeSignModal from "./home/HomeSignModal";

const Header = () => {
  const [isModal, setIsModal] = useState(true);
  return (
    <>
      nav
      {isModal && <HomeSignModal />}
    </>
  );
};

export default Header;
