
export interface IAuthContext {
    logged?: boolean;
    user?: IAuthUser;
    login?: (name:string) => void;
    logout?: () => void;
}

export interface IAuthState {
    user?: IAuthUser;
    logged?: boolean;
}

export interface IAuthAction {
    type: string;
    payload: IAuthUser;
}

export interface IAuthUser {
    id?: string;
    name?: string;
}