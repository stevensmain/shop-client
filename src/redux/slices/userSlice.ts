import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../services/user";

interface userState {
  currentUser: User | null;
  isFetching: boolean;
  error: boolean;
}

const initialState: userState = {
  currentUser: {
    accessToken: "",
  },
  isFetching: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isFetching = false;
        state.currentUser = action.payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isFetching = false;
        state.error = true;
      })
      .addCase(registerUser.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isFetching = false;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isFetching = false;
        state.error = true;
      });
  },
});

export default userSlice.reducer;
