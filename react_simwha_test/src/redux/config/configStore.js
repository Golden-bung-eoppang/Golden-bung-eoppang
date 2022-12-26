import { configureStore } from "@reduxjs/toolkit";
import user from "../modules/userSlice";
import posts from "../modules/postViewSlice";

const store = configureStore({
  reducer: { user, posts },
});

export default store;
