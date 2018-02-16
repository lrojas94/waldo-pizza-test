import React from 'react';
import PropTypes from 'prop-types';
import { removeItemFromCart } from '../../actions/cart.actions';

class OrderOverview extends React.Component {
    static propTypes = {
        order: PropTypes.array.isRequired,
        removeItemMethod: PropTypes.func,
    };

    renderToppings(sizeDetails, selectedToppings) {
        const { toppings } = sizeDetails;
        return toppings.map((toppingItem) => {
            const { topping } = toppingItem;
            if (!selectedToppings[topping.name]) {
                return null;
            }

            return (
                <li key={topping.name}>{topping.name}</li>
            );
        });
    }

    renderRemoveItem(itemId) {
        const {
            removeItemMethod,
        } = this.props;

        if (!removeItemMethod) {
            return null;
        }

        return (
            <button className="button--red" onClick={() => removeItemMethod(itemId)}>
                Remove This Item
            </button>
        );
    }

    renderPizzaItems() {
        const {
            order,
        } = this.props;

        return order.map(pizzaItem => {
            const {
                sizeDetails,
                selectedToppings,
                finalPrice,
                id,
            } = pizzaItem;

            return (
                <div key={id} className="order-overview__item">
                    <h3 className="order-overview-item__title">
                        Item Code: #{id} <br/>
                        Pizza Size: {sizeDetails.name}
                    </h3>
                    <h4> Toppings </h4>
                    <ul className="order-overview-item__toppings">
                        {this.renderToppings(sizeDetails, selectedToppings)}
                    </ul>
                    <div className="order-overview-item__final-cost">
                        Item Price: <span>${finalPrice}</span>
                    </div>
                    {this.renderRemoveItem(id)}
                </div>
            );
        })
    }

    renderTotalOrderCost() {
        const {
            order,
        } = this.props;

        let total = order.reduce((acc, val) => {
            return parseFloat(acc) + parseFloat(val.finalPrice);
        }, 0);

        total = parseFloat(total).toFixed(2);
        return (
            <div className="order-overview__total">
                Total Price for this order is: ${total}
            </div>
        );
    }

    render() {
        return (
            <div className="order-overview">
                {this.renderPizzaItems()}
                {this.renderTotalOrderCost()}
            </div>
        );
    }
}

export default OrderOverview;
