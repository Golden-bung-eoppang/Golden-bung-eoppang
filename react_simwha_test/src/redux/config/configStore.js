import { configureStore } from "@reduxjs/toolkit";
import user from "../modules/userSlice";
import posts from "../modules/postViewSlice";
import modal from "../modules/modalSlice";
import addupdateSlice from "../modules/addupdateSlice";

const store = configureStore({
  reducer: {
    user,
    posts,
    modal,
    addupdateSlice,
  },
});

export default store;
