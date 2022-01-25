import { useEffect, useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}

`;

const Categories = ({ search }) => {

  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await publicRequest.get("/categories");
        setCats(res.data);
      } catch (error){ console.log(error)}
    };
    getCategories();
  }, []);

  const filtredCategories = cats.filter(category =>
    category.cat.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Container>
      {filtredCategories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
