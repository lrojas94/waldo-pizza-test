import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import idCounter from './id-counter.redux';

export default combineReducers({
    routing: routerReducer,
    idCounter,
});