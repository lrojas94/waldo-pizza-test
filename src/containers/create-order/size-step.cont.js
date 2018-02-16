import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SizeStep from '../../components/create-order/size-step.comp';
import {
    fetchAllSizes,
} from '../../actions/pizza-sizes.actions';

const mapStateToProps = state => ({
    isLoadingSizes: state.pizzaSizes.isLoading,
    availableSizes: state.pizzaSizes.sizes,
    errorLoadingSizes: state.pizzaSizes.error,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchSizes: () => dispatch(fetchAllSizes),
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SizeStep);