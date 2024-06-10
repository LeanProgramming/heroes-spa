import { IAuthAction, IAuthState, types } from '../types';

const initialState ={
    logged: false,
}

export const authReducer = (state: IAuthState = initialState, action: IAuthAction) => {


    switch(action.type) {

        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload,
            };

        case types.logout:
            return {
                logged:false,
            };

        default:
            return state;
    }
}