import { handleActions } from 'redux-actions';

import {
    COMPLETE_ORDER,
} from '../constants/actions.const';

/**
 * Array for cart items.
 */
const initialState = [];

export default handleActions({
    [COMPLETE_ORDER]: (state, payload) => {
        const {
            order, 
        } = payload;

        return [
            ...state,
            order,
        ];
    },
}, initialState);
