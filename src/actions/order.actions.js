import {
    COMPLETE_ORDER,
} from '../constants/actions.const'

import { incrementIdCounter } from './id-counter.actions';
import { clearCart } from './cart.actions';

export const completeOrder = () => (dispatch, getState) => {
    const currentState = getState();
    const order = currentState.cart;
    order.id = currentState.idCounter;

    dispatch({
        type: COMPLETE_ORDER,
        order,
    });
    dispatch(clearCart()); // Ensure the cart is cleared out.
    dispatch(incrementIdCounter()); // Ensure we get diff. ids for all items. 
};