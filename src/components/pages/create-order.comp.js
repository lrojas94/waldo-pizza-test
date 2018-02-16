import React from 'react';

class CreateOrder extends React.Component {
    
    render() {
        const {
            idCounter,
            incrementIdCounter,
        } = this.props;
        
        return (
            <div>
                This is where I feel like CreateOrder! :)
                <br/>
                Counter is: {idCounter}
                <br/>
                <button onClick={incrementIdCounter}> Add to Counter </button>
            </div>
        );
    }
}

export default CreateOrder;
