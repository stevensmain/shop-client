import { createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest } from "../../requestMethods";

export const loginUser = createAsyncThunk("loginUser", async (user) => {
  const response = await publicRequest.post("/auth/login", user);
  return response.data;
});

export const registerUser = createAsyncThunk("registerUser", async (user) => {
  const response = await publicRequest.post("/auth/register", user);
  return response.data;
});
