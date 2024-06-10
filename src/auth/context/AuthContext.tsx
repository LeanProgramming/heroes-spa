import { createContext } from 'react';
import { IAuthContext } from '../types';

const initialContext: IAuthContext = {};

export const AuthContext = createContext(initialContext);

