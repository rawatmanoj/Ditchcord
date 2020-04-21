    import React, { Component } from 'react';
    import SideBar from './Sidebar/Sidebar'
    import ChatArea from './ChatArea/ChatArea';
  
    class Home extends Component {
        render() {
            return (
                <div className="app-container">
                    <SideBar/>
                    <ChatArea/>
                </div>
            );
        }
    }

    export default Home;