import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import idCounter from './id-counter.redux';
import cart from './cart.redux';
import pizzaSizes from './pizza-sizes.redux';
import pizzaSize from './pizza-size.redux';

export default combineReducers({
    routing: routerReducer,
    idCounter,
    cart,
    pizzaSizes,
    pizzaSize,
});