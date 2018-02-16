import {
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    CLEAR_CART,
} from '../constants/actions.const'

import { incrementIdCounter } from './id-counter.actions';

export const addItemToCart = (pizzaItem) => (dispatch, getState) => {
    const currentState = getState();

    dispatch({
        type: ADD_ITEM_TO_CART,
        pizzaItem,
        id: currentState.idCounter,
    });

    dispatch(incrementIdCounter()); // Ensure we get diff. ids for all items. 
};

export const removeItemFromCart = (pizzaItemId) => dispatch => {
    dispatch({
        type: REMOVE_ITEM_FROM_CART,
        pizzaItemId,
    });
};

export const clearCart = () => dispatch => {
    dispatch({
        type: CLEAR_CART,
    });
}