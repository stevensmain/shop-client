import { useEffect, useState } from "react";
import styled from "styled-components";

import { publicRequest } from "../requestMethods";
import CategoryItem from "./CategoryItem";

import { device } from "../styles/MediaQueries";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  @media ${device.mobile} {
    padding: 0px;
    flex-direction: column;
  }
`;

const Categories = () => {
  const [cats, setCats] = useState<Category[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await publicRequest.get<Category[]>("/categories");
        setCats(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

  return (
    <Container>
      {cats.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </Container>
  );
};

export default Categories;
