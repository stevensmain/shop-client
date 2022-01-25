import { types } from '../types/types';

const initialState = {
    products: [],
    isFetching: false,
    error: false,
}

export const productsReducer = (state = initialState, action) => {

    switch (action.type) {
        //DELETE
        case types.deleteProductStart:
            return {
                ...state,
                isFetching: true,
                error: false
            }

        case types.deleteProductSuccess:
            return {
                ...state,
                isFetching: false,
                products: state.products.filter( product=> product._id !== action.payload)
            }
        case types.deleteProductFailure:
            return {
                ...state,
                isFetching: false,
                error: true
            }

        //GET ALL
        case types.getProductStart:
            return {
                ...state,
                isFetching: true,
                error: false
            }

        case types.getProductSuccess:
            return {
                ...state,
                isFetching: false,
                products: action.payload
            }

        case types.getProductFailure:
            return {
                ...state,
                isFetching: false,
                error: true
            }

        //UPDATE
        case types.updateProductStart:
            return {
                ...state,
                isFetching: true,
                error: false
            }

        case types.updateProductSuccess:
            return {
                ...state,
                isFetching: false,
                products: state.products[
                    state.products.findIndex((item) => item._id === action.payload.id)
                ] = action.payload.product
            }

        case types.updateProductFailure:
            return {
                ...state,
                isFetching: false,
                error: true
            }

        //ADD
        case types.addProductStart:
            return {
                ...state,
                isFetching: true,
                error: false
            }

        case types.addProductSuccess:
            return {
                ...state,
                isFetching: false,
                products: [...state.products, action.payload]
            }

        case types.addProductFailure:
            return {
                ...state,
                isFetching: false,
                error: true
            }

        default:
            return state;
    }
}