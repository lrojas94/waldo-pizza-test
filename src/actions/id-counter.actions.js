import { client } from '../services/apollo.service';

import {
    INCREMENT_ID_COUNTER,
} from '../constants/actions.const'

export const incrementIdCounter = () => async dispatch => {
    dispatch({
        type: INCREMENT_ID_COUNTER,
    });
};