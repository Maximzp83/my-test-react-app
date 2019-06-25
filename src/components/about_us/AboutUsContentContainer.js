import React, { Component } from 'react';

import AboutUsContent from './AboutUsContent';

// ------------

class AboutUsContentContainer extends Component {
    constructor(props) {
    	super(props);
    	this.state = {}
    		
    	};
    


    render() {
    	return (
            <div className="contentWrapper">
                <AboutUsContent />
            </div>
        );
    }
}



export default AboutUsContentContainer;