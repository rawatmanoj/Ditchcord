import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="login-box">
                    <h1 className="login-box-heading">Ditchcord</h1>
                    <div className="login-box-divider"></div>
                    <button className="btn btn-dark">
                        <i className="fab fa-google mr-3"></i>
                       <a href="/auth/google">Login with Google</a> 
                    </button>
                </div>
            </div>
        );
    }
}

export default Login;