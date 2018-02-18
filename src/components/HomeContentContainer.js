import React, { Component } from 'react';

import HomeContent from './HomeContent';

// ------------

class HomeContentContainer extends Component {
    constructor(props) {
    	super(props);
    	this.state = {
    		user: this.props.user,
    	};

    }


    render() {
    	return (
            <div className="contentWrapper">
                <HomeContent
                    user={this.state.user}
                />
            </div>
        );
    }
}




export default HomeContentContainer;