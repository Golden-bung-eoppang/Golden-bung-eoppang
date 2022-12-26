import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signUpUserThunk = createAsyncThunk("user/signUpUser", async ({ id, password, username }, thunkAPI) => {
  try {
    const { data } = await axios.get(`http://localhost:3001/users?id=${id}`);
    if (data.length !== 0) {
      return thunkAPI.rejectWithValue("이미 사용중인 아이디입니다.");
    }
    const res = await axios.post(`http://localhost:3001/users`, { id, password, username });
    console.log(res);
    return thunkAPI.fulfillWithValue(res);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.code);
  }
});

export const signInUserThunk = createAsyncThunk("user/signInUser", async ({ id, password }, thunkAPI) => {
  try {
    const { data } = await axios.get(`http://localhost:3001/users?id=${id}&password=${password}`);
    return thunkAPI.fulfillWithValue(data);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.code);
  }
});

const initialState = {
  user: null,
  error: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    signOutUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: {
    [signUpUserThunk.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [signUpUserThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [signUpUserThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [signInUserThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [signInUserThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [signInUserThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { signOutUser } = userSlice.actions;
export default userSlice.reducer;
