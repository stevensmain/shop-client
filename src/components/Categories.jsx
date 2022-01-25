import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}

`;

const Categories = ({ search }) => {

  const filtredCategories = categories.filter(category =>
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
