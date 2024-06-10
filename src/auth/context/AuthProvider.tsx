import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { IAuthAction, IAuthState, types } from '../types'

const initialState: IAuthState = {};

const init = () => {
    const user = JSON.parse(localStorage.getItem('user')!);

    return {
        logged: !!user,
        user: user,
    }
};

export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer( authReducer, initialState, init );

    const login = (name = '') => {
        const user = {id:'ABC', name};
        const action: IAuthAction = { type: types.login, payload: user,}

        localStorage.setItem('user', JSON.stringify(user));

        dispatch( action )
    };

    const logout = () => {
        localStorage.removeItem('user');
        
        const action = {type: types.logout, payload: {}};
        
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            login: login,
            logout: logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
