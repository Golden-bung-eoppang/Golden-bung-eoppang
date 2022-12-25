import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/modules/modalSlice";
import HomeSignModal from "./home/HomeSignModal";

const Header = () => {
  const dispatch = useDispatch();
  const signModal = useSelector(({ modal }) => modal);

  return (
    <>
      <button onClick={() => dispatch(openModal())}>sign</button>
      {signModal && <HomeSignModal />}
    </>
  );
};

export default Header;
