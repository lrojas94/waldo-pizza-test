import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'

import CreateOrder from '../../components/pages/create-order.comp';
import {
    addItemToCart,
} from '../../actions/cart.actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    addItemToCart: (pizzaItem) => {
        dispatch(addItemToCart(pizzaItem));
        dispatch(push('/cart'));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateOrder);