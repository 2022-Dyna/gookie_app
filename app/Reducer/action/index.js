import * as types from './ActionTypes';

export const makeLogin = () =>{
    return {type:types.LOGIN,login:true};
};

export const makeLogout = () =>{
    return {type:types.LOGOUT,login:false};
};
