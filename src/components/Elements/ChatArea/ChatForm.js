import React, { Component } from 'react';
import io from 'socket.io-client';

class ChatForm extends Component {

   
    componentDidMount(){
          
        const ENDPOINT = 'localhost:5000' 
        let socket = io(ENDPOINT);

        console.log(socket);
    }


    render() {
        return (
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Type Your Message Here" />
                </div>
            </form>
        );
    }
}

export default ChatForm;