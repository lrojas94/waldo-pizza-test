import { handleActions } from 'redux-actions';

import {
    INCREMENT_ID_COUNTER,
} from '../constants/actions.const';

const initialState = 0;

export default handleActions({
    [INCREMENT_ID_COUNTER]: state => state + 1,
}, initialState);
