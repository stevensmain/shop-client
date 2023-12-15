import { createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest, userRequest } from "../../requestMethods";

export const addProduct = createAsyncThunk("addProduct", async (product) => {
  const response = await userRequest.post(`/products`, product);
  return response.data;
});

export const updateProduct = createAsyncThunk(
  "updateProduct",
  async (id, product) => {
    const response = await userRequest.put(`/products/${id}`, product);
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk("deleteProduct", async (id) => {
  const response = await userRequest.delete(`/products/${id}`);
  return response.data;
});

export const getProduct = createAsyncThunk("getProducts", async () => {
  const response = await publicRequest.get(`/products`);
  return response.data;
});

export const getProductByCat = createAsyncThunk(
  "getProductsByCat",
  async (cat) => {
    const response = await publicRequest.get(`/products?category=${cat}`);
    return response.data;
  }
);
