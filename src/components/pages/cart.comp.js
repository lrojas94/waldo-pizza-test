import React from 'react';
import PropTypes from 'prop-types';
import OrderOverview from '../common/order-overview.comp';

class Cart extends React.Component {
    static propTypes = {
        cart: PropTypes.array.isRequired,
        removeItemFromCart: PropTypes.func.isRequired,
        placeOrder: PropTypes.func.isRequired,
    };

    static defaultProps = {
        placeOrder: () => {},
    };

    render() {
        const { 
            cart,
            removeItemFromCart,
            placeOrder,
        } = this.props;

        const renderOrderOverview = cart && cart.length !== 0;

        return (
            <div className="full-container cart">
                <h1> Your Shopping Cart </h1>
                <br/>
                <p> 
                    Here you'll find pizzas you have prepared so far. Note that until you order them,
                    they will <strong> not </strong> in your Orders Page.
                    <br/>
                    <br/>
                    You can remove items in case you don't want them anymore, but note that after you{'\''}ve 
                    ordered them, there's no way to take them back.
                </p>
                <br/>
                { renderOrderOverview && <OrderOverview order={cart} removeItemMethod={removeItemFromCart} /> }
                { renderOrderOverview && (
                    <div className="cart__order">
                        <button className="button--red" onClick={placeOrder}>
                            Place Your Order
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

export default Cart;
