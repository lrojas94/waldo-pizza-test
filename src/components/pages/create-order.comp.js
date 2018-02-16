import React from 'react';
import PropTypes from 'prop-types';

import SizeStep from '../../containers/create-order/size-step.cont';

const SIZE_SELECTION = 1;
const DETAILS_SELECTION = 2;
const PLACE_ORDER = 3;

class CreateOrder extends React.Component {
    state = {
        currentStep: SIZE_SELECTION,
        selectedSize: null,
        selectedDetails: null,
    };
    
    render() {
        const {
            currentStep,
        } = this.state;
        
        return (
            <div className="full-container order">
                {currentStep === SIZE_SELECTION && <SizeStep />}
            </div>
        );
    }
}

export default CreateOrder;
