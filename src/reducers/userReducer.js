import { types } from '../types/types';

const initialState = {
    currentUser: null,
    isFetching: false,
    error: false,
}

export const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.loginStart:
            return {
                ...state,
                isFetching: true
            }

        case types.loginSuccess:
            return {
                ...state,
                isFetching: false,
                currentUser: action.payload
            }

        case types.loginFailure:
            return {
                ...state,
                isFetching: false,
                error: true
            }

        case types.registerStart:
            return {
                ...state,
                isFetching: true
            }

        case types.registerSuccess:
            return {
                ...state,
                isFetching: false
            }

        case types.registerFailure:
            return {
                ...state,
                isFetching: false,
                error: true
            }

        default:
            return state;
    }
}