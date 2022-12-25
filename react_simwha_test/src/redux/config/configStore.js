import { configureStore } from "@reduxjs/toolkit";
import user from "../modules/userSlice";
import modal from "../modules/modalSlice";

const store = configureStore({
  reducer: {
    user,
    modal,
  },
});

export default store;
