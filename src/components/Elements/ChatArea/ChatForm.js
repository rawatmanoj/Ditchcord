import React, { Component } from 'react';
import io from 'socket.io-client';

class ChatForm extends Component {

   
    componentDidMount(){
          
        this.startSocket();
    
    }

    componentDidUpdate(){
        this.startSocket();
    }

    startSocket(){

        const ENDPOINT = 'localhost:5000' 
        let socket = io(ENDPOINT);

        socket.emit('join',{name:"manoj",room:"room1"});

    }


    render() {
        return (
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Type Your Message Here" />
                </div>
            </form>
        );
    }
}

export default ChatForm;