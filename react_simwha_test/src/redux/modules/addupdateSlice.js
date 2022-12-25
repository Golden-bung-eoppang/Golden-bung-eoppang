import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __addWriteThunk = createAsyncThunk(
  "ADD_WRITE", // action value
  async (payload, thunkAPI) => {
    // 콜백함수
    try {
      const { data } = await axios.post(`http://localhost:3001/posts`, payload);
      // console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getPostThunk = createAsyncThunk(
  "GET_TODO",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/posts`, payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const __updateTodoThunk = createAsyncThunk(
//   'UPDATE_TODO',
//   async (arg, thunkAPI) => {
//     try {
//       axios.patch(`http://localhost:3001/todos/${arg.id}`, arg);
//       return thunkAPI.fulfillWithValue(arg);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.code);
//     }
//   }
// );

const initialState = {
  posts: [],
  error: null, // 서버랑 통신 실패 시 나타내는 에러메세지 담아놓는 값
  isLoading: false, // 서버에서 posts를 가져오는 상태값
};

export const addupdateSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state) => {
      state.posts = {
        user_id: "miyoung",
        id: Date.now(),
        title: "",
        content: "",
        rate: "",
      };
    },
  },
  extraReducers: {
    [__addWriteThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__addWriteThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addWriteThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPostThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__getPostThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getPostThunk.pending]: (state) => {
      state.isLoading = true;
    },
    // [__updateTodoThunk.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.todo = action.payload;
    // },
    // [__updateTodoThunk.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__updateTodoThunk.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export const { addPost } = addupdateSlice.actions;
export default addupdateSlice.reducer;
