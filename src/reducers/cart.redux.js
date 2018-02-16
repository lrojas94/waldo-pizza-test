import { handleActions } from 'redux-actions';

import {
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
} from '../constants/actions.const';

/**
 * Array for cart items.
 */
const initialState = [];

export default handleActions({
    [ADD_ITEM_TO_CART]: (state, payload) => {
        const {
            pizzaItem, 
            id,
        } = payload;

        const newPizzaItem = {
            ...pizzaItem,
            id,
        };

        return [
            ...state,
            newPizzaItem,
        ];
    },
    [REMOVE_ITEM_FROM_CART]: (state, payload) => {
        const {
            pizzaItemId, 
        } = payload;

        const indexOfItem = state.findIndex(pizzaItem => pizzaItem.id === pizzaItemId);

        if (indexOfItem === -1) {
            // Item not found:
            console.log(`REMOVE_ITEM_FROM_CART :: Pizza Item not found: ${pizzaItemId}`);
            return state;
        }

        return [
            ...state.slice(0, indexOfItem),
            ...state.slice(indexOfItem + 1),
        ];
    },
}, initialState);
