import { findBySizeName } from '../services/apollo.service';

import {
    FETCH_SIZE,
    FETCH_SIZE_SUCCESS,
    FETCH_SIZE_ERROR,
} from '../constants/actions.const';

export const fetchSizeByName = (name) => async dispatch => {
    dispatch({
        type: FETCH_SIZE, // This should trigger a loading state.
    });
    
    try {
        const queryResult = await findBySizeName(name);

        const { data: { pizzaSizeByName }  } = queryResult;

        dispatch({
            type: FETCH_SIZE_SUCCESS,
            details: pizzaSizeByName,
        });
    } catch (err) {
        console.log(err); // There was an error... here
        dispatch({
            type: FETCH_SIZE_ERROR,
            error: err,
        });
    }
};