import { configureStore } from "@reduxjs/toolkit";
import user from "../modules/userSlice";
import addupdateSlice from "../modules/addupdateSlice";

const store = configureStore({
  reducer: { user, addupdateSlice },
});

export default store;
