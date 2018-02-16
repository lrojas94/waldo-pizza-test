import { findAllSizes } from '../services/apollo.service';

import {
    FETCH_ALL_SIZES,
    FETCH_ALL_SIZES_SUCCESS,
    FETCH_ALL_SIZES_ERROR,
} from '../constants/actions.const'

export const fetchAllSizes = () => async dispatch => {
    dispatch({
        type: FETCH_ALL_SIZES, // This should trigger a loading state.
    });

    
    try {
        const queryResult = await findAllSizes();

        const { data: { pizzaSizes }  } = queryResult;
        dispatch({
            type: FETCH_ALL_SIZES_SUCCESS,
            sizes: pizzaSizes,
        });
    } catch (err) {
        console.log(err); // There was an error :(
        dispatch({
            type: FETCH_ALL_SIZES_ERROR,
            error: err,
        });
    }
};