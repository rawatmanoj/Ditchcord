import React, { Component } from 'react';
import { connect } from 'react-redux';
import { connectSocket, disconnectSocket } from '../../../../store/socket/action';

class channels extends Component {

    onClickHandle = ()=>{
       this.props.connectSocket();
       
    }



    render() {
        return (
            <>
                    <div className="nav-header"><small><button onClick={this.onClickHandle}>#Channels</button></small></div>
                    
                    <div className="nav-item"><a className="nav-link" href="/#">TGS</a></div>
                    <div className="nav-item"><a className="nav-link" href="/#">General</a></div>
                    <div className="nav-item"><a className="nav-link" href="/#">Random</a></div>
                    <div className="nav-item"><a className="nav-link" href="/#">Blahhh</a></div>
            </>
        );
    }
}



export default connect(null,{connectSocket,disconnectSocket})(channels);