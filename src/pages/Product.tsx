import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DeleteOutlineOutlined, UpdateOutlined } from "@mui/icons-material";
import styled from "styled-components";

import { publicRequest } from "../requestMethods";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { device } from "../styles/MediaQueries";
import { deleteProduct } from "../redux/services/products";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  @media ${device.mobile} {
    padding: 10px;
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  @media ${device.mobile} {
    height: 40vh;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  @media ${device.mobile} {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Category = styled.h2`
  font-weight: 600;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  @media ${device.mobile} {
    width: 100%;
  }
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${device.mobile} {
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const res = await publicRequest.get<Product>("/products/find/" + id);
      setProduct(res.data);
    };

    getProduct();
  }, [id]);

  const handleClick = () => {
    dispatch(deleteProduct(id));
    navigate("/");
  };
  return (
    <Container>
      <Navbar />

      <Wrapper>
        <ImgContainer>
          <Image src={product?.img} />
        </ImgContainer>

        <InfoContainer>
          <Title>{product?.title}</Title>
          <Category>{product?.categories.join(", ")}</Category>
          <Desc>{product?.desc}</Desc>
          <Price>$ {product?.price}</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>

              {product?.colors.map((c) => (
                <FilterColor color={c} key={c} />
              ))}
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>

              <FilterSize>
                {product?.sizes?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <Button onClick={handleClick}>
              Delete
              <DeleteOutlineOutlined />
            </Button>

            <Link to={`/product/edit/${id}`}>
              <Button>
                Edit
                <UpdateOutlined />
              </Button>
            </Link>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Product;
