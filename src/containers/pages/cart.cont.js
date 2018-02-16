import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import Cart from '../../components/pages/cart.comp';
import { removeItemFromCart } from '../../actions/cart.actions';
import { completeOrder} from '../../actions/order.actions';
const mapStateToProps = state => ({
    cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: itemId => dispatch(removeItemFromCart(itemId)),
    placeOrder: () => {
        dispatch(completeOrder());
        dispatch(push('/')); // Move to orders.
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);