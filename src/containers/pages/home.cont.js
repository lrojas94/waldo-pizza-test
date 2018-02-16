import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../../components/pages/home.comp';

const mapStateToProps = state => ({
    orders: state.orders,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);