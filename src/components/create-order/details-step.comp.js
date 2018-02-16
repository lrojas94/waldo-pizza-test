import React from 'react';
import PropTypes from 'prop-types';
import { calculateTotalPriceOfPizzaItem } from '../../util/util';

class DetailsStepComp extends React.Component {
    static propTypes = {
        isLoadingSize: PropTypes.bool,
        sizeDetails: PropTypes.object,
        errorLoadingDetails: PropTypes.object,
        onNextStep: PropTypes.func.isRequired,
        onPrevStep: PropTypes.func.isRequired,
        fetchSizeByName: PropTypes.func.isRequired,
        selectedSize: PropTypes.string.isRequired,
    };
    
    state = {
        selectedToppings: {},
    };

    componentDidMount() {
        const {
            fetchSizeByName,
            selectedSize,
        } = this.props;

        /**
         * Ensure we get details of that size.
         */
        fetchSizeByName(selectedSize);
    }

    componentWillReceiveProps(newProps) {
        const { sizeDetails } = newProps;
        if (sizeDetails && sizeDetails !== this.props.sizeDetails) {
            // parseNewProps:
            this.parseToppingsInState(sizeDetails.toppings);
        }
    }

    /**
     * Gets all toppings inside the state so we can select / remove as we desire.
     * We could even reset to default easily with this method by passing this.props.sizeDetails.toppings
     * once again.
     */
    parseToppingsInState = (toppings) => {
        const selectedToppings = {};
        toppings.forEach(toppingItem => {
            const { topping } = toppingItem;
            selectedToppings[topping.name] = toppingItem.defaultSelected;
        });

        this.setState({ selectedToppings });
    }

    maxToppingsReached() {
        const { sizeDetails } = this.props;
        const { selectedToppings } = this.state;

        if (!sizeDetails || !sizeDetails.maxToppings) {
            return false;
        }

        const keys = Object.keys(selectedToppings);
        let toppings = 0;

        keys.forEach(key => {
            if (selectedToppings[key]) {
                toppings++;
            }
        });
        
        return toppings >= sizeDetails.maxToppings;
    }


    toggleTopping(toppingName) {
        const {
            selectedToppings,
        } = this.state;

        if (!selectedToppings[toppingName] && this.maxToppingsReached()) {
            return; // can't change state there...
        }

        this.setState({
            selectedToppings: {
                ...selectedToppings,
                [toppingName]: !selectedToppings[toppingName],
            },
        });
    }

    onNextStep = () => {
        const {
            onNextStep,
            sizeDetails,
        } = this.props;
        
        const {
            selectedToppings,
        } = this.state;

        onNextStep({
            /**
             * As mentioned in the project desc. prices might change, however, if I placed an order 
             * at some price X, that shouldn't change. Here is to keep all the info,
             */
            sizeDetails,
            selectedToppings,
            /**
             * Useful to avoid re-computation on the cart. 
             */
            finalPrice: calculateTotalPriceOfPizzaItem({ sizeDetails, selectedToppings }).toFixed(2),
        }); 
    }

    renderLoadingMessage() {
        const {
            selectedSize,
        } = this.props;

        return (
            <div className="info-message">
                <h3 className="info-message__title">
                    We're loading information about a {selectedSize} Pizza!
                </h3>
                <p className="info-message__subtitle">
                    Give us a second to get you all our toppings and recommendations.
                    We{'\''}ll get back to you right away!
                </p>
            </div>
        )
    }

    renderDetails() {
        const { sizeDetails } = this.props;

        return (
            <div className="order__step-2">
                <p className="order-header">
                    You have selected a {sizeDetails.name} Pizza with a base price of <strong>${sizeDetails.basePrice}</strong>.
                    { sizeDetails.maxToppings && (
                        <React.Fragment>
                            <br/>
                            <span>Please note that this size has a limit of <strong>{sizeDetails.maxToppings}</strong> toppings.</span>
                        </React.Fragment>
                    )}
                </p>
                { this.renderToppings() }
                {
                    this.maxToppingsReached() &&
                    <div className="danger"><strong> You have reached your max toppings! </strong></div>
                } 
                { this.renderFinalPrice() }
                { this.renderNavigation() }
            </div>
        );
    }

    renderToppings() {
        const { sizeDetails } = this.props;
        const { toppings } = sizeDetails;
        const { selectedToppings } = this.state;

        return toppings.map(toppingItem => {
            const { topping } = toppingItem;
            return (
                <div key={topping.name} className="order-step-2__topping">
                    <input 
                        type="checkbox" 
                        onChange={() => this.toggleTopping(topping.name)} 
                        id={topping.name} 
                        checked={!!selectedToppings[topping.name]}
                    /> 
                    <label htmlFor={topping.name}>{topping.name} (Price: <strong>${topping.price}</strong>)</label>
                </div>
            );
        });

    }

    renderFinalPrice() {
        const {
            sizeDetails,
        } = this.props;

        const {
            selectedToppings,
        } = this.state;

        const total = calculateTotalPriceOfPizzaItem({ sizeDetails, selectedToppings });

        return (
            <div className="order-step-2__total">
                Your grand total is: <strong>${total.toFixed(2)}</strong>
            </div>
        );
    }

    renderErrorLoading() {
        return null;
    }

    renderNavigation() {
        const { 
            onPrevStep,
        } = this.props;

        return (
            <div className="order__change-steps">
                <button
                    className="button--red"
                    onClick={() => onPrevStep()}
                >
                    Back
                </button>
                <button 
                    className="button--red" 
                    onClick={ this.onNextStep }
                > 
                    Add Item To Cart
                </button>
            </div>
        )
    }

    render() {
        const {
            isLoadingSize,
            sizeDetails,
            errorLoadingSizes,
        } = this.props;


        return (
            <div className="order__step order__step-1">
                { isLoadingSize && this.renderLoadingMessage()}
                { sizeDetails && this.renderDetails() }
                { errorLoadingSizes && this.renderErrorLoading()}
            </div>
        );
    }
}

export default DetailsStepComp;
