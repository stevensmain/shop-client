import { createSlice } from "@reduxjs/toolkit";
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProductByCat,
  updateProduct,
} from "../services/products";

interface ProductsState {
  products: Product[];
  isFetching: boolean;
  error: boolean;
}

const initialState: ProductsState = {
  products: [
    {
      title: "T-shirt",
      desc: "T-shirt",
      price: 10,
      categories: [
        {
          id: 2,
          title: "T-shirt",
          cat: "t-shirt",
          img: "./",
        },
      ],
      colors: ["red", "blue"],
      inStock: true,
      sizes: ["M", "L"],
      id: 1,
      img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    },
    {
      title: "T-shirt",
      desc: "T-shirt",
      price: 10,
      categories: [
        {
          id: 2,
          title: "T-shirt",
          cat: "t-shirt",
          img: "./",
        },
      ],
      colors: ["red", "blue"],
      inStock: true,
      sizes: ["M", "L"],
      id: 1,
      img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    },
    {
      title: "T-shirt",
      desc: "T-shirt",
      price: 10,
      categories: [
        {
          id: 2,
          title: "T-shirt",
          cat: "t-shirt",
          img: "./",
        },
      ],
      colors: ["red", "blue"],
      inStock: true,
      sizes: ["M", "L"],
      id: 1,
      img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    },
  ],
  isFetching: false,
  error: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isFetching = false;
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state) => {
        state.isFetching = false;
        state.error = true;
      })
      .addCase(getProduct.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isFetching = false;
        state.products = action.payload;
      })
      .addCase(getProduct.rejected, (state) => {
        state.isFetching = false;
        state.error = true;
      })
      .addCase(getProductByCat.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getProductByCat.fulfilled, (state, action) => {
        state.isFetching = false;
        state.products = action.payload;
      })
      .addCase(getProductByCat.rejected, (state) => {
        state.isFetching = false;
        state.error = true;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isFetching = false;
        state.products.filter((product) => product.id !== action.payload.id);
      })
      .addCase(deleteProduct.rejected, (state) => {
        state.isFetching = false;
        state.error = true;
      })
      .addCase(updateProduct.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isFetching = false;
        const productIndex = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        state.products[productIndex] = action.payload;
      })
      .addCase(updateProduct.rejected, (state) => {
        state.isFetching = false;
        state.error = true;
      });
  },
});

export default productsSlice.reducer;
