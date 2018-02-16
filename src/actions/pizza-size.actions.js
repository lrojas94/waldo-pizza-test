import { client } from '../services/apollo.service';

import {
    FETCH_SIZE,
    FETCH_SIZE_SUCCESS,
    FETCH_SIZE_ERROR,
} from '../constants/actions.const'

import {
    PIZZA_BY_SIZE_NAME,
} from '../constants/query.const';

export const fetchSizeByName = (name) => async dispatch => {
    dispatch({
        type: FETCH_SIZE, // This should trigger a loading state.
    });

    try {
        const queryResult = await client.query({
            query: PIZZA_BY_SIZE_NAME,
            variables: {
                name,
            },
        });

        const { data: { pizzaSizes }  } = queryResult;
        dispatch({
            type: FETCH_SIZE_SUCCESS,
            pizzaSizes,
        });
    } catch (err) {
        console.log(err); // There was an error... ehre
        dispatch({
            type: FETCH_SIZE_ERROR,
            error: err,
        });
    }
};