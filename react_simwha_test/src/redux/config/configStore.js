import { configureStore } from "@reduxjs/toolkit";
import addupdateSlice from '../modules/addupdateSlice';

const store = configureStore({
  reducer: {addupdateSlice},
});

export default store;
