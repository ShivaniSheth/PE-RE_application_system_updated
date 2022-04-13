import React, { Component } from 'react'
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";

import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Home from './Pages/Home/Home';
import HomeFaculty from './Pages/Home/HomeFaculty';

export default class Paths extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/register">
                        <Register />
                    </Route>

                    <Route path="/home">
                        <Home />
                    </Route>

                    <Route path="/home_faculty">
                        <HomeFaculty />
                    </Route>
                    
                    <Route exact path="/">
                        <Redirect to="/login" /> 
                    </Route>
                </Switch>
            </Router>
        )
    }
}