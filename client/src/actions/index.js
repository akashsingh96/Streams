import {SIGN_IN,SIGN_OUT} from './types'

export const trySignIn=(userId)=>{
    return {
        type:SIGN_IN,
        payload:userId
    }
}

export const trySignOut=(userId)=>{
    return{
        type:SIGN_OUT
    }
}