import { configureStore } from "@reduxjs/toolkit";
import user from "../modules/userSlice";
import posts from "../modules/postViewSlice";
import comments from "../modules/commentsSlice";

const store = configureStore({
  reducer: { user, posts, comments },
});

export default store;
