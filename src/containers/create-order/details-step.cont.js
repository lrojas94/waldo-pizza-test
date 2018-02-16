import { connect } from 'react-redux';
import DetailsStep from '../../components/create-order/details-step.comp';
import {
    fetchSizeByName,
} from '../../actions/pizza-size.actions';

const mapStateToProps = state => ({
    isLoadingSize: state.pizzaSize.isLoading,
    sizeDetails: state.pizzaSize.details,
    errorLoadingDetails: state.pizzaSize.error,
});

const mapDispatchToProps = dispatch => ({
    fetchSizeByName: (name) => dispatch(fetchSizeByName(name)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailsStep);