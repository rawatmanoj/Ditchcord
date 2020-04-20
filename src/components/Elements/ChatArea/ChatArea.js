    import React, { Component } from 'react';
    import ChatForm from './ChatForm';
    class ChatArea extends Component {
        render() {
            return (
                <div className="chat">
                <div className="header bg-dark">
                    <div className="nav">
                        <div className="profile-title">
                            <span className="profile-title-avatar">S</span>
                            <a className="profile-title-link ml-2" href="/#">Somnath</a>
                        </div>
                    </div>
                </div>

                <div className="chat-section">
                <div className="messages">
        
        <div className="message-box">
            <div className="sender-avatar">N</div>
            <div className="message">
                <div>
                    <span className="font-weight-bold">Niket</span>
                    <small className="ml-2 text-muted">6:10pm</small>
                </div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
        </div>
      
      
      
     
    </div>
            <ChatForm/>
                </div>
            </div>
            );
        }
    }

    export default ChatArea;