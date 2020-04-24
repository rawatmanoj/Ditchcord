    import React, { Component } from 'react';
    import {reduxForm,Field} from 'redux-form';
    import {connect} from 'react-redux';
    import { sendMessage } from '../../../store/message/actions';


    class ChatForm extends Component {

       
        renderInput(props){
           // console.log(props);
            return(
                <div className="form-group">
                    <input type="text" className="form-control" {...props.input} />
                </div>
            ) 

        }

        onSubmit=(formValue)=>{
            
          this.props.sendMessage(formValue.sendMesssage);
        
          this.props.reset();

         
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
      
    })(connect(null,{sendMessage})(ChatForm));