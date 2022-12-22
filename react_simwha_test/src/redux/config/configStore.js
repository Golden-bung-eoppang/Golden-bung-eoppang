import { configureStore } from "@reduxjs/toolkit";
import user from "../modules/userSlice";
import todos from "../modules/todosSlice";
import comments from "../modules/commentsSlice";
import comment from "../modules/commentSlice";
import todo from "../modules/todoSlice";

const store = configureStore({
  reducer: {
    user,
    todos,
    comments,
    comment,
    todo,
  },
});

export default store;
