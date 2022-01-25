import React, { useState } from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Home = () => {

  const [search, setSearch] = useState('')
  
  return (
    <div>
      <Navbar setSearch={setSearch} search={search}/>
      <Categories search={search}/>
      <Products search={search}/>
      <Footer />
    </div>
  );
};

export default Home;
