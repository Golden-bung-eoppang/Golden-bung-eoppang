import { configureStore } from "@reduxjs/toolkit";
import comments from "../modules/commentsSlice";
import user from "../modules/userSlice";
import posts from "../modules/postViewSlice";
import modal from "../modules/modalSlice";
import addupdateSlice from "../modules/addupdateSlice";
import mainupdateSlice from "../modules/mainupdateSlice";

const store = configureStore({
  reducer: {
    comments,

    user,
    posts,
    modal,
    addupdateSlice,
    mainupdateSlice,
  },
});

export default store;
