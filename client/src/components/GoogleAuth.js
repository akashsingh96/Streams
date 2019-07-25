import React from 'react'

class GoogleAuth extends React.Component{
    state={isSignedIn:null}
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'627999848638-ra2pd4qvre05kf5a3rufloq1t2h5poge.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth= window.gapi.auth2.getAuthInstance()
                this.setState({isSignedIn:this.auth.isSignedIn.get()})
            })
        })
    }
    renderAuthButton(){
        if(this.state.isSignedIn){
            return <div>SignedIn</div>
        }
        else if(this.state.isSignedIn===null){
            return <div>Dont have an idea</div>
        }
        else return (<div>SignedOut</div>)
    }
    render(){
        return(
            <div>{this.renderAuthButton()}</div>
        )
    }
}

export default GoogleAuth