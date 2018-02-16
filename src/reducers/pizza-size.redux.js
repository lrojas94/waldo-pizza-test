import { handleActions } from 'redux-actions';

import {
    FETCH_SIZE,
    FETCH_SIZE_SUCCESS,
    FETCH_SIZE_ERROR,
} from '../constants/actions.const';

const initialState = {
    isLoading: false,
    size: null,
    error: null,
};

export default handleActions({
    [FETCH_SIZE]: state => ({
        isLoading: true,
        ...state,
    }),
    [FETCH_SIZE_SUCCESS]: (state, payload) => ({
        isLoading: false,
        error: null, // Clear out any errors.
        size: payload.size,
    }),
    [FETCH_SIZE_ERROR]: (state, payload) => ({
        isLoading: false,
        error: payload.error,
        size: [], // Clear out all size info...
    }),
}, initialState);
