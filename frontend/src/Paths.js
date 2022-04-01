import React, { Component } from 'react'
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";

import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';

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
                    <Route path="/home"></Route>
                    <Route exact path="/">
                        <Redirect to="/login" /> 
                    </Route>
                </Switch>
            </Router>
        )
    }
}