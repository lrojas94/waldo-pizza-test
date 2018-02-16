import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CreateOrder from '../../components/pages/create-order.comp';
import {
    incrementIdCounter,
} from '../../actions/id-counter.actions';
const mapStateToProps = state => ({
    idCounter: state.idCounter,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    incrementIdCounter,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateOrder);