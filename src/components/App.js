import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Login from './Elements/Login/Login';
import Home from './Elements/index';
import './Styles/main.scss'
const App = () => {
    return (
        <div>
        <BrowserRouter>
            <div>
                
                <Route exact path="/"  component={Login} />
                <Route exact path="/home" component={Home}  />
                
            </div>
        </BrowserRouter>
        </div>
    );
};

export default App;