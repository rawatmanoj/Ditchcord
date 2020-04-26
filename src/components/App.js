import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from './Elements/Login/Login';
import Home from './Elements/index';
import './Styles/main.scss';
import {fetchUser} from '../store/auth/authAction';
import {connect} from 'react-redux';

class App extends React.Component { 

    componentDidMount(){
        this.props.fetchUser();
    }


render(){
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
}
};

export default connect(null,{fetchUser})(App);