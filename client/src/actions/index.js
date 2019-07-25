import {SIGN_IN,SIGN_OUT} from './types'

export const trySignIn=()=>{
    return {
        type:SIGN_IN
    }
}

export const trySignOut=()=>{
    return{
        type:SIGN_OUT
    }
}