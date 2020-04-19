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
                <div>Or Bhai </div>
            </div>
        </div>
        <div className="message-box">
            <div className="sender-avatar">S</div>
            <div className="message">
                <div>
                    <span className="font-weight-bold">Somnath</span>
                    <small className="ml-2 text-muted">6:10pm</small>
                </div>
                <div>Mai Librandu mha gandu.(not to forget kunal kamra ka tatta)</div>
            </div>
        </div>
        <div className="message-box">
            <div className="sender-avatar">S</div>
            <div className="message">
                <div>
                    <span className="font-weight-bold">Somnath</span>
                    <small className="ml-2 text-muted">6:10pm</small>
                </div>
                <div>Mai Librandu mha gandu.(not to forget kunal kamra ka tatta)</div>
            </div>
        </div>
        <div className="message-box">
            <div className="sender-avatar">S</div>
            <div className="message">
                <div>
                    <span className="font-weight-bold">Somnath</span>
                    <small className="ml-2 text-muted">6:10pm</small>
                </div>
                <div>Mai Librandu mha gandu.(not to forget kunal kamra ka tatta)</div>
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