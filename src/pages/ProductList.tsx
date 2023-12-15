import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { publicRequest } from "../requestMethods";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";

import { device } from "../styles/MediaQueries";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  @media ${device.mobile} {
    width: 20px;
    display: flex;
    flex-direction: column;
  }
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  @media ${device.mobile} {
    margin-right: 0;
  }
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  @media ${device.mobile} {
    margin: 10px 0;
  }
`;
const Option = styled.option``;

const ProductList = () => {
  const [cats, setCats] = useState([]);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      const res = await publicRequest.get("/categories");
      setCats(res.data);
    };

    getCategories();
  }, []);

  const handleChange = (e) => {
    navigate(`/products/${e.target.value}`);
  };

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Title>{category}</Title>

      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>

          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>

          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Category:</FilterText>

          <Select onChange={handleChange}>
            {cats.map((cat) => (
              <Option value={cat.cat}>{cat.cat}</Option>
            ))}
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sort Products:</FilterText>

          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products cat={category} filters={filters} sort={sort} />

      <Footer />
    </Container>
  );
};

export default ProductList;
