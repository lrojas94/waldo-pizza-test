import React from 'react';
import PropTypes from 'prop-types';

import SizeStep from '../../containers/create-order/size-step.cont';
import DetailsStep from '../../containers/create-order/details-step.cont';

const SIZE_SELECTION = 1;
const DETAILS_SELECTION = 2;
const PLACE_ORDER = 3;

class CreateOrder extends React.Component {
    state = {
        currentStep: SIZE_SELECTION,
        selectedSize: null,
        selectedDetails: null,
    };

    onNextStep = (data) => {
        const {
            currentStep,
        } = this.state;

        switch(currentStep) {
            case SIZE_SELECTION: 
                const selectedSize = data; // This is data in this case.
                const nextStep = DETAILS_SELECTION;
                this.setState({
                    currentStep: nextStep,
                    selectedSize,
                });
            break;
            
            default: 
                console.log('Oh Well...');
            break;
        }
    };

    onPrevStep = () => {
        const {
            currentStep,
        } = this.state;

        switch(currentStep) {
            case DETAILS_SELECTION: 
                this.setState({
                    currentStep: SIZE_SELECTION,
                    selectedDetails: null,
                });
            break;
            
            default: 
                console.log('Oh Well...');
            break;
        }
    };
    
    render() {
        const {
            currentStep,
            selectedSize,
        } = this.state;
        
        return (
            <div className="full-container order">
                {currentStep === SIZE_SELECTION && <SizeStep onNextStep={this.onNextStep} />}
                {
                    currentStep === DETAILS_SELECTION && 
                    <DetailsStep 
                        onPrevStep={this.onPrevStep} 
                        onNextStep={this.onNextStep}
                        selectedSize={selectedSize} 
                    />
                }
            </div>
        );
    }
}

export default CreateOrder;
