import React from 'react';
import PropTypes from 'prop-types';

const NIL_VALUE = 'nil-value';

class SizeStepComp extends React.Component {
    static propTypes = {
        isLoadingSizes: PropTypes.bool,
        availableSizes: PropTypes.array,
        errorLoadingSizes: PropTypes.object,
        onNextStep: PropTypes.func,
        fetchSizes: PropTypes.func.isRequired,
    };
    
    state = {
        selectedSize: NIL_VALUE,
    }

    componentDidMount() {
        const {
            fetchSizes,
        } = this.props;

        /**
         * Here we'd have the option to just fetch if we don't have `availableSizes`,
         * but since we might want to have this updated at all times, better fetch.
         */
        fetchSizes();
    }

    changeSelect = (e) => {
        const selectedSize = e.target.value;
        this.setState({
            selectedSize,
        });
    };

    renderLoadingMessage() {
        return (
            <div className="info-message">
                <h3 className="info-message__title">
                    We're loading information...
                </h3>
                <p className="info-message__subtitle">
                    In order to ensure you get the best experience out of ordering on this site,
                    we{'\''}re making sure to load the latest information on our databases...
                </p>
            </div>
        )
    }

    renderAvailableSizesSelect() {
        const { selectedSize } = this.state;

        return (
            <div className="order__step-1 order__select-size">
                <label>Select Your Pizza Size</label>
                <select onChange={this.changeSelect} defaultValue={selectedSize}>
                    <option value={NIL_VALUE}> Please Select an option from our list </option>
                    {this.renderAvailableSizesSelectItems()}
                </select>

                { this.renderNext()}
            </div>
        );
    }

    renderAvailableSizesSelectItems() {
        const {
            availableSizes,
        } = this.props;

        return availableSizes.map(size => (
            <option value={size.name.toUpperCase()} key={size.name}>
                {size.name} - Starting at ${size.basePrice}
            </option>
        ));
    }

    renderErrorLoading() {
        return null;
    }

    renderNext() {
        const { onNextStep } = this.props;
        const { selectedSize } = this.state;

        return (
            <div className="order__change-steps">
                <button 
                    className="button--red" 
                    disabled={selectedSize === NIL_VALUE}
                    onClick={ () => onNextStep(selectedSize)}
                > 
                    Continue
                </button>
            </div>
        )
    }

    render() {
        const {
            isLoadingSizes,
            availableSizes,
            errorLoadingSizes,
        } = this.props;


        return (
            <div className="order__step order__step-1">
                { isLoadingSizes && this.renderLoadingMessage()}
                { availableSizes && availableSizes.length !== 0 && this.renderAvailableSizesSelect()}
                { errorLoadingSizes && this.renderErrorLoading()}
            </div>
        );
    }
}

export default SizeStepComp;
