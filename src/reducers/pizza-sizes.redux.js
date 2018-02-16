import { handleActions } from 'redux-actions';

import {
    FETCH_ALL_SIZES,
    FETCH_ALL_SIZES_SUCCESS,
    FETCH_ALL_SIZES_ERROR,
} from '../constants/actions.const';

const initialState = {
    isLoading: false,
    sizes: [],
    error: null,
};

export default handleActions({
    [FETCH_ALL_SIZES]: state => ({
        isLoading: true,
        ...state,
    }),
    [FETCH_ALL_SIZES_SUCCESS]: (state, payload) => ({
        isLoading: false,
        error: null, // Clear out any errors.
        sizes: payload.sizes,
    }),
    [FETCH_ALL_SIZES_ERROR]: (state, payload) => ({
        isLoading: false,
        error: payload.error,
        sizes: [], // Clear out all sizes.. Sorry, but we cannot process the order.
    }),
}, initialState);
