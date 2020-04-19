    import React, { Component } from 'react';
    import io from 'socket.io-client';
    import {reduxForm,Field} from 'redux-form';
    import {connect} from 'react-redux';

    class ChatForm extends Component {

        // componentDidMount(){
            
        //     this.startSocket();
        
        // }

        componentDidUpdate(){
            const ENDPOINT = 'localhost:5000' ;

            this.socket = io(ENDPOINT);
        }

      

        renderInput(props){
             console.log(props);
            return(
                <div className="form-group">
                    <input type="text" className="form-control" {...props.input} />
                </div>
            ) 

        }

        render() {

            console.log(this.props);
           
            return (
                // <form onSubmit={this.onSubmit} >
                //     <div className="form-group">
                //         <input type="text" className="form-control"  value={this.state.value} onChange={this.onChange} />
                //     </div>
                // </form>
                <form>
                    <Field name="sendMesssage" component={this.renderInput} />
                </form>
            );
        }
    }

    export default reduxForm({
        form:'sendChats'
    })(ChatForm);