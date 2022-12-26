import { configureStore } from "@reduxjs/toolkit";
import user from "../modules/userSlice";
import modal from "../modules/modalSlice";
import addupdateSlice from "../modules/addupdateSlice";

const store = configureStore({
  reducer: {
    user,
    modal,
    addupdateSlice,
  },
});

export default store;
