import { Link, useSearchParams } from "react-router-dom";
import { Search } from "@mui/icons-material";
import styled from "styled-components";

import { device } from "../styles/MediaQueries";

const Container = styled.div`
  height: 60px;
  @media ${device.mobile} {
    height: 50px;
  }
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${device.mobile} {
    flex-direction: column;
    padding: 10px 0px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  @media ${device.mobile} {
    display: none;
  }
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
  @media ${device.mobile} {
    width: 50px;
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  a {
    text-decoration: none;
  }
`;

const Logo = styled.h1`
  font-weight: bold;
  @media ${device.mobile} {
    font-size: 24px;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  a {
    text-decoration: none;
  }
  @media ${device.mobile} {
    flex: 2;
    justify-content: center;
  }
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  @media ${device.mobile} {
    font-size: 12px;
    margin-left: 10px;
  }
`;

const Navbar = () => {
  const [, setSearch] = useSearchParams();

  const onSearch = (value: string) => {
    const search = new URLSearchParams();
    search.set("keyword", value);

    setSearch(search);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>

          <SearchContainer>
            <Input
              placeholder="Search"
              onChange={(e) => onSearch(e.target.value)}
            />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>

        <Center>
          <Link to="/">
            <Logo>SHOP</Logo>
          </Link>
        </Center>

        <Right>
          <Link to="/product/add">
            <MenuItem>ADD PRODUCT</MenuItem>
          </Link>
          <Link to="/register">
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>SIGN IN</MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
