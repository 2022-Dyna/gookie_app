import {LOGIN,LOGOUT} from '../action/ActionTypes';

const initialState = {
    login: false
};

export default (state = initialState, action={}) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                login: action.login,
            };
        case LOGOUT:
            return {
                ...state,
                login: action.login,
            };
        default:
            return state;
    }
};

