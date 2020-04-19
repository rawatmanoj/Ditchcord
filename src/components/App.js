import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
// import Login from './Login';
import Home from './Elements/index';

const App = () => {
    return (
        <div>
        <BrowserRouter>
            <div>
                
                {/* <Route exact path="/"  component={Login} /> */}
                <Route exact path="/" component={Home}  />
            </div>
        </BrowserRouter>
        </div>
    );
};

export default App;