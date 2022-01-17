import React from 'react'
import Product from "../pages/Product";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import NewProduct from "../pages/newProduct/NewProduct";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/product/add">
                    <NewProduct />
                </Route>
                <Route path="/product/edit/:id">
                    <NewProduct />
                </Route>
                <Route path="/products/:category">
                    <ProductList />
                </Route>
                <Route path="/product/:id">
                    <Product />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter
