import { connect } from 'react-redux';
import Cart from '../../components/pages/cart.comp';
import { removeItemFromCart } from '../../actions/cart.actions';

const mapStateToProps = state => ({
    cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: itemId => dispatch(removeItemFromCart(itemId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);