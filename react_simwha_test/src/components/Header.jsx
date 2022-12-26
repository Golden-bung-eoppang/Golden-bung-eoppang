import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/modules/modalSlice";
import { setInitialState } from "../redux/modules/userSlice";
import HomeSignModal from "./home/HomeSignModal";

const Header = () => {
  const dispatch = useDispatch();
  const { user, modal } = useSelector((state) => state);
  const isUser = user.user;

  return (
    <>
      {!isUser && <button onClick={() => dispatch(openModal())}>sign</button>}
      {isUser && <button onClick={() => dispatch(setInitialState())}>signOut</button>}
      {modal && <HomeSignModal />}
    </>
  );
};

export default Header;
