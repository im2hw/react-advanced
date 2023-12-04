import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const isLogin = action.payload;
      return state.filter((user) => user.id === isLogin);
    },
    signupUser: (state, action) => {
      const newUser = action.payload;
      return [newUser, ...state];
    },
  },
});

export const { signupUser, loginUser } = authorSlice.actions;

export default authorSlice.reducer;
