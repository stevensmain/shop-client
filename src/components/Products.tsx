import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { RootState } from "../redux/store";
import {
  getProduct,
  getProductByCat as getProductsByCat,
} from "../redux/services/products";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

interface Props {
  search?: string;
  sort?: string;
  filters?: Filter;
  cat?: string;
}

type Filter = Record<string, string>;

const Products = ({ cat, filters, sort, search = "" }: Props) => {
  const { products } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const filteredProducts = useMemo(() => {
    const searchProducts = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

    const sortProductBy = (a: Product, b: Product) => {
      if (sort === "asc") return a.price - b.price;
      return b.price - a.price;
    };

    if (sort) {
      return [...searchProducts].sort((a, b) => sortProductBy(a, b));
    }

    if (filters) {
      return searchProducts.filter((product) =>
        Object.entries(filters).find(([key, value]) =>
          product[key].includes(value as string)
        )
      );
    }

    return searchProducts;
  }, [products, search, sort, filters]);

  useEffect(() => {
    if (cat) {
      dispatch(getProductsByCat(cat));
    } else {
      dispatch(getProduct());
    }
  }, [cat, dispatch]);

  return (
    <Container>
      {filteredProducts.slice(0, 8).map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Products;
