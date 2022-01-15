import { types } from '../types/types';
import { publicRequest } from "../requestMethods";

export const login = (user) => {
    return (dispatch) => {
        dispatch(loginStart())
        publicRequest.post("/auth/login", user)
            .then((res)=> dispatch(loginSuccess(res.data)))
            .catch(() => dispatch(loginFailure()))
    }
}

const loginSuccess = (user) => ({
    type: types.loginSuccess,
    payload: user
});

const loginStart = () => ({
    type: types.loginStart
});

const loginFailure = () => ({
    type: types.loginFailure
});

export const register = (user) => {
    return (dispatch) => {
        dispatch(registerStart())
        publicRequest.post("/auth/register", user)
            .then(()=> dispatch(registerSuccess()))
            .catch(() => dispatch(registerFailure()))
    }
}

const registerSuccess = () => ({
    type: types.registerSuccess
});

const registerStart = () => ({
    type: types.registerStart
});

const registerFailure = () => ({
    type: types.registerFailure
});