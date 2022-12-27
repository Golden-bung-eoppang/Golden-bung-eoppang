import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
        id: Date.now(),
        rate: "",
        title: "",
        content: "",
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

export const { clearPosts } = postViewSlice.actions;
export default postViewSlice.reducer;
