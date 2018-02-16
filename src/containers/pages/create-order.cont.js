import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CreateOrder from '../../components/pages/create-order.comp';

const mapStateToProps = state => ({
    idCounter: state.idCounter,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateOrder);