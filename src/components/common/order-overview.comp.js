import React from 'react';
import PropTypes from 'prop-types';
import { calculateOrderTotal } from '../../util/util';

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
        }).filter(topping => !!topping); // Filter them to remove null ones.
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

            const toppingItems = this.renderToppings(sizeDetails, selectedToppings);

            return (
                <div key={id} className="order-overview__item">
                    <h3 className="order-overview-item__title">
                        Item Code: #{id} <br/>
                        Pizza Size: {sizeDetails.name}
                    </h3>
                    <h4> Toppings </h4>
                    <ul className="order-overview-item__toppings">
                        { toppingItems.length !== 0 && toppingItems }
                        { toppingItems.length === 0 && (
                            <li> This item has no toppings selected </li>
                        ) }
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

        const total = calculateOrderTotal(order);
        
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
