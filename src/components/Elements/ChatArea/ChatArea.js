import React, { Component } from 'react';

class ChatArea extends Component {
    render() {
        return (
            <div class="chat">
            <div class="header bg-dark">
                <div class="nav">
                    <div class="profile-title">
                        <span class="profile-title-avatar">P</span>
                        <a class="profile-title-link ml-2" href="#">Priya</a>
                    </div>
                </div>
            </div>

            <div class="chat-section">
                chat-here
            </div>
        </div>
        );
    }
}

export default ChatArea;