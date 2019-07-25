import React from 'react'
import {connect} from 'react-redux'

import {trySignIn,trySignOut} from '../actions'

class GoogleAuth extends React.Component{
    //state={isSignedIn:null}

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'627999848638-ra2pd4qvre05kf5a3rufloq1t2h5poge.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth= window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange=isSignedIn=>{
        if(isSignedIn){
            return this.props.trySignIn(this.auth.currentUser.get().getId())
            //when state was defined inside the GoogleAuth Component
            //return this.setState({isSignedIn:true}) 
        }
        else {
            return this.props.trySignOut()
            //return this.setState({isSignedIn:false})
        }
    }

    onSignInClick=()=>{
        this.auth.signIn()
    }

    onSignOutClick=()=>{
        this.auth.signOut()
    }

    renderAuthButton(){
        if(this.props.isSignedIn===null){
            return null
        }
        else if(this.props.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className='ui red google button'>
                    <i className='google icon'/>
                        Sign out
                </button>
                
            )
        }
        else return (
            <div>
                <button onClick={this.onSignInClick} className='ui red google button'>
                    <i className='google icon'/>
                    Sign it with google
                </button>
            </div>
            )
    }

    render(){
        return(
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {isSignedIn:state.auth.isSignedIn}
}

export default connect(mapStateToProps,{trySignIn,trySignOut})(GoogleAuth)
