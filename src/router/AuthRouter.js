import React from 'react'
import Register from "../pages/Register";
import Login from "../pages/Login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRouter = () => {
    const user = useSelector((state) => state.user.currentUser);
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    {user ? <Redirect to="/" /> : <Login />}
                </Route>
                <Route path="/register">
                    {user ? <Redirect to="/" /> : <Register />}
                </Route>
            </Switch>
        </Router>
    )
}

export default AuthRouter