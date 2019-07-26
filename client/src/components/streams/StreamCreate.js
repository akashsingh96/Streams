import React from 'react'
import {Field,reduxForm} from 'redux-form'
class  StreamCreate extends React.Component{

    renderInput(formProps){
        //console.log(formProps)
        return(
            <div className='fields'>
                <label>{formProps.label}</label>
                <input {...formProps.input}/>
            </div>
        
        )
    }
    onSubmit(formValues){
        console.log(formValues)
    }
    render(){
        return(
            <form className='ui form' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label='Enter Title'/>
                <Field name="description" component={this.renderInput} label='Enter Description'/>
                <button className='ui primary button'>Submit</button>
            </form>
        )
    }
}

export default reduxForm({
    form:'streamCreate'
})(StreamCreate)