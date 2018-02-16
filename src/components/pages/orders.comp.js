import React from 'react';
import PropTypes from 'prop-types';
import OrderOverview from '../common/order-overview.comp';
import { calculateOrderTotal } from '../../util/util';

const ORDER_NUMBER_PREFIX = 'ONID';

class Orders extends React.Component {
    static propTypes = {
        orders: PropTypes.array.isRequired,
    };

    state = {
        displayingOrder: null,
    };

    displayOrder = (orderId) => {
        const {
            orders,
        } = this.props;

        const displayingOrder = orders.find(order => order.id === orderId);
        if (displayingOrder) {
            this.setState({ displayingOrder });
        }
    }

    renderOrders() {
        const {
            orders,
        } = this.props;

        if (!orders) {
            return null;
        }

        return orders.map(order => {
            return (
                <div className="order-item" key={order.id} onClick={() => this.displayOrder(order.id)}>
                    Order #{ORDER_NUMBER_PREFIX}{order.id} - Total: ${calculateOrderTotal(order)}
                </div>
            );
        })
    }

    render() {
        const {
            displayingOrder,
        } = this.state;

        return (
            <div className="full-container order">
                <h1> Your Orders </h1>
                <br />
                <p>
                    Here it will display all of your completed orders. This means you must go to the cart and place an order first.
                    You can check more about them by clicking into their order number.
                </p>
                <br />
                <div className="your-orders">
                    {this.renderOrders()}
                </div>
                {!!displayingOrder &&(
                    <React.Fragment>
                        <h3> Order #{ORDER_NUMBER_PREFIX}{displayingOrder.id}</h3>
                        <OrderOverview order={displayingOrder} />
                    </React.Fragment>
                )}
               
            </div>
        );
    }
}

export default Orders;
