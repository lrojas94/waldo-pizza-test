import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Orders from '../../components/pages/orders.comp';

const mapStateToProps = state => ({
    orders: state.orders,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Orders);