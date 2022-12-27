import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const __getPostViewThunk = createAsyncThunk(
  "GET_POSTS",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/posts${id}`);
      return thunkAPI.fulfillWithValue(data); //action.payload이다.
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __deletePost = createAsyncThunk(
  "DELETE_POST",
  async (arg, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/posts/${arg}`);
      console.log(arg);
      return thunkAPI.fulfillWithValue(arg);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);
// export const __updateTodoThunk = createAsyncThunk(
//   "UPDATE_TODO",
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
  error: null,
  isLoading: false,
  detailPost: null,
};

export const postViewSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    clearPosts: (state) => {
      state.posts = {
        user_id: "",
        id: uuidv4(),
        rate: "",
        title: "",
        content: "",
        read: 0,
      };
    },
  },
  extraReducers: {
    [__getPostViewThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detailPost = action.payload;
    },
    [__getPostViewThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getPostViewThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [__deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detailPost = action.payload;
      console.log("action", action.payload);
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { clearPosts } = postViewSlice.actions;
export default postViewSlice.reducer;
