    import React, { Component } from 'react';
    import io from 'socket.io-client';
    import {reduxForm,Field} from 'redux-form';
    import {connect} from 'react-redux';

    class ChatForm extends Component {

      

        componentDidMount(){
            const ENDPOINT = 'localhost:5000';

            this.socket = io(ENDPOINT);
        }

      

        renderInput(props){
           // console.log(props);
            return(
                <div className="form-group">
                    <input type="text" className="form-control" {...props.input} />
                </div>
            ) 

        }

        onSubmit=(formValue)=>{
            
          //console.log(formValue.sendMesssage);
          this.socket.emit('send message',formValue.sendMesssage);
          this.props.reset();

          this.socket.on('send message',(msg)=>console.log(msg));
        }

        

        render() {

         //console.log(this.props);
           
            return (
                
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="sendMesssage" component={this.renderInput} />
                </form>
            );
        }
    }

    const validate = formValues =>{
         
        const errors= {};

         if(!formValues.sendMesssage){

          errors.sendMesssage="enter a message";

         }

         return errors;
    }

    export default reduxForm({
        form:'sendChats',
        validate,
      
    })(ChatForm);