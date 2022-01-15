import { publicRequest, userRequest } from '../requestMethods';
import { types } from '../types/types';

export const addProduct = (products) => ({
    type: types.addProduct,
    payload: products
})


export const deleteProduct = (id) => {
    return (dispatch) => {
        dispatch(deleteProductStart())
        userRequest.delete(`/products/${id}`)
            .then((res) => dispatch(deleteProductSuccess(id)))
            .catch(() => dispatch(deleteProductFailure()))
    }
}

const deleteProductStart = () => ({
    type: types.deleteProductStart
})

const deleteProductSuccess = (id) => ({
    type: types.deleteProductSuccess,
    payload: id
})

const deleteProductFailure = () => ({
    type: types.deleteProductFailure
})

export const getProducts = () => {
    return (dispatch) => {
        dispatch(getProductStart())
        publicRequest.get(`/products`)
            .then((res) => dispatch(getProductSuccess(res.data)))
            .catch(() => dispatch(getProductFailure()))
    }
};

const getProductStart = () => ({
    type: types.getProductStart
})

const getProductFailure = () => ({
    type: types.getProductFailure
})

const getProductSuccess = (products) => ({
    type: types.getProductSuccess,
    payload: products
})

export const getProductsByCat = (cat) => {
    return (dispatch) => {
        dispatch(getProductStart())
        publicRequest.get(`/products?category=${cat}`)
            .then((res) => dispatch(getProductSuccess(res.data)))
            .catch(() => dispatch(getProductFailure()))
    }
};

export const updateProduct = (id, product) => {
    return (dispatch) => {
        dispatch(updateProductStart())
        userRequest.put(`/products/${id}`)
            .then(() => dispatch(updateProductSuccess({id, product})))
            .catch(() => dispatch(updateProductFailure()))
    }
  };

    const updateProductStart = () => ({
        type: types.updateProductStart
    })
    
    const updateProductSuccess = (updated) => ({
        type: types.updateProductSuccess,
        payload: updated
    })
    
    const updateProductFailure = () => ({
        type: types.updateProductFailure
    })