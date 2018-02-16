import { handleActions } from 'redux-actions';

import {
    FETCH_SIZE,
    FETCH_SIZE_SUCCESS,
    FETCH_SIZE_ERROR,
} from '../constants/actions.const';

const initialState = {
    isLoading: false,
    details: null,
    error: null,
};

export default handleActions({
    [FETCH_SIZE]: state => ({
        ...state,
        isLoading: true,
    }),
    [FETCH_SIZE_SUCCESS]: (state, payload) => ({
        isLoading: false,
        error: null, // Clear out any errors.
        details: payload.details,
    }),
    [FETCH_SIZE_ERROR]: (state, payload) => ({
        isLoading: false,
        error: payload.error,
        details: null, // Clear out all size info...
    }),
}, initialState);
