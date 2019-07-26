import React from 'react'
import {Field,reduxForm} from 'redux-form'
class  StreamCreate extends React.Component{

    renderError({error,touched}){
        if(error && touched){
        return (
            <div className='ui error message'>
                <div className='header'>{error}</div>
            </div>
        )
        }
    }

    renderInput=({label,input,meta})=>{
        //console.log(meta)
        return(
            <div className='field error'>
                <label>{label}</label>
                <input {...input} autoComplete='off'/>
                {this.renderError(meta)}
            </div>
        
        )
    }
    onSubmit(formValues){
        console.log(formValues)
    }
    render(){
        return(
            <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label='Enter Title'/>
                <Field name="description" component={this.renderInput} label='Enter Description'/>
                <button className='ui primary button'>Submit</button>
            </form>
        )
    }
}

const validate=formValues=>{
    const errors={}
    if(!formValues.title)
    errors.title='Please enter the title'
    if(!formValues.description)
    errors.description='Please enter the description'
    return errors
}

export default reduxForm({
    form:'streamCreate',
    validate
})(StreamCreate)